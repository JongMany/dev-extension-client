"use client";

import { type Signup } from "@/models/auth/auth.model";

type Props = {
  form: Signup;
};

export default function SignupButton({ form }: Props) {
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isValidate = validateForm(form);
    const signupForm = formatSignupForm(form);
    console.log(signupForm);
    if (!isValidate) {
      console.log("유효성 검사 실패");
      return;
    }
    // TODO: 회원 가입 요청

    // const data = await signup(form);
  };

  return <button onClick={handleSubmit}>회원가입</button>;
}

/** 모든 form의 checkDuplicate가 true인 경우에만 유효성 통과 */
function validateForm(form: Signup) {
  return Object.values(form).every((field) => field.checkDuplicate);
}

type SignupForm = {
  apiKey: string;
  password: string;
  email: string;
  nickname: string;
};
/** 회원가입 포맷으로 변경  */
function formatSignupForm(form: Signup) {
  return Object.entries(form).reduce((acc, [key, value]) => {
    acc[key as keyof SignupForm] = value.text;
    return acc;
  }, {} as SignupForm);
}
