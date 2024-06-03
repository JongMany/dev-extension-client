import RankContainer from "@/app/(main)/rank/_components/RankContainer";
import RankHeader from "@/app/(main)/rank/_components/RankHeader";
import SessionProvider from "@/components/providers/SessionProvider";

export default function RankPage() {
  return (
    <main>
      <RankHeader />
      <SessionProvider>
        <RankContainer />
      </SessionProvider>
    </main>
  );
}
