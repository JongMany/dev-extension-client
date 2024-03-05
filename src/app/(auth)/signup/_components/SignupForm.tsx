"use client";

import { type ChangeEventHandler, useState } from "react";
import { type Signup } from "@/models/auth/auth.model";
import SignupButton from "@/app/(auth)/signup/_components/SignupButton";

const initialState: Signup = {
  apiKey: "",
  password: "",
  email: "",
  nickname: "",
};

export default function SignupForm() {
  const [form, setForm] = useState(initialState);

  const formChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex flex-col items-center">
      <div className="w-[100%] px-8 pb-4  flex justify-between items-center">
        <label htmlFor="email" className="mr-4 font-semibold text-base">
          이메일
        </label>
        <input
          className="py-[4px] px-2 rounded-xl w-60 text-black"
          id="email"
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={formChangeHandler}
          value={form.email}
        />
      </div>
      <div className="w-[100%] px-8 pb-4 mb-4 flex justify-between items-center">
        <label htmlFor="password" className="mr-4 font-semibold text-base">
          비밀번호
        </label>
        <input
          className="py-[4px] px-2 rounded-xl w-60 text-black"
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={formChangeHandler}
          value={form.password}
        />
      </div>
      <div className="w-[100%] px-8 pb-4 mb-4 flex justify-between items-center">
        <label htmlFor="nickname" className="mr-4 font-semibold text-base">
          닉네임
        </label>
        <input
          className="py-[4px] px-2 rounded-xl w-60 text-black"
          id="nickname"
          name="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          onChange={formChangeHandler}
          value={form.nickname}
        />
      </div>
      <div className="w-[100%] px-8 pb-4 flex justify-between items-center">
        <label htmlFor="apikey" className="mr-4 font-semibold text-base">
          ApiKey
        </label>
        <input
          className="py-[4px] px-2 rounded-xl w-60 text-black"
          id="apikey"
          name="apiKey"
          type="text"
          placeholder="apiKey를 입력해주세요"
          onChange={formChangeHandler}
          value={form.apiKey}
        />
      </div>
      <SignupButton form={form} />
    </form>
  );
}