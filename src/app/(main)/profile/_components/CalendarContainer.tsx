"use client";
import { useGetAllTasks } from "@/app/(main)/goal/_lib/useGetAllTasks";
import React from "react";

export default function CalendarContainer() {
  const { data } = useGetAllTasks();
  console.log(data);
  return <section>달력임</section>;
}
