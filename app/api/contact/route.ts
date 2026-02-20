import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Vogel Maler & Gestalter <kontakt@vogelmarcel.de>";
const TO_EMAIL = "marcel.vogel.maler@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name ist erforderlich." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Gültige E-Mail-Adresse ist erforderlich." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Nachricht ist erforderlich." }, { status: 400 });
    }

    // Basic length limits
    if (name.length > 200 || email.length > 200 || (phone && phone.length > 50) || message.length > 5000) {
      return NextResponse.json({ error: "Eingabe zu lang." }, { status: 400 });
    }

    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedPhone = phone ? phone.trim() : "";
    const sanitizedMessage = message.trim();

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: sanitizedEmail,
      subject: `Neue Projektanfrage von ${sanitizedName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <div style="border-bottom: 2px solid #c8a55c; padding-bottom: 20px; margin-bottom: 28px;">
            <h1 style="font-size: 22px; font-weight: 600; margin: 0; color: #1a1a1a;">Neue Projektanfrage</h1>
            <p style="font-size: 14px; color: #666; margin: 6px 0 0;">über vogelmarcel.de</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            <tr>
              <td style="padding: 10px 0; vertical-align: top; width: 100px; font-size: 14px; font-weight: 600; color: #555;">Name</td>
              <td style="padding: 10px 0; font-size: 15px; color: #1a1a1a;">${escapeHtml(sanitizedName)}</td>
            </tr>
            ${sanitizedPhone ? `
            <tr>
              <td style="padding: 10px 0; vertical-align: top; width: 100px; font-size: 14px; font-weight: 600; color: #555;">Telefon</td>
              <td style="padding: 10px 0; font-size: 15px; color: #1a1a1a;">
                <a href="tel:${escapeHtml(sanitizedPhone)}" style="color: #c8a55c; text-decoration: none;">${escapeHtml(sanitizedPhone)}</a>
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px 0; vertical-align: top; width: 100px; font-size: 14px; font-weight: 600; color: #555;">E-Mail</td>
              <td style="padding: 10px 0; font-size: 15px; color: #1a1a1a;">
                <a href="mailto:${escapeHtml(sanitizedEmail)}" style="color: #c8a55c; text-decoration: none;">${escapeHtml(sanitizedEmail)}</a>
              </td>
            </tr>
          </table>

          <div style="background: #f8f7f4; border-radius: 10px; padding: 20px 24px; margin-bottom: 28px;">
            <p style="font-size: 14px; font-weight: 600; color: #555; margin: 0 0 10px;">Nachricht</p>
            <p style="font-size: 15px; line-height: 1.7; color: #1a1a1a; margin: 0; white-space: pre-wrap;">${escapeHtml(sanitizedMessage)}</p>
          </div>

          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <p style="font-size: 12px; color: #999; margin: 0;">
              Sie können direkt auf diese E-Mail antworten, um ${escapeHtml(sanitizedName)} zu kontaktieren.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
