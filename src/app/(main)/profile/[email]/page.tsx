import ProfileView from "@/app/(main)/profile/_components/ProfileView";
import TimeHeatmap from "@/app/(main)/profile/_components/TimeHeatmap";
import EditButton from "@/app/(main)/profile/_components/EditButton";

type Props = { params: { email: string } };

export default async function ProfilePage({ params }: Props) {
  const { email } = params;
  return (
    <main className="flex flex-1">
      <nav className="flex flex-col w-[250px] items-center px-4 mb-4 border-r-[1px]">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <ProfileView email={decodeURIComponent(email)} />
        <EditButton />
      </nav>
      <section className="flex-1">
        <TimeHeatmap />
        <section></section>
      </section>
    </main>
  );
}
