import { useFetch } from "@/lib/extendedFetch";
import { useQuery } from "@tanstack/react-query";

export function useGetAllTasks() {
  const queryKey = ["tasks", "all"];
  const { fetch } = useFetch();

  const { data, isError, isFetching, isSuccess, error } = useQuery({
    queryKey,
    queryFn: async () => {
      const res = await fetch(`/goal/all`, {
        method: "GET",
        cache: "default",
        credentials: "include",
        next: {
          tags: queryKey,
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
    staleTime: 1000 * 60 * 2,
    // retry: 1,
    retry: false,
    // initialData: { goals: [] },
  });

  return {
    data,
    isError,
    isFetching,
    error,
    isSuccess,
  };
}

export const getTask = async () => {
  const res = await fetch(`/goal/all`, {
    method: "GET",
    cache: "default",
    credentials: "include",
    next: {
      // revalidate:
    },
  });

  return res.json();
};
