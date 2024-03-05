import TestButton from "@/app/(main)/main/_components/TestButton";
import { auth } from "@/auth";

export default function Page() {
  const session = auth();

  return (
    <main>
      <h1>Study Log | 당신의 개발 시간을 관리해드립니다.</h1>
      <TestButton />
    </main>
  );
}
