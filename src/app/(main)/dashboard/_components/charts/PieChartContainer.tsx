import { useRef } from "react";
import ReactECharts from "echarts-for-react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";

import { SVGRenderer } from "echarts/renderers";
import { convertProgrammingTime } from "../../../../../utils/date/date";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
} from "echarts/components";

type Props = {
  data: { language: string; duration: number }[];
};

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  PieChart,
  SVGRenderer,
]);

const makePieChartOption = (
  data: { name: string; value: number; times: string; percentage: string }[]
) => ({
  legend: {
    type: "scroll",
    orient: "vertical",
    right: 10,
    top: 20,
    bottom: 20,
    data: data.map((item) => item.name),
  },
  title: {
    text: "프로그래밍 언어 사용량",
    left: "center",
    textStyle: {
      color: "#999",
      fontWeight: "normal",
      fontSize: 14,
    },
  },
  series: [
    {
      type: "pie",
      radius: [50, 150],
      height: "100%",
      left: "center",
      width: 600,
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
      },
      label: {
        alignTo: "edge",
        formatter: function (params: any) {
          return `${params.data.name}\n${params.data.times}`;
        },
        minMargin: 5,
        edgeDistance: 10,
        lineHeight: 15,
        rich: {
          time: {
            fontSize: 8,
            color: "#999",
          },
        },
      },
      labelLine: {
        length: 10,
        length2: 0,
        maxSurfaceAngle: 80,
      },
      labelLayout: function (params: any) {
        // console.log(params);
        const points = params.labelLinePoints!;
        // Update the end point.
        points[2][0] = params.labelRect.x + params.labelRect.width;
        return {
          labelLinePoints: points,
        };
      },
      data,
    },
  ],
});

const PieChartContainer = ({ data }: Props) => {
  const chartRef = useRef(null);
  const sum = data.reduce((acc, cur) => acc + cur.duration, 0);
  const dataForPieOption = data.map((item) => ({
    name: item.language,
    value: item.duration,
    times: formatTime(item.duration),
    percentage: ((item.duration / sum) * 100).toFixed(2),
  }));
  const option = makePieChartOption(dataForPieOption);

  return (
    <div className="flex flex-col justify-center items-center">
      <ReactEChartsCore
        className="w-[600px]"
        echarts={echarts}
        ref={chartRef}
        notMerge={true}
        lazyUpdate={true}
        option={option}
        style={{
          height: "400px",
        }}
      />
      <div>{data.length === 0 && "프로그래밍하신 데이터가 없습니다."}</div>
    </div>
  );
};
export default PieChartContainer;

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(secs.toFixed(2)).padStart(2, "0");

  return `${formattedHours}시간 ${formattedMinutes}분 ${formattedSeconds}초`;
}
