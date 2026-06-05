import { NextResponse } from "next/server";

type AuthRequest = {
  password?: string;
  redirect?: string;
};

export async function POST(request: Request) {
  const previewPassword = process.env.PREVIEW_PASSWORD;
  if (!previewPassword) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  let body: AuthRequest = {};
  try {
    body = (await request.json()) as AuthRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const submittedPassword = body.password?.trim();
  if (!submittedPassword || submittedPassword !== previewPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const safeRedirect =
    typeof body.redirect === "string" && body.redirect.startsWith("/") ? body.redirect : "/";
  const response = NextResponse.json({ ok: true, redirect: safeRedirect }, { status: 200 });
  response.cookies.set({
    name: "preview_auth",
    value: "authorized",
    maxAge: 60 * 60 * 24 * 2,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
