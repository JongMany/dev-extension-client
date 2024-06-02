"use client";
import PieChartContainer from "@/app/(main)/dashboard/_components/charts/PieChartContainer";
import { IProgramData } from "@/entities/programData";
import { useDuration } from "@/store/useDuration";
import { useQueryClient } from "@tanstack/react-query";

export default function ProgramLanguageRates() {
  const queryClient = useQueryClient();
  const { duration } = useDuration();
  const programData =
    queryClient.getQueryData<IProgramData[]>(["programmingTime", duration]) ||
    [];

  const languageRates = convertProgramDataToLanguageRates(programData);

  return <PieChartContainer data={languageRates} />;
}

function convertProgramDataToLanguageRates(programData: IProgramData[]) {
  const languageMap = programData.reduce((acc, cur) => {
    acc[languageMapper[cur.programLanguage as keyof typeof languageMapper]] =
      (acc[
        languageMapper[cur.programLanguage as keyof typeof languageMapper]
      ] || 0) + cur.programDuration;
    return acc;
  }, {} as Record<string, number>);
  return Object.entries(languageMap).map(([language, duration]) => ({
    language:
      languageMapper[language as keyof typeof languageMapper] ||
      languageMapper.other,
    duration: duration / 10000,
  }));
}

const languageMapper = {
  js: "JavaScript",
  jsx: "JavaScript",
  ts: "TypeScript",
  tsx: "TypeScript",
  py: "Python",
  java: "Java",
  kt: "Kotlin",
  swift: "Swift",
  go: "Go",
  rb: "Ruby",
  php: "Php",
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  sql: "SQL",
  shell: "Shell",
  sh: "Shell",
  json: "json",
  xml: "xml",
  yml: "yaml",
  yaml: "yaml",
  md: "markdown",
  txt: "text",
  other: "other",
};
