import { useRef } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";

import { SVGRenderer } from "echarts/renderers";
import { formatSecondsToTime } from "../../../../../utils/date/date";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
} from "echarts/components";
import { EChartsOption } from "echarts-for-react";

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
): EChartsOption => ({
  legend: {
    type: "scroll",
    orient: "vertical",
    right: 0,
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
      fontSize: 24,
    },
  },
  series: [
    {
      type: "pie",
      radius: [50, 130],
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
          return `${params.data.name} (${params.data.percentage}%)\n${params.data.times}\n`;
        },
        minMargin: 5,
        edgeDistance: 10,
        lineHeight: 15,
        rich: {
          time: {
            fontSize: 10,
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
    times: formatSecondsToTime(item.duration),
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
