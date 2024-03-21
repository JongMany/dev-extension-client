"use client";

import TaskProvider from "@/app/(main)/goal/_components/taskList/TaskProvider";

export default function TaskContainer() {
  return (
    <TaskProvider>
      <TaskProvider.List />
    </TaskProvider>
  );
}
