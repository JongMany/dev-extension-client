export const fetchTest = async (accessToken: string) => {
  console.log(accessToken);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/get-apiKey`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
