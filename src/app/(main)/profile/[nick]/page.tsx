import ProfileView from "@/app/(main)/profile/_components/ProfileView";
import TimeHeatmap from "@/app/(main)/profile/_components/TimeHeatmap";
import EditButton from "@/app/(main)/profile/_components/EditButton";

export default function ProfilePage() {
  return (
    <main className="flex flex-1">
      <nav className="flex flex-col w-[250px] items-center px-4 mb-4 border-r-[1px]">
         <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <ProfileView />
        <EditButton />
      </nav>
      <section className="flex-1">
        <TimeHeatmap />
        <section></section>
      </section>
    </main>
  );
}
