"use client";

import { signOut } from "next-auth/react";

export default function SignoutButton() {
  const signoutHandler = () => {
    signOut();
    localStorage.removeItem("email");
    localStorage.removeItem("accessToken");
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
