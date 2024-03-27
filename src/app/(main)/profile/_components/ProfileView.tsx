import PrivacyInformation from "@/app/(main)/profile/_components/PrivacyInformation";
import { auth } from "@/auth";
import LineDivider from "@/app/(main)/profile/_components/LineDivider";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchServer } from "@/lib/fetchServer";

type Props = { email: string };

export default async function ProfileView({ email }: Props) {
  console.log("params2", email);

  const session = await auth();
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["profile", email], //nickname
    queryFn: async () => {
      const response = await fetchServer(`/profile/${session?.user.email}`, {});

      const data = await response?.json();
      return data;
    },
    
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <div className="w-[100%] pb-4">
        <h2 className="text-lg font-bold">{session?.user.nickname}</h2>
        <p className="text-sm">{session?.user.email}</p>
      </div>
      <LineDivider />
      <HydrationBoundary state={dehydratedState}>
        <PrivacyInformation email={email} />
      </HydrationBoundary>
    </>
  );
}
