import Description from "@/app/(main)/main/_components/Description";
import Footer from "@/app/(main)/main/_components/Footer";
import HeadTitle from "@/app/(main)/main/_components/HeadTitle";

// Framer Motion - https://www.youtube.com/watch?v=nPsJfTVjkdo
export default function Page() {
  return (
    <main>
      <HeadTitle />
      <Description />
      <Footer />
    </main>
  );
}
