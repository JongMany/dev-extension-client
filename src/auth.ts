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
        // console.log(response);
        if (response.status === 200) {
          // 서버의 쿠키를 받아서 브라우저에 쿠키를 심는 코드 (프론트 서버에 쿠키를 두면 개인정보 문제 발생)
          let setCookie = response.headers.get("Set-Cookie");

          if (setCookie) {
            const parsed = cookie.parse(setCookie);
            // cookies().set("refreshToken", parsed["refreshToken"], {
            //   httpOnly: true,
            //   // domain: "http://localhost:8080",
            //   sameSite: "lax",
            // });
            cookies().set("refreshToken", parsed["refreshToken"], {
              httpOnly: true,
              sameSite: "lax",
            });
          }
          const data = await response.json();
          // console.log(data);
          //
          return {
            ...data,
            id: data.apiKey,
            apiKey: data.apiKey,
            name: data.nickname,
            email: data.email,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // console.log("user", user, (user as any)?.accessToken);
        (token as any).accessToken = (user as any)?.accessToken;
      }
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      // console.log("token", token);
      // console.log("session", session, token);
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
