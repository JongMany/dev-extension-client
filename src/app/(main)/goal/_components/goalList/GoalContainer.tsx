"use client";

import GoalProvider from "@/app/(main)/goal/_components/goalList/GoalProvider";

export default function GoalContainer() {
  return (
    <GoalProvider>
      <GoalProvider.List />
    </GoalProvider>
  );
}
