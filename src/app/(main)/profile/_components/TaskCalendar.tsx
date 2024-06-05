"use client";
import { CalendarTask } from "@/entities/task";
import React, { useMemo, useState } from "react";
import { Calendar, Views, DateLocalizer } from "react-big-calendar";
import withDragAndDrop, {
  EventInteractionArgs,
} from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { style } from "d3";
import CalendarEvent from "@/app/(main)/profile/_components/CalendarEvent";

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
  const [date, setDate] = useState(defaultDate);

  const taskMoveHandler = ({
    event,
    start,
    end,
  }: EventInteractionArgs<any>) => {
    const changed = start;
  };
  const onNavigate = (date: Date) => {
    setDate(new Date(date));
  };
  const eventStyles = (
    event: any,
    start: Date,
    end: Date,
    isSelected: boolean
  ) => {
    return {
      style: {
        backgroundColor: event.isCompleted
          ? "rgba(0, 255,0,0.6)"
          : "rgba(255, 0, 0, 0.3)",
        borderRadius: "4px",
        border: "none",
      },
    };
  };

  return (
    <div className="h-[700px]">
      <DragAndDropCalendar
        localizer={localizer}
        defaultDate={defaultDate}
        date={date}
        defaultView={Views.MONTH}
        views={[Views.MONTH]}
        events={tasks}
        scrollToTime={scrollToTime}
        popup
        onEventDrop={taskMoveHandler}
        resizable={false}
        onNavigate={onNavigate}
        eventPropGetter={eventStyles}
        titleAccessor={(event: any) => {
          if (event.isCompleted) return `✅ ${event.title}`;
          return event.title;
        }}
        components={{
          event: CalendarEvent,
        }}
      />
    </div>
  );
}