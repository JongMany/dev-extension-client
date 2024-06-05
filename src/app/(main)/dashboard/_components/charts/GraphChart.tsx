// https://git.hust.cc/echarts-for-react/examples/graph
import ReactECharts from "echarts-for-react";
import { items, links } from "./graphItem";
import { makeDepsGraphLinkAndNode } from "@/app/(main)/dashboard/_utils/graph";

const makeGraphChartOption = (depsData: any) => {
  const option = {
    legend: {
      data: ["HTMLElement", "WebGL", "SVG", "CSS", "Other"],
    },
    series: [
      {
        type: "graph",
        layout: "force",
        animation: false,
        label: {
          normal: {
            position: "right",
            formatter: "{b}",
          },
        },
        draggable: true,
        data: depsData.nodes,
        // data: depsData.nodes.map(function (node: any, idx: number) {
        //   node.id = idx;
        //   return node;
        // }),
        categories: depsData.categories,
        force: {
          // initLayout: 'circular'
          // repulsion: 20,
          edgeLength: 7,
          repulsion: 20,
          gravity: 0.2,
        },
        edges: depsData.links,
      },
    ],
  };
  return option;
};

type Props = {
  depsData: string[][];
};

const GraphChart = ({ depsData }: Props) => {
  const deps = makeDepsGraphLinkAndNode(depsData);
  const webkitDep = {
    type: "force",
    categories: [
      // { name: "HTMLElement", keyword: {}, base: "HTMLElement" },
      // { name: "WebGL", keyword: {}, base: "WebGLRenderingContext" },
      // { name: "SVG", keyword: {}, base: "SVGElement" },
      // { name: "CSS", keyword: {}, base: "CSSRule" },
      // { name: "Other", keyword: {} },
      ...deps.categories,
    ],
    nodes: [
      // ...items
      ...deps.nodes,
    ],
    links: [
      // ...links
      ...deps.links,
    ],
  };
  const option = makeGraphChartOption(webkitDep);

  return (
    <div className="flex flex-col justify-center items-center">
      <ReactECharts
        className="w-[1000px]"
        option={option}
        style={{ height: "400px" }}
      />
    </div>
  );
};
export default GraphChart;
