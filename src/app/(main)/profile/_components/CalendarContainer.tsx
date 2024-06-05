"use client";
import { useGetAllTasks } from "@/app/(main)/goal/_lib/useGetAllTasks";
import TaskCalendar from "@/app/(main)/profile/_components/TaskCalendar";
// import { useGetAllTasks } from "@/app/(main)/profile/_hooks/useGetAllTasks";
import { format, getDay, startOfWeek } from "date-fns";
import { parse } from "dotenv";
import React from "react";
import { dateFnsLocalizer } from "react-big-calendar";

export default function CalendarContainer() {
  const { data } = useGetAllTasks();
  const tasks =
    data?.tasks.map((task, idx) => ({
      id: task._id,
      start: new Date(task.dueDate),
      end: new Date(task.dueDate),
      title: `프로젝트 - ${task.projectName}\n일정 - ${task.task}`,
      resourceId: idx + 1,
    })) || [];

  // const tasks = data?.task.
  const locales = {
    "ko-KR": require("date-fns/locale/ko"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  return (
    <section>
      <TaskCalendar localizer={localizer} tasks={tasks} />
    </section>
  );
}
