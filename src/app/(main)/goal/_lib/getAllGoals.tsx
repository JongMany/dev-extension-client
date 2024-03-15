import { useFetch } from "@/lib/extendedFetch";
import { fetchExtended } from "@/lib/fetchExtended";
import { useQuery } from "@tanstack/react-query";

export function useGetAllGoals() {
  const queryKey = ["goals", "all"];
  const { fetch } = useFetch();
  return useQuery({
    queryKey,
    queryFn: async () => {
      const res = await fetch(`/goal/all`, {
        method: "GET",
        cache: "no-store",
        credentials: "include",
        next: {
          tags: queryKey,
          // revalidate:
        },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      return res.json();
    },
    retry: 2,
  });
}
