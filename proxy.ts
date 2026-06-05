import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const password = process.env.PREVIEW_PASSWORD;
  const { pathname } = request.nextUrl;

  // Preview wall is opt-in: only active when a password is provided.
  if (!password) return NextResponse.next();

  // Allow the preview page and static assets.
  const isAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/robots");
  if (pathname.startsWith("/preview") || pathname.startsWith("/api/preview-auth") || isAsset) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("preview_auth")?.value;
  if (cookie === "authorized") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/preview";
  url.searchParams.set("redirect", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api/).*)"],
};
