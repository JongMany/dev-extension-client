import {
  getRankTextColor,
  getRankUserNameColor,
} from "@/app/(main)/rank/_utils/rankStyle";
import { Rank } from "@/entities/ranking";
import { formatSecondsToTime } from "@/utils/date/date";
import React from "react";

type Props = {
  title: "일간 랭킹" | "주간 랭킹" | "월간 랭킹";
  rankData: Rank[];
};

export default function RankUI({ title, rankData }: Props) {
  if (!rankData || rankData.length === 0) {
    return <>데이터가 없습니다.</>;
  }
  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="font-semibold text-[24px] mb-2">{title}</h1>
      {/* 데이터가 있을 때 */}
      {rankData.length > 0 && (
        <ul className="w-full">
          {rankData.map((rank, index) => (
            <li key={rank.user} className="mb-2">
              <div className="flex flex-col items-center rounded-lg px-2 py-1 bg-[#d1fae5]">
                <div className="flex w-full items-baseline">
                  <RankText rank={index + 1} />

                  <span className={`${getRankUserNameColor(index + 1)}`}>
                    {rank.user}
                  </span>
                </div>
                <span>{formatSecondsToTime(rank.developmentTime)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* 데이터가 없을 때 */}
      {rankData.length === 0 && <div></div>}
    </div>
  );
}

function RankText({ rank }: { rank: number }) {
  if (rank >= 1 && rank <= 3) {
    return (
      <span className={`${getRankTextColor(rank)}`}>
        <span>{rank}등</span>
        <span className="icon-[fluent--sparkle-24-regular]"></span>
      </span>
    );
  } else {
    <span className={`${getRankTextColor(rank)}`}>
      <span>{rank}등</span>
    </span>;
  }
}
