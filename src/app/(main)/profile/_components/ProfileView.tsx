import PrivacyInformation from "@/app/(main)/profile/_components/PrivacyInformation";
import { auth } from "@/auth";
import LineDivider from "@/app/(main)/profile/_components/LineDivider";
import SessionProvider from "@/components/providers/SessionProvider";

type Props = { email: string };

export default async function ProfileView({ email }: Props) {
  const session = await auth();

  return (
    <>
      <div className="w-[100%] pb-4">
        <h2 className="text-lg font-bold">{session?.user.nickname}</h2>
        <p className="text-sm">{email}</p>
      </div>
      <LineDivider />
      {/* <PrivacyInformationProvider></PrivacyInformationProvider> */}
      <SessionProvider>
        <PrivacyInformation email={email} />
      </SessionProvider>
    </>
  );
}
