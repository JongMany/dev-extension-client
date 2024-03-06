import { auth } from "@/auth";
// export { default } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // console.log("middleware", request)
  const { pathname } = request.nextUrl;
  const session = await auth();
  console.log("middleware", session);
  if (session && pathname === "/") {
    // return NextResponse.rewrite("http://localhost:3000/main");
    return NextResponse.redirect("http://localhost:3000/main");
  } else if (!session && pathname !== "/") {
    // console.log("redirect!");
    return NextResponse.redirect("http://localhost:3000/");
  } else {
    console.log("nothing");
    return;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/main", "/", "/profile", "/rank", "/goal", "/dashboard"],
};
