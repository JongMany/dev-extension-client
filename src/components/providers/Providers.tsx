import TanstackQueryProvider from "@/components/providers/TanstackQueryProvider";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </SessionProvider>
  );
}
