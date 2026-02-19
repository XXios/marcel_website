import { NextRequest, NextResponse } from "next/server";
import { getAdminClient } from "@/lib/supabase";

function unauthorized() {
  return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
}

function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;
  const password = authHeader.replace("Bearer ", "");
  return password === process.env.ADMIN_PASSWORD;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) return unauthorized();

  const supabase = getAdminClient();
  const { data, error } = await supabase
    .from("about_info")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function PUT(request: NextRequest) {
  if (!checkAuth(request)) return unauthorized();

  try {
    const body = await request.json();
    const supabase = getAdminClient();

    // Only allow updating specific fields
    const updates: Record<string, string> = {};
    const allowedFields = [
      "title",
      "subtitle",
      "paragraph_1",
      "paragraph_2",
      "paragraph_3",
      "image_url",
    ];
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updates[field] = body[field];
      }
    }

    const { data, error } = await supabase
      .from("about_info")
      .update(updates)
      .eq("id", 1)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }
}
