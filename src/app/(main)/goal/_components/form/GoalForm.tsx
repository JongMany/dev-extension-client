"use client";
import Input from "@/app/(main)/goal/_components/form/Input";
import SubmitButton from "@/app/(main)/goal/_components/form/SubmitButton";
import BackButton from "@/components/shared/button/BackButton";
import React, { ChangeEvent } from "react";

export default function GoalForm() {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const dateString = e.target.value;
  };

  return (
    <section className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-10 rounded-xl border-4 border-black border-solid min-w-[50vw] min-h-[50vh] flex flex-col items-center">
      <h3 className="text-xl font-bold mb-4">목표를 만들어보세요</h3>
      <form className="flex-1 flex flex-col items-center justify-between w-[100%]">
        <Input placeholder="프로젝트명" />
        <Input placeholder="목표" />
        <Input placeholder="날짜" type="date" onChange={onChangeHandler} />
        <SubmitButton />
        <BackButton />
      </form>
    </section>
  );
}
