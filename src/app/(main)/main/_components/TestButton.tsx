"use client";

import { fetchExtended } from "@/lib/fetchExtended";
import { fetchTest } from "@/lib/test";
import { useSession } from "next-auth/react";

export default function TestButton() {
  const session = useSession();
  const onClickHandler = async () => {
    if (session && session.data) {
      const acessToken = localStorage.getItem("accessToken");
      // const res = await fetchExtended(`/user/get-apiKey`, {
      const res = await fetchExtended(`/goal/all`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${acessToken}`,
        },
      });
      // const res = await fetchTest(session?.data?.accessToken!);
      const data = await res.json();
      console.log(data);
    }
  };
  return <button onClick={onClickHandler}>테스트</button>;
}
