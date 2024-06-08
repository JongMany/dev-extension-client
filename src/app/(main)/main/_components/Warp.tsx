"use client";
import WarpScreen from "@/app/(main)/_components/warp/WarpScreen";
import { WarpStateType } from "@/app/(main)/_components/warp/lib/constants";
import React, { useEffect, useState } from "react";

export default function Warp() {
  const [isSwitching, setIsSwitching] = useState<WarpStateType>("end");

  useEffect(() => {
    if (!JSON.parse(sessionStorage.getItem("isReload") ?? "false"))
      setIsSwitching("warp");
  }, []);

  useEffect(() => {
    const setReload = () => sessionStorage.setItem("isReload", "true");

    window.addEventListener("beforeunload", setReload);

    return () => window.removeEventListener("beforeunload", setReload);
  }, []);
  return (
    <WarpScreen isSwitching={isSwitching} setIsSwitching={setIsSwitching} />
  );
}
