"use client";

import React from "react";
import { useSession } from "next-auth/react";
import useSaveUserData from "@/app/(main)/_lib/useSaveUserData";

export const Profile = () => {
  useSaveUserData();
  const { data: session } = useSession();

  return <div className="font-bold">{session?.user.name}님 안녕하세요</div>;
};
