"use client";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({
  children,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <button
      type="button"
      className="border-2 border-black px-4 py-1 rounded-lg shadow-md hover:font-bold hover:shadow-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
