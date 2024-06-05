"use client";
import { useGetAllTasks } from "@/app/(main)/goal/_lib/useGetAllTasks";
import TaskCalendar from "@/app/(main)/profile/_components/TaskCalendar";
// import { useGetAllTasks } from "@/app/(main)/profile/_hooks/useGetAllTasks";
import moment from "moment";

import React from "react";
import { dateFnsLocalizer, momentLocalizer } from "react-big-calendar";

export default function CalendarContainer() {
  const { data } = useGetAllTasks();
  const tasks =
    data?.tasks.map((task, idx) => ({
      id: task._id,
      start: new Date(task.dueDate),
      end: new Date(task.dueDate),
      title: `프로젝트 - ${task.projectName}\n일정 - ${task.task}`,
      resourceId: idx + 1,
      isCompleted: task.isCompleted,
    })) || [];

  moment.locale("ko-KR");
  const localizer = momentLocalizer(moment);

  return (
    <section>
      <h4>일정</h4>
      <TaskCalendar localizer={localizer} tasks={tasks} />
    </section>
  );
}
