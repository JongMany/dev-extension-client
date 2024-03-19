import { useGetAllGoals } from "@/app/(main)/goal/_lib/getAllGoals";
import { Goals } from "@/models/goals/goals.model";
import { PropsWithChildren, createContext, useContext } from "react";

type GoalContextType = {
  goals: Goals | undefined;
  isFetching: boolean;
  isError: boolean;
};

const GoalContext = createContext<GoalContextType | null>(null);
const useGoalContext = () => useContext(GoalContext);

export default function GoalProvider({ children }: PropsWithChildren) {
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
  console.log(goals);

  if (isFetching) {
    return <div>로딩중...</div>;
  }
  if (isError) {
    return <div>에러 발생</div>;
  }
  if (goals?.goals.length === 0) {
    return <div>목표가 없습니다.</div>;
  } else {
    return goals?.goals.map((goal) => <GoalItem key={goal.id} goal={goal} />);
  }
}

type Props = {
  goal: any;
};
function GoalItem({ goal }: Props) {
  return (
    <article className="border-2 border-black px-4 py-2 rounded-md shadow-xl hover:shadow-2xl">
      <h2 className="font-bold text-l">프로젝트명 - {goal.projectName}</h2>
      <p>일정 - {goal.description}</p>
      <p>생성일자 - {goal.date}</p>
      <p>마감기간 - {goal.due}</p>
      <div>
        <input
          id="completed"
          name="completed"
          type="checkbox"
          checked={goal.isCompleted}
        />
        <label htmlFor="completed">완료</label>
      </div>
    </article>
  );
}
