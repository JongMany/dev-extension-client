import Link from "next/link";
import GoalContainer from "@/app/(main)/goal/_components/goalList/GoalContainer";

export default async function GoalPage() {
  return (
    <main>
      <nav className="flex justify-between items-center px-4 mb-4">
        <h1 className="text-lg font-bold">Plan</h1>
        <Link
          href="/goal/create"
          className="text-md font-[500] cursor transition-all duration-150 hover:font-bold"
        >
          목표 생성
        </Link>
      </nav>
      <section className="grid grid-cols-2 gap-x-4 px-6">
        <GoalContainer />
      </section>
    </main>
  );
}
