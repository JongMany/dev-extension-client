import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await auth();

  if (session && pathname === "/") {
    return NextResponse.redirect("http://localhost:3000/main");
  } else if (!session && pathname !== "/") {
    return NextResponse.redirect("http://localhost:3000/");
  } else {
    // return;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/main", "/", "/profile", "/rank", "/goal", "/dashboard"],
};
