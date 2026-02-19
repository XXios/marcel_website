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
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) return unauthorized();

  try {
    const body = await request.json();
    const supabase = getAdminClient();

    const { data, error } = await supabase
      .from("services")
      .insert({
        title: body.title,
        description: body.description,
        icon_name: body.icon_name || "paint-roller",
        image_url: body.image_url || "",
        sort_order: body.sort_order ?? 0,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  if (!checkAuth(request)) return unauthorized();

  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json({ error: "ID fehlt" }, { status: 400 });
    }

    const supabase = getAdminClient();
    const updates: Record<string, unknown> = {};
    const allowedFields = ["title", "description", "icon_name", "image_url", "sort_order"];
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updates[field] = body[field];
      }
    }

    const { data, error } = await supabase
      .from("services")
      .update(updates)
      .eq("id", body.id)
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

export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) return unauthorized();

  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID fehlt" }, { status: 400 });
    }

    const supabase = getAdminClient();
    const { error } = await supabase
      .from("services")
      .delete()
      .eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }
}
