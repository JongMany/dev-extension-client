import Description from "@/app/(main)/main/_components/Description";
import Footer from "@/app/(main)/main/_components/Footer";
import HeadTitle from "@/app/(main)/main/_components/HeadTitle";
import TestButton from "@/app/(main)/main/_components/TestButton";
import { auth } from "@/auth";

export default function Page() {
  return (
    <main>
      <TestButton />
      <HeadTitle />
      <Description />
      <Footer />
      {/* <TestButton /> */}
    </main>
  );
}
