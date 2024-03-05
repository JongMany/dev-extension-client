import { PropsWithChildren } from "react";

function SessionProvider({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SessionProvider;
