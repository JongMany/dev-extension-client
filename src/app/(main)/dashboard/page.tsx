import DashboardContainer from "@/app/(main)/dashboard/_components/DashboardContainer";
import DurationSelector from "@/app/(main)/dashboard/_components/DurationSelector";

export default function DashboardPage() {
  // 대시보드
  // 필터링 - 기간별
  // 언어별 프로젝트별
  return (
    <main>
      <DurationSelector />
      <DashboardContainer />
    </main>
  );
}
