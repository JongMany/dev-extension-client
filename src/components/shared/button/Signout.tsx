"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignoutButton() {
  const router = useRouter();
  const signoutHandler = () => {
    signOut({
      callbackUrl: "http://43.203.55.144/",
      redirect: true,
    });
    // router.replace(process.env.NEXT_AUTH_URL || "http://43.203.55.144/");

    // localStorage.removeItem("email");
    // localStorage.removeItem("accessToken");
  };

  return (
    <button
      className="transition duration-200 border-black border-solid border-2 px-2 py-1 rounded-md shadow-md hover:shadow-xl hover:font-bold"
      onClick={signoutHandler}
    >
      로그아웃
    </button>
  );
}
