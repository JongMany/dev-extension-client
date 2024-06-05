"use client";
import { CalendarTask } from "@/entities/task";
import React, { useMemo } from "react";
import { Calendar, Views, DateLocalizer } from "react-big-calendar";
import withDragAndDrop, {
  EventInteractionArgs,
} from "react-big-calendar/lib/addons/dragAndDrop";
// import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

type Props = {
  localizer: DateLocalizer;
  tasks: CalendarTask[];
};

export default function TaskCalendar({ localizer, tasks }: Props) {
  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(1972, 0, 1, 8),
    }),
    []
  );

  const taskMoveHandler = ({
    event,
    start,
    end,
  }: EventInteractionArgs<any>) => {
    const changed = start;
    console.log(event, start, end);
  };

  return (
    <div className="h-[600px]">
      <DragAndDropCalendar
        localizer={localizer}
        defaultDate={defaultDate}
        defaultView={Views.MONTH}
        events={tasks}
        scrollToTime={scrollToTime}
        popup
        onEventDrop={taskMoveHandler}
        resizable={false}
      />
    </div>
  );
}
