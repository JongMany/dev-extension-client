"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const goToBackHandler = () => {
    router.back();
  };

  return (
    <button
      type="button"
      className="border-2 border-black px-4 py-1 rounded-lg shadow-md hover:font-bold hover:shadow-xl"
      onClick={goToBackHandler}
    >
      뒤로가기
    </button>
  );
}
