import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import cookie from "cookie";
import { cookies } from "next/headers";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: "/",
    newUser: "/signup",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      authorize: async (credentials, req) => {
        console.log("CREDENTIALS", credentials);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
              apiKey: credentials?.apiKey,
            }),
            cache: "no-store",
            credentials: "include",
          }
        );
        console.log("RESPONSE", response);
        if (response.status === 200) {
          // 서버의 쿠키를 받아서 브라우저에 쿠키를 심는 코드 (프론트 서버에 쿠키를 두면 개인정보 문제 발생)
          let setCookie = response.headers.get("Set-Cookie");
          let parsed;
          if (setCookie) {
            parsed = cookie.parse(setCookie);
            const cookieStore = cookies();
            cookieStore.set("refreshToken", parsed["refreshToken"], {
              httpOnly: true,
              sameSite: "lax",
            });
          }
          const data = await response.json();
          // console.log("data", data, parsed);
          return {
            ...data,
            id: data.apiKey,
            apiKey: data.apiKey,
            name: data.nickname,
            email: data.email,
            refreshToken: parsed ? parsed["refreshToken"] : null, // 이게 과연 좋은 코드일까?
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      /*       if (user) {
        (token as any).accessToken = (user as any)?.accessToken;
      } */
      console.log("triggerJWT", trigger);
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
      // return Promise.resolve(token);
    },
    async session({ session, token, trigger, user }) {
      console.log("session", session, "token", token, "trigger", trigger);
      // console.log("token", token);
      // console.log("token", token);
      // console.log("session", session, token);
      /*    if (token.accessToken) {
        (session as any).accessToken = token.accessToken;
      }
      console.log("trigger");
      if (trigger === "update") {
        console.log("session", session, "newSession", newSession);
        const accessToken = session.accessToken;
        session.accessToken = accessToken;
        (token as any).accessToken = accessToken;
        console.log("session", session);
      }
      return session; */
      (session as any).user = token;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
  // trustHost: process.env.NextAUTH_URL || "http://localhost:3000",
});
