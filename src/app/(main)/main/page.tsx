import TestButton from "@/app/(main)/main/_components/TestButton";
import SignoutButton from "@/app/_components/Signout";
import { auth } from "@/auth";

export default function Page() {
  const session = auth();

  return (
    <main>
      메인 화면
      <TestButton />
      <SignoutButton />
    </main>
  );
}
