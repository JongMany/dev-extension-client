import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        console.log("credentials", {
          email: credentials?.email,
          password: credentials?.password,
          apiKey: credentials?.apiKey,
        });
        console.log("req", req.body);
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
          }
        );
        if (response.status === 200) {
          console.log("cookie", response.headers.get("set-cookie"));
          const data = await response.json();
          return data;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log("jwt", { token, user });
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // session.user = token as any;
      // console.log("session", session, token);
      return session;
    },
  },
});
