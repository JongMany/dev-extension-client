import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      // id: number;
      nickname: string;
      email: string;
      accessToken: string;
    };
  }
}
