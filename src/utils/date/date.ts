import { endOfYear, startOfYear } from "date-fns";

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getStartOfYear(currentYear: number) {
  return startOfYear(new Date(currentYear, 0, 1));
}

export function getEndOfYear(currentYear: number) {
  return endOfYear(new Date(currentYear, 11, 31));
}

/* 2024-02-03 형태 */
export function makeTimeStamp(dateString: string, separator: "/" | "-" = "-") {
  return new Date(dateString.replace(/\//g, separator)).getTime();
}
