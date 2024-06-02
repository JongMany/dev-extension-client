import ProfileView from "@/app/(main)/profile/_components/ProfileView";
import EditButton from "@/app/(main)/profile/_components/EditButton";
import TimeHeatmapContainer from "@/app/(main)/profile/_components/TimeHeatmapContainer";

type Props = { params: { email: string } };

export default async function ProfilePage({ params }: Props) {
  const { email } = params;
  console.log(email);
  return (
    <main className="flex flex-1">
      <nav className="flex flex-col w-[250px] items-center px-4 mb-4 border-r-[1px]">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <ProfileView email={decodeURIComponent(email)} />
        <EditButton />
      </nav>
      <section className="flex-1">
        <TimeHeatmapContainer email={decodeURIComponent(email)} />
        <section></section>
      </section>
    </main>
  );
}
