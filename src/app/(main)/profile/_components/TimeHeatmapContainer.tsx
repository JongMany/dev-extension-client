"use client";

import TimeHeatmap from "@/app/(main)/profile/_components/TimeHeatmap";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function TimeHeatmapContainer({ email }: { email: string }) {
  const { data: session } = useSession();
  useEffect(() => {}, [session?.user.accessToken]);
  console.log(email);
  if (!session?.user.accessToken || window === undefined) {
    return null;
  }
  return <TimeHeatmap email={email} />;
}
