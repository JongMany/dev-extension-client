import { Duration } from "@/entities/duration";
import { useFetch } from "@/lib/extendedFetch";
import { useDuration } from "@/store/useDuration";
import {
  getThisMonthFirstDay,
  getThisMonthLastDay,
  getThisWeekMonday,
  getThisWeekSunday,
  getThisYearFirstDay,
  getThisYearLastDay,
} from "@/utils/date/date";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useSession } from "next-auth/react";

export default function useFetchProgrammingTime() {
  const { duration } = useDuration();
  const { data: session } = useSession();
  const { fetch } = useFetch();
  const from = getFromDate(duration);
  const to = getToDate(duration);

  const fetchDate = async () => {
    const email = session?.user.email;
    if (!email) return;
    const response = await fetch(
      `/time/overall/${email}/from/${from}/to/${to}`
    );
    const data = await response.json();

    return data.data;
  };

  return useQuery({
    queryKey: ["programmingTime", duration],
    queryFn: fetchDate,
    staleTime: 1000 * 60 * 10, // 10분
  });
}

function getFromDate(duration: Duration) {
  let from;
  switch (duration) {
    case "WEEK":
      from = getThisWeekMonday();
      break;
    case "MONTH":
      from = getThisMonthFirstDay();
      break;
    case "YEAR":
      from = getThisYearFirstDay();
      break;
  }

  return format(from, "yyyy-MM-dd");
}

function getToDate(duration: Duration) {
  let to;
  switch (duration) {
    case "WEEK":
      to = getThisWeekSunday();
      break;
    case "MONTH":
      to = getThisMonthLastDay();
      break;
    case "YEAR":
      to = getThisYearLastDay();
      break;
  }

  return format(to, "yyyy-MM-dd");
}
