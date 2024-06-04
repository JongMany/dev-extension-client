"use client";
import { useDuration } from "@/store/useDuration";
import React from "react";

export default function DurationSelector() {
  const { duration, setDuration } = useDuration();

  const changeDurationHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const duration = e.target.value as "WEEK" | "MONTH" | "YEAR";
    setDuration(duration);
  };

  return (
    <select defaultValue={duration} onChange={changeDurationHandler}>
      <option value="WEEK">이번 주</option>
      <option value="MONTH">이번 달</option>
      <option value="YEAR">올해</option>
    </select>
  );
}
