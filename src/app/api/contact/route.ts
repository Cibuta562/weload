import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  locale?: string;
  consent?: boolean;
}

/** Normalized lead, this is exactly the JSON shape forwarded to the CRM. */
interface Lead {
  source: string;
  submittedAt: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  locale: string;
  // GDPR: proof that the user consented, with the timestamp it was given.
  consent: boolean;
  consentAt: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Forwards the lead to the external CRM via an HTTP webhook.
 * Returns false when no CRM is configured; throws when the CRM rejects the lead.
 */
async function forwardToCrm(lead: Lead): Promise<boolean> {
  const { CRM_WEBHOOK_URL, CRM_API_KEY } = process.env;
  if (!CRM_WEBHOOK_URL) return false;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(CRM_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(CRM_API_KEY ? { Authorization: `Bearer ${CRM_API_KEY}` } : {}),
      },
      body: JSON.stringify(lead),
      signal: controller.signal,
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`CRM responded ${res.status} ${detail}`.trim());
    }
    return true;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Sends an email notification for the lead.
 * Returns false when SMTP is not configured; throws when sending fails.
 */
async function sendEmail(lead: Lead): Promise<boolean> {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASSWORD,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return false;

  const to = CONTACT_TO || SMTP_USER;
  const from = CONTACT_FROM || SMTP_USER;

  const fields: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company", lead.company],
    ["Service", lead.service],
    ["Locale", lead.locale],
  ];

  const textLines = fields
    .filter(([, v]) => v.trim())
    .map(([k, v]) => `${k}: ${v}`)
    .concat(["", "Message:", lead.message]);

  const htmlRows = fields
    .filter(([, v]) => v.trim())
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;color:#16205b">${k}</td><td style="padding:4px 0">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT ? Number(SMTP_PORT) : 587,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  await transporter.sendMail({
    from: `"WeLoad Website" <${from}>`,
    to,
    replyTo: lead.email,
    subject: `New quote request${lead.service ? ` (${lead.service})` : ""} ${lead.name}`,
    text: textLines.join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;color:#0d1338">
        <h2 style="color:#16205b">New contact request</h2>
        <table style="border-collapse:collapse">${htmlRows}</table>
        <h3 style="color:#16205b;margin-top:20px">Message</h3>
        <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(lead.message)}</p>
      </div>`,
  });

  return true;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 422 });
  }
  // GDPR: do not process personal data without explicit consent.
  if (body.consent !== true) {
    return NextResponse.json({ error: "Consent required" }, { status: 422 });
  }

  const now = new Date().toISOString();
  const lead: Lead = {
    source: "weload.ro",
    submittedAt: now,
    name,
    email,
    message,
    phone: body.phone?.trim() || "",
    company: body.company?.trim() || "",
    service: body.service?.trim() || "",
    locale: body.locale?.trim() || "",
    consent: true,
    consentAt: now,
  };

  // Primary destination: the CRM. Email (if configured) is a best-effort copy.
  const crmConfigured = Boolean(process.env.CRM_WEBHOOK_URL);
  let crmOk = false;
  if (crmConfigured) {
    try {
      await forwardToCrm(lead);
      crmOk = true;
    } catch (err) {
      console.error("[contact] Failed to forward lead to CRM:", err);
    }
  }

  let emailOk = false;
  try {
    emailOk = await sendEmail(lead);
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
  }

  // Success if at least one delivery channel accepted the lead.
  if (crmOk || emailOk) {
    return NextResponse.json({ ok: true });
  }

  // Nothing delivered. Distinguish "not configured" from "configured but failed".
  if (!crmConfigured && !process.env.SMTP_HOST) {
    console.warn("[contact] No delivery channel configured, submission received but not stored:", {
      name,
      email,
      service: lead.service,
    });
    return NextResponse.json({ ok: false, error: "No delivery channel configured" }, { status: 503 });
  }

  return NextResponse.json({ error: "Failed to deliver" }, { status: 502 });
}
