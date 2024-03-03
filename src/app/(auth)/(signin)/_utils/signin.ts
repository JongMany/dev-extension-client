import { type Signin } from "@/models/auth/auth.model";

export const signin = async (form: Signin) => {
  const response = await fetch(`http://localhost:8080/auth/signin`, {
    body: JSON.stringify({
      ...form,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const data = await response.json();
  return data;
};
