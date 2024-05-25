import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await auth();

  console.log("middleware", process.env.NEXT_AUTH_URL, session, pathname);
  console.log(
    "SESSION",
    session,
    typeof session,
    (session as unknown as string) === "Bad request."
  );
  console.log("PATHNAME", pathname);

  // 체크
  if (typeof session === "string" && session === "Bad request.") {
    console.log("BAD REQUEST");
    console.log("middleware", process.env.NEXT_AUTH_URL, session, pathname);
    console.log("SESSION", session, typeof session);
    console.log("PATHNAME", pathname);
    return NextResponse.redirect(`${process.env.NEXT_AUTH_URL}`);
  }
  if (pathname === "/profile") {
    return NextResponse.redirect(
      `${process.env.NEXT_AUTH_URL}/profile/${session?.user.nickname}`
    );
  }
  if (session && pathname === "/") {
    return NextResponse.redirect(`${process.env.NEXT_AUTH_URL}/main`);
  } else if (!session && pathname !== "/") {
    return NextResponse.redirect(`${process.env.NEXT_AUTH_URL}`);
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
