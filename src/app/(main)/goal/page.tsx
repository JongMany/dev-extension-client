import GoalContainer from "@/app/(main)/goal/_components/GoalContainer";

import Link from "next/link";

export default async function GoalPage() {
  // const goals = await getAllGoals();
  // const data = fetchExtended("/");

  return (
    <main>
      <Link href="/goal/create">목표 생성</Link>
      <GoalContainer />
    </main>
  );
}
