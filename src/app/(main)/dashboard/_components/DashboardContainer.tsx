"use client";
import DashboardCard from "@/app/(main)/dashboard/_components/DashboardCard";
import ProgramLanguageRates from "@/app/(main)/dashboard/_components/ProgramLanguageRates";
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
        <ProgramLanguageRates />
      </DashboardCard>
    </section>
  );
}
