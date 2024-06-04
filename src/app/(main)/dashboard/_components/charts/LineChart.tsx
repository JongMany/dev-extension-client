import { IProgramData } from "@/entities/programData";
import { PropertyType } from "@/utilityTypes/utility";
import { EChartsOption } from "echarts";
import ReactEChartsCore from "echarts-for-react/lib/core";
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
      name: data[0].language || "ALL",
      type: "line",
      labelLayout: {
        moveOverlap: "shiftY",
      },
      endLabel: {
        show: true,
        formatter: function (params) {
          console.log(params.seriesName, params.value);
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
  if (dataForChart.option === "ALL") {
    series = [makeSeriesOption(dataForChart.data)];
    xAxis = Array.from(
      new Set(dataForChart.data.map((item) => format(item.date, "yyyy-MM-dd")))
    );
  } else {
    const dateList: string[] = [];

    series = Object.entries(dataForChart.data).map(([language, data]) => {
      const value = Object.values(data);
      dateList.push(...value.map((item) => format(item.date, "yyyy-MM-dd")));
      return makeSeriesOption(value);
    });
    xAxis = Array.from(new Set(dateList));
  }

  console.log(series);

  return {
    animationDuration: 4000,
    title: {
      text: "프로그래밍 시간",
      left: "center",
    },
    tooltip: {},
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

  // const options = {
  //   title: {
  //     text: "堆叠区域图",
  //   },
  //   tooltip: {
  //     trigger: "axis",
  //   },
  //   legend: {
  //     data: ["邮件营销", "联盟广告", "视频广告"],
  //   },
  //   toolbox: {
  //     feature: {
  //       saveAsImage: {},
  //     },
  //   },
  //   grid: {
  //     left: "3%",
  //     right: "4%",
  //     bottom: "3%",
  //     containLabel: true,
  //   },
  //   xAxis: [
  //     {
  //       type: "category",
  //       boundaryGap: false,
  //       data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  //     },
  //   ],
  //   yAxis: [
  //     {
  //       type: "value",
  //     },
  //   ],
  //   series: [
  //     {
  //       name: "邮件营销",
  //       type: "line",
  //       stack: "总量",
  //       areaStyle: { normal: {} },
  //       data: [120, 132, 101, 134, 90, 230, 210],
  //     },
  //     {
  //       name: "联盟广告",
  //       type: "line",
  //       stack: "总量",
  //       areaStyle: { normal: {} },
  //       data: [220, 182, 191, 234, 290, 330, 310],
  //     },
  //     {
  //       name: "视频广告",
  //       type: "line",
  //       stack: "总量",
  //       areaStyle: { normal: {} },
  //       data: [150, 232, 201, 154, 190, 330, 410],
  //     },
  //   ],
  // };
  // const options = {
  //   grid: { top: 8, right: 8, bottom: 24, left: 36 },
  //   xAxis: {
  //     type: "category",
  //     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //   },
  //   yAxis: {
  //     type: "value",
  //   },
  //   series: [
  //     {
  //       data: [820, 932, 901, 934, 1290, 1330, 1320],
  //       type: "line",
  //       smooth: true,
  //     },
  //   ],
  //   tooltip: {
  //     trigger: "axis",
  //   },
  // };

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
