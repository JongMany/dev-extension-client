import Footer from "@/app/(main)/_components/Footer";
import { Header } from "@/app/(main)/_components/Header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="px-4 min-h-[75vh]">{children}</div>
      <Footer />
    </>
  );
}
