import { Menu } from "@/app/(main)/_components/Menu";
import { Profile } from "@/app/(main)/_components/Profile";
import { StudyLogIcon } from "@/app/(main)/_components/StudyLogIcon";
import SignoutButton from "@/components/shared/button/Signout";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between py-6 items-center">
      <StudyLogIcon />
      <Menu />
      <div className="flex gap-x-4 items-center">
        <Profile />
        <SignoutButton />
      </div>
    </header>
  );
};
