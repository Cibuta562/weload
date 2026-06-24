import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const SITE_URL = "https://weload.eu";

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

// ----- Email content (localized) ---------------------------------------------

interface EmailCopy {
  subject: string;
  greeting: (name: string) => string;
  p1: string;
  recapTitle: string;
  p2: string;
  signoff: string;
  team: string;
  tagline: string;
  fieldLabels: { service: string; phone: string; company: string };
}

const emailCopy: Record<string, EmailCopy> = {
  ro: {
    subject: "Am primit solicitarea ta — WeLoad",
    greeting: (n) => `Bună ${n},`,
    p1: "Îți mulțumim pentru încrederea acordată! Am primit solicitarea ta și revenim cu un răspuns în cel mai scurt timp — de obicei în mai puțin de 30 de minute în programul de lucru.",
    recapTitle: "Rezumatul solicitării tale",
    p2: "Dacă vrei să adaugi detalii, poți răspunde direct la acest email.",
    signoff: "Cu drag,",
    team: "Echipa WeLoad",
    tagline: "Transport și logistică internațională",
    fieldLabels: { service: "Serviciu", phone: "Telefon", company: "Companie" },
  },
  en: {
    subject: "We received your request — WeLoad",
    greeting: (n) => `Hi ${n},`,
    p1: "Thank you for your trust! We've received your request and will get back to you shortly — usually in under 30 minutes during business hours.",
    recapTitle: "Summary of your request",
    p2: "If you'd like to add anything, just reply to this email.",
    signoff: "Best regards,",
    team: "The WeLoad Team",
    tagline: "International transport & logistics",
    fieldLabels: { service: "Service", phone: "Phone", company: "Company" },
  },
  hu: {
    subject: "Megkaptuk a kérésed — WeLoad",
    greeting: (n) => `Szia ${n},`,
    p1: "Köszönjük a bizalmat! Megkaptuk a kérésed, és hamarosan válaszolunk — munkaidőben általában 30 percen belül.",
    recapTitle: "A kérésed összefoglalása",
    p2: "Ha bármit hozzá szeretnél tenni, csak válaszolj erre az e-mailre.",
    signoff: "Üdvözlettel,",
    team: "A WeLoad csapata",
    tagline: "Nemzetközi szállítmányozás és logisztika",
    fieldLabels: { service: "Szolgáltatás", phone: "Telefon", company: "Cég" },
  },
};

function copyFor(locale: string): EmailCopy {
  return emailCopy[locale] ?? emailCopy.ro;
}

/** Reusable HTML signature with the WeLoad logo, contact details and a
 *  confidentiality / GDPR disclaimer. Stacked, table-free layout so it renders
 *  well on every client and on mobile without media queries. */
function signatureHtml(tagline: string): string {
  return `
  <div style="margin-top:28px;max-width:560px;font-family:Arial,Helvetica,sans-serif">
    <img src="${SITE_URL}/email-logo.png" alt="WeLoad" width="150" style="display:block;width:150px;max-width:60%;height:auto;border:0" />
    <div style="margin-top:14px;padding-top:14px;border-top:3px solid #f15928;font-size:13px;color:#475569;line-height:1.8">
      <div style="font-weight:bold;color:#16205b;font-size:14px;margin-bottom:4px">${tagline}</div>
      <div><span style="color:#94a3b8">Tel:</span> <a href="tel:${site.phoneHref}" style="color:#16205b;text-decoration:none">${site.phone}</a></div>
      <div><span style="color:#94a3b8">Email:</span> <a href="mailto:${site.email}" style="color:#16205b;text-decoration:none">${site.email}</a></div>
      <div><span style="color:#94a3b8">Web:</span> <a href="${SITE_URL}" style="color:#16205b;text-decoration:none">${site.domain}</a></div>
    </div>
    <p style="margin:16px 0 0;font-size:11px;line-height:1.6;color:#94a3b8">
      This e-mail and any attachments are confidential and intended only for the addressee. If you are not the intended recipient, any use, copying or distribution is prohibited under EU-GDPR 2016/679 — please notify us and delete it.
      <a href="${SITE_URL}/ro/privacy" style="color:#94a3b8;text-decoration:underline">${site.domain}/privacy</a>
    </p>
  </div>`;
}

function recapRows(lead: Lead, c: EmailCopy): string {
  const rows: [string, string][] = [
    [c.fieldLabels.service, lead.service],
    [c.fieldLabels.phone, lead.phone],
    [c.fieldLabels.company, lead.company],
  ];
  return rows
    .filter(([, v]) => v.trim())
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 14px 4px 0;font-weight:600;color:#16205b">${k}</td><td style="padding:4px 0;color:#334155">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");
}

/** Automatic confirmation sent to the visitor. */
function clientEmailHtml(lead: Lead): string {
  const c = copyFor(lead.locale);
  return `
  <div style="max-width:560px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#0d1338">
    <p style="font-size:16px;font-weight:bold;color:#16205b">${c.greeting(escapeHtml(lead.name))}</p>
    <p style="font-size:14px;line-height:1.7;color:#334155">${c.p1}</p>
    <h3 style="font-size:14px;color:#16205b;margin:22px 0 6px">${c.recapTitle}</h3>
    <table style="border-collapse:collapse;font-size:13px">${recapRows(lead, c)}</table>
    <p style="font-size:13px;color:#334155;margin-top:6px;white-space:pre-wrap;line-height:1.6">${escapeHtml(
      lead.message
    )}</p>
    <p style="font-size:14px;line-height:1.7;color:#334155;margin-top:18px">${c.p2}</p>
    <p style="font-size:14px;color:#16205b;margin-top:18px">${c.signoff}<br/><strong>${c.team}</strong></p>
    ${signatureHtml(c.tagline)}
  </div>`;
}

/** Internal notification to the WeLoad inbox. */
function adminEmailHtml(lead: Lead): string {
  const fields: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company", lead.company],
    ["Service", lead.service],
    ["Locale", lead.locale],
    ["Consent", `${lead.consent} (${lead.consentAt})`],
  ];
  const rows = fields
    .filter(([, v]) => v.trim())
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;color:#16205b">${k}</td><td style="padding:4px 0">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0d1338">
      <h2 style="color:#16205b">New contact request</h2>
      <table style="border-collapse:collapse">${rows}</table>
      <h3 style="color:#16205b;margin-top:20px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(lead.message)}</p>
      ${signatureHtml("Transport și logistică internațională")}
    </div>`;
}

/**
 * Sends the internal notification (to the WeLoad inbox) AND an automatic
 * confirmation to the visitor. Returns false when SMTP isn't configured.
 * The admin notification determines success; the client copy is best-effort.
 */
async function sendEmails(lead: Lead): Promise<boolean> {
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
  const c = copyFor(lead.locale);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT ? Number(SMTP_PORT) : 587,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  // 1) Internal notification — this determines success.
  await transporter.sendMail({
    from: `"WeLoad Website" <${from}>`,
    to,
    replyTo: lead.email,
    subject: `New quote request${lead.service ? ` (${lead.service})` : ""} — ${lead.name}`,
    html: adminEmailHtml(lead),
  });

  // 2) Automatic confirmation to the visitor — best-effort.
  try {
    await transporter.sendMail({
      from: `"WeLoad" <${from}>`,
      to: lead.email,
      replyTo: to,
      subject: c.subject,
      html: clientEmailHtml(lead),
    });
  } catch (err) {
    console.error("[contact] Failed to send client confirmation:", err);
  }

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
    source: "weload.eu",
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
    emailOk = await sendEmails(lead);
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
