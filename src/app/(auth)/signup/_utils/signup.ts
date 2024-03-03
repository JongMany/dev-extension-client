import { type Signup } from "@/models/auth/auth.model";

export const signup = async (form: Signup) => {
  const response = await fetch(`http://localhost:8080/auth/signup`, {
    body: JSON.stringify({
      ...form,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};
