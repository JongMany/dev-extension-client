"use client";

import DailyRanking from "@/app/(main)/rank/_components/DailyRanking";
import MonthlyRanking from "@/app/(main)/rank/_components/MonthlyRanking";
import RankCard from "@/app/(main)/rank/_components/RankCard";
import WeeklyRanking from "@/app/(main)/rank/_components/WeeklyRanking";
import useGetRankData from "@/app/(main)/rank/_libs/useGetRankData";

export default function RankContainer() {
  const queries = useGetRankData();

  return (
    <section className="flex justify-around gap-x-8">
      <RankCard>
        <DailyRanking />
      </RankCard>
      <RankCard>
        <WeeklyRanking />
      </RankCard>
      <RankCard>
        <MonthlyRanking />
      </RankCard>
    </section>
  );
}