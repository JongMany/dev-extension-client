import returnFetch, { ReturnFetch } from "return-fetch";

const refreshToken = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const email = localStorage.getItem("email");
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
      body: JSON.stringify({
        email,
      }),
      cache: "no-store",
    }
  );
  console.log(`old`, accessToken);
  const data = await response.json();
  const newToken = data.accessToken;
  console.log(`refreshToken`, newToken, data);
  localStorage.setItem("accessToken", newToken);
  return newToken;
};

const verifyToken: ReturnFetch = (args) => {
  return returnFetch({
    ...args,
    interceptors: {
      request: async (args) => {
        const [fetchUrl, fetchOptions] = args;
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          return [
            fetchUrl,
            {
              ...fetchOptions,
              headers: {
                ...fetchOptions?.headers,
                Authorization: `Bearer ${accessToken}`,
              },
            },
          ];
        }

        return args;
      },
      response: async (response, requestArgs, fetch) => {
        if (response.statusText === "Unauthorized") {
          const accessToken = await refreshToken();

          const [fetchUrl, fetchOptions] = requestArgs;

          // 새 토큰으로 새로운 요청
          const response = await fetch(fetchUrl, {
            ...fetchOptions,
            headers: {
              ...fetchOptions?.headers,
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log(`verifyToken`, accessToken);
          return response;
        } else {
          return response;
        }
      },
    },
  });
};

export const fetchExtended = verifyToken({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
