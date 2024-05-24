import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await auth();

  console.log("middleware", process.env.NEXTAUTH_URL, session, pathname);
  console.log("SESSION", session);
  console.log("PATHNAME", pathname);

  if (pathname === "/profile") {
    return NextResponse.redirect(
      `${process.env.NEXTAUTH_URL}/profile/${session?.user.nickname}`
    );
  }
  if (session && pathname === "/") {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/main`);
  } else if (!session && pathname !== "/") {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}`);
  } else {
    // return;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/main",
    "/",
    "/profile",
    "/rank",
    "/goal",
    "/dashboard",
    "/profile/:path*",
  ],
};
