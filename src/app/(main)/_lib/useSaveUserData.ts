import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function useSaveUserData() {
  const session = useSession();
  useEffect(() => {
    if (session && session.data) {
      localStorage.setItem("accessToken", session.data.accessToken);
      localStorage.setItem("email", session.data.user.email);
    }
  }, [session]);
}
