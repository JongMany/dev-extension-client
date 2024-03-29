import {useSession} from "next-auth/react";
import returnFetch, {ReturnFetch} from "return-fetch";

const refreshAccessToken = async (session: any) => {
  // if (!session) return;

  const accessToken = session?.data?.user.accessToken;
  const {update, data: sessionData} = session;

  const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
  );

  const data = await response.json();
  const newAccessToken = data.accessToken;

  await update({
    ...sessionData,
    user: {...sessionData?.user, accessToken: newAccessToken},
  });
  // if (session.data) {
  //   session.data.accessToken = newAccessToken;
  // }
  return newAccessToken;
};

// TODO: 리팩토링..!
const useCheckTokenInClient: ReturnFetch = (args) => {

  const {data: session, update} = useSession();

  return returnFetch({
    ...args,
    interceptors: {
      request: async (requestArgs) => {
        const [url, option] = requestArgs;
        const accessToken = session?.user?.accessToken;

        return [
          url,
          accessToken
              ? {
                ...args,
                ...option,
                headers: {
                  ...option?.headers,
                  ...args?.headers,
                  Authorization: `Bearer ${accessToken}`,
                },
              }
              : {...args, ...option},
        ];
      },
      response: async (response, requestArgs, fetch) => {
        if (response.statusText !== "Unauthorized") {
          return response;
        }

        const [url, option] = requestArgs;
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`,
            {
              method: "POST",
              credentials: "include",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.user.accessToken}`,
              },
              cache: "no-store",
            }
        );

        const data = await res.json();
        const newAccessToken = data.accessToken;

        await update({
          ...session,
          user: {...session?.user, accessToken: newAccessToken},
        });

        return await fetch(url, {
          ...option,
          headers: {
            ...option?.headers,
            Authorization: `Bearer ${newAccessToken}`,
          },
        });
      },
    },
  });
};

export const useFetch = () => {
  return {
    fetch: useCheckTokenInClient({
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
  };
  // return { fetch };
};
