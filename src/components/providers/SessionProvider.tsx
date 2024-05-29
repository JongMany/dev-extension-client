"use client";
import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

function SessionProvider({ children }: PropsWithChildren) {
  const { data: sesssion } = useSession();

  if (!sesssion?.user.accessToken) {
    return null;
  }
  return <>{children}</>;
}

export default SessionProvider;
