"use client";
import DashboardCard from "@/app/(main)/dashboard/_components/DashboardCard";
import HierachyChart from "@/app/(main)/dashboard/_components/HierachyChart";
import ProgramLanguageRatesChart from "@/app/(main)/dashboard/_components/ProgramLanguageRatesChart";
import ProgramTimeSeriesChart from "@/app/(main)/dashboard/_components/ProgramTimeSeriesChart";
import ProjectDepsChart from "@/app/(main)/dashboard/_components/ProjectDepsChart";
import useFetchProgrammingTime from "@/app/(main)/dashboard/_libs/useFetchProgrammingTime";
import React from "react";

export default function DashboardContainer() {
  const { data, isFetching, isError } = useFetchProgrammingTime();

  // TODO: 로딩 처리
  if (isFetching) return <div>로딩</div>;

  // TODO: 에러 처리
  if (isError) return <div>에러</div>;

  return (
    <section>
      <DashboardCard>
        {isFetching && <>로딩 중...</>}
        {isError && <>에러 발생</>}
        {data && <ProgramLanguageRatesChart />}
      </DashboardCard>
      <DashboardCard>
        {isFetching && <>로딩 중...</>}
        {isError && <>에러 발생</>}
        {data && <ProgramTimeSeriesChart />}
      </DashboardCard>
      <DashboardCard>
        {isFetching && <>로딩 중...</>}
        {isError && <>에러 발생</>}
        {data && <ProjectDepsChart />}
      </DashboardCard>
      <DashboardCard>
        {isFetching && <>로딩 중...</>}
        {isError && <>에러 발생</>}
        {data && <HierachyChart />}
      </DashboardCard>
    </section>
  );
}
