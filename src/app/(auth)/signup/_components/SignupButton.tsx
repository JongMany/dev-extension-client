"use client";

import { signup } from "@/app/(auth)/signup/_utils/signup";
import { type Signup } from "@/models/auth/auth.model";

type Props = {
  form: Signup;
};

export default function SignupButton({ form }: Props) {
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = await signup(form);
    console.log(data);
  };

  return <button onClick={handleSubmit}>회원가입</button>;
}
