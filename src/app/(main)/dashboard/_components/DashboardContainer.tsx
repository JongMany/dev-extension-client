import DashboardCard from "@/app/(main)/dashboard/_components/DashboardCard";
import ProgramLanguageRates from "@/app/(main)/dashboard/_components/ProgramLanguageRates";
import SessionProvider from "@/components/providers/SessionProvider";
import React from "react";

export default function DashboardContainer() {
  return (
    <section>
      <SessionProvider>
        <DashboardCard>
          <ProgramLanguageRates />
        </DashboardCard>
      </SessionProvider>
    </section>
  );
}
