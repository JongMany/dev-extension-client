import ProfileView from "@/app/(main)/profile/_components/ProfileView";
import EditButton from "@/app/(main)/profile/_components/EditButton";
import TimeHeatmapContainer from "@/app/(main)/profile/_components/TimeHeatmapContainer";
import CalendarContainer from "@/app/(main)/profile/_components/CalendarContainer";
import SessionProvider from "@/components/providers/SessionProvider";

type Props = { params: { email: string } };

export default async function ProfilePage({ params }: Props) {
  const { email } = params;
  console.log(email);
  return (
    <main className="flex flex-1 min-h-[90vh] justify-between">
      <nav className="flex flex-col w-[250px] items-center px-4 mb-4 border-r-[1px]">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <ProfileView email={decodeURIComponent(email)} />
        <EditButton />
      </nav>
      <section className="flex-1 px-4 py-2">
        <TimeHeatmapContainer email={decodeURIComponent(email)} />
        <SessionProvider>
          <CalendarContainer />
        </SessionProvider>
      </section>
      <section className="w-[200px]">
        {/* 광고 문의? */}
        <div>광고 문의</div>
      </section>
    </main>
  );
}
