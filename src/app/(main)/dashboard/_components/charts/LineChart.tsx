import { IProgramData } from "@/entities/programData";
import { PropertyType } from "@/utilityTypes/utility";
import { EChartsOption } from "echarts";
import { LinesChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { useRef } from "react";
import ReactECharts from "echarts-for-react";
import { format } from "date-fns";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LinesChart,
  SVGRenderer,
]);

const makeLineChartOption = (
  dataForChart: LangaugeLineProp | DefaultLineProp
): EChartsOption => {
  const makeSeriesOption = (
    data: DefaultLineData[]
  ): PropertyType<Required<EChartsOption>, "series"> => {
    console.log(data);
    return {
      // name: "Name",
      name: data[0].language || "전체",
      type: "line",
      labelLayout: {
        moveOverlap: "shiftY",
      },
      endLabel: {
        show: true,
        formatter: function (params) {
          return `${params.seriesName} ${params.value}`;
        },
      },
      emphasis: {
        focus: "series",
      },

      showSymbol: false,
      data: [...data.map((item) => item.duration), 0, 0],
    };
  };

  let series: any = [];
  let xAxis: string[] = [];
  let label: string[] = [];
  if (dataForChart.option === "ALL") {
    series = [makeSeriesOption(dataForChart.data)];
    xAxis = Array.from(
      new Set(dataForChart.data.map((item) => format(item.date, "yyyy-MM-dd")))
    );
    label = ["전체"];
  } else {
    const dateList: string[] = [];

    series = Object.entries(dataForChart.data).map(([language, data]) => {
      const value = Object.values(data);
      dateList.push(...value.map((item) => format(item.date, "yyyy-MM-dd")));
      label.push(language);
      return makeSeriesOption(value);
    });
    xAxis = Array.from(new Set(dateList));
  }

  return {
    animationDuration: 6000,
    title: {
      text: "프로그래밍 시간",
      left: "center",
    },
    legend: {
      right: 0,
      data: label,
    },
    tooltip: {
      order: "valueDesc",
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      // data: ["월", "화", "수", "목"],
      data: xAxis,
      // data: dataForChart.data.map((item) => item.date),
    },
    yAxis: {
      name: "개발 시간",
    },
    grid: {
      right: 140,
    },
    series: [...series],
    animationEasing: "elasticOut",
    animationDelayUpdate: function (idx) {
      return idx * 5;
    },
  };
};

export type DefaultLineProp = {
  option: "ALL";
  data: DefaultLineData[];
};

export interface DefaultLineData {
  date: string;
  duration: number;
  language?: string;
}

export type LangaugeLineProp = {
  data: { [language: string]: DefaultLineData[] };
} & { option: "LANGUAGE" };

type Props = {
  data: LangaugeLineProp | DefaultLineProp;
};

export default function LineChart({ data }: Props) {
  const chartRef = useRef(null);
  // console.log(data);
  // if (data.length === 0) {
  //   return <div>프로그래밍하신 데이터가 없습니다.</div>;
  // }
  const options = makeLineChartOption(data);

  return (
    <div className="flex flex-col justify-center items-center">
      <ReactECharts
        className="w-[1000px]"
        option={options}
        style={{
          height: "400px",
        }}
        notMerge={true}
        lazyUpdate={true}
        echarts={echarts}
      />
      {/* <div>{data.length === 0 && "프로그래밍하신 데이터가 없습니다."}</div> */}
    </div>
  );
}
