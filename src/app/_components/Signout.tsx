"use client";

import { signOut } from "next-auth/react";

export default function SignoutButton() {
  const signoutHandler = () => {
    signOut();
  };
  return <button onClick={signoutHandler}>로그아웃</button>;
}
