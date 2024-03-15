"use client";

import { useGetAllGoals } from "@/app/(main)/goal/_lib/getAllGoals";
import { Goals } from "@/models/goals/goals.model";
import { useSession } from "next-auth/react";
import { PropsWithChildren, useContext } from "react";
import { createContext } from "react";

export default function GoalContainer() {
return (
    <GoalProvider>
      <GoalProvider.List></GoalProvider.List>
    </GoalProvider>
  );
}

type GoalContextType = {
  goals: Goals | undefined;
  isFetching: boolean;
  isError: boolean;
};

const GoalContext = createContext<GoalContextType | null>(null);
const useGoalContext = () => useContext(GoalContext);

function GoalProvider({ children }: PropsWithChildren) {
  const { data, isFetching, isError } = useGetAllGoals();

  const providedValue = { goals: data, isFetching, isError };

  return (
    <GoalContext.Provider value={providedValue}>
      {children}
    </GoalContext.Provider>
  );
}

GoalProvider.List = GoalList;

function GoalList() {
  const { goals, isFetching, isError } = useGoalContext()!;

  if (isFetching) {
    return <div>로딩중...</div>;
  }
  if (isError) {
    return <div>에러 발생</div>;
  }
  if (goals?.goals.length === 0) {
    return <div>목표가 없습니다.</div>;
  } else {
    return goals?.goals.map((goal) => <GoalItem key={goal.id} />);
  }
}

function GoalItem() {
  return <></>;
}
