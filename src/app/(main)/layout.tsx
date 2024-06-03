import { Header } from "@/app/(main)/_components/Header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className=" px-4">{children}</div>
    </>
  );
}
