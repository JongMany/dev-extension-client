import {type SignupForm} from "@/app/(auth)/signup/_components/SignupButton";

export const signup = async (form: SignupForm) => {
  const response = await fetch(`http://localhost:8080/auth/signup`, {
    body: JSON.stringify({
      ...form,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    // cache: "no-cache",
  });
  const data = await response.json();
  console.log(data);
  return data;
};
