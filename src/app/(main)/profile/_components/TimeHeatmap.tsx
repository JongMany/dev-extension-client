"use client";
import CalHeatmap from "cal-heatmap";
import Tooltip from "cal-heatmap/plugins/Tooltip";
import "cal-heatmap/cal-heatmap.css";
import { useEffect } from "react";
import { format } from "date-fns";

const option = {
  range: 12,
  date: {
    start: new Date(2024, 1, 1),
    locale: "ko",
    timezone: "Asia/Seoul",
  },
  data: {
    type: "json",
    x: "date",
    y: (d: any) => d.time,
  },
  domain: { type: "month" },
  subDomain: { type: "ghDay", width: 15, height: 15 },
  scale: {
    color: {
      type: "diverging",
      domain: [0, 10],
      scheme: "BuRd",
    },
  },
};
export default function TimeHeatmap() {
  const cal = new CalHeatmap();

  cal.on("click", () => {
    console.log("click");
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("paint", new Date());
      const data = [
        { date: "2024-03-21", time: 3 },
        { date: "2024-03-22", time: 5 },
        { date: "2024-03-20", time: 6 },
      ]; // 예시 데이터

      cal.paint(
        {
          range: 12,
          date: {
            start: new Date(2024, 1, 1),
            locale: "ko",
            timezone: "Asia/Seoul",
          },
          data: {
            source: data,
            type: "json",
            x: "date",
            y: (d: any) => d.time,
          },
          domain: { type: "month" },
          subDomain: { type: "ghDay", width: 15, height: 15 },
          scale: {
            color: {
              type: "diverging",
              domain: [0, 10],
              scheme: "BuRd",
            },
          },
        },
        [
          [
            Tooltip,
            {
              enabled: true,
              text: (_: number, value: number, date: any) => {
                // console.log(new Date(dayjsDate.$d));
                const [month, day] = format(date.$d, "MM-dd").split("-");

                return `${month}월 ${day}일의 프로그래밍 시간 - ${
                  value ?? 0
                }분`;
              },
            } as any,
          ],
        ]
      );
    }
  }, []);

  return (
    <div
      id="cal-heatmap"
      className="w-[700px] min-h-[200px] overflow-x-scroll px-4 py-2 scrollbar-hide"
    ></div>
  );
}
