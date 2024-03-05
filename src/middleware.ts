import { auth } from "@/auth";
// export { default } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // console.log("middleware", request);
  const session = await auth();
  // console.log("middleware", session);
  if (!session) {
    // console.log("redirect!");
    return NextResponse.redirect("http://localhost:3000/");
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/main"],
};
