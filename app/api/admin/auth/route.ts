import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { error: "Admin-Passwort nicht konfiguriert" },
        { status: 500 }
      );
    }

    if (password === adminPassword) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Falsches Passwort" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage" },
      { status: 400 }
    );
  }
}
