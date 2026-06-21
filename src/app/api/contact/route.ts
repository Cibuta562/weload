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
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASSWORD,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  // If SMTP is not yet configured, log and return a clear status so the form can
  // be wired up later without changing the frontend.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    console.warn("[contact] SMTP not configured — submission received but not emailed:", {
      name,
      email,
      service: body.service,
    });
    return NextResponse.json(
      { ok: false, error: "Email service not configured" },
      { status: 503 }
    );
  }

  const to = CONTACT_TO || SMTP_USER;
  const from = CONTACT_FROM || SMTP_USER;

  const fields: [string, string | undefined][] = [
    ["Name", body.name],
    ["Email", body.email],
    ["Phone", body.phone],
    ["Company", body.company],
    ["Service", body.service],
    ["Locale", body.locale],
  ];

  const textLines = fields
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v}`)
    .concat(["", "Message:", message]);

  const htmlRows = fields
    .filter(([, v]) => v && v.trim())
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;color:#16205b">${k}</td><td style="padding:4px 0">${escapeHtml(
          v as string
        )}</td></tr>`
    )
    .join("");

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT ? Number(SMTP_PORT) : 587,
      secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    await transporter.sendMail({
      from: `"WeLoad — Website" <${from}>`,
      to,
      replyTo: email,
      subject: `New quote request${body.service ? ` — ${body.service}` : ""} (${name})`,
      text: textLines.join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#0d1338">
          <h2 style="color:#16205b">New contact request</h2>
          <table style="border-collapse:collapse">${htmlRows}</table>
          <h3 style="color:#16205b;margin-top:20px">Message</h3>
          <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
        </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
