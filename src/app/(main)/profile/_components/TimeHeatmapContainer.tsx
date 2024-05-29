"use client";

import TimeHeatmap from "@/app/(main)/profile/_components/TimeHeatmap";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function TimeHeatmapContainer() {
  const { data: session } = useSession();
  useEffect(() => {}, [session?.user.accessToken]);

  if (!session?.user.accessToken || window === undefined) {
    return null;
  }
  return <TimeHeatmap />;
}
