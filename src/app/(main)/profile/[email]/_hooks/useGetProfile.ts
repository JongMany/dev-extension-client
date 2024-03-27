import {useFetch} from "@/lib/extendedFetch";
import {useQuery} from "@tanstack/react-query";

export const useGetProfile = (email: string) => {
  const {fetch} = useFetch();

  const getProfile = async () => {
    const response = await fetch(`/profile/${email}`, {
      credentials: "include",
      method: "GET",
      // cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };
  const {data, isFetching, isError, error} = useQuery({
    queryKey: ["profile", email],
    queryFn: async () => {
      const response = await fetch(`/profile/${email}`, {
        credentials: "include",
        method: "GET",
        cache: "default",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    staleTime: 1000 * 60 * 2,
    initialData: {
      profile: {
        email: '',
        link: []
      }
    }
  });

  return {
    profile: data.profile,
    isFetching,
    isError,
    error,
  };
};
