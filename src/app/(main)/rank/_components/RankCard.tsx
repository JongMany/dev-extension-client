import { PropsWithChildren } from "react";

type Props = {};
export default function RankCard({ children }: PropsWithChildren<Props>) {
  return (
    <article className="flex-1 min-h-[500px] rounded-md border-2 py-6">
      {children}
    </article>
  );
}
