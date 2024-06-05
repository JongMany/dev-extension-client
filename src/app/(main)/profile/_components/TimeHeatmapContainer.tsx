"use client";

import TimeHeatmap from "@/app/(main)/profile/_components/TimeHeatmap";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function TimeHeatmapContainer({ email }: { email: string }) {
  const { data: session } = useSession();
  useEffect(() => {}, [session?.user.accessToken]);
  if (!session?.user.accessToken || window === undefined) {
    return null;
  }
  return (
    <div className="min-w-[600px] min-h-[250px] overflow-x-scroll  scrollbar-hide flex flex-col justify-center items-center">
      <div className="px-2 flex flex-col justify-center items-center gap-y-3 rounded-lg border-4 border-sky-200">
        <h1 className="text-2xl font-bold">프로그래밍 시간</h1>
        <TimeHeatmap email={email} />
      </div>
    </div>
  );
}
