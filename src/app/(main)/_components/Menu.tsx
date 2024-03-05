import { MenuItem } from "@/app/(main)/_components/MenuItem";
import Link from "next/link";

const menuItems = [
  { text: "홈", href: "/main" },
  { text: "대시보드", href: "/dashboard" },
  { text: "목표", href: "/goal" },
  { text: "랭킹", href: "/rank" },
  { text: "프로필", href: "/profile" },
];

export const Menu = () => {
  return (
    <div className="flex-1">
      <ul className="flex justify-center gap-x-10 ">
        {menuItems.map((item) => (
          <MenuItem key={item.text} href={item.href}>
            <Link href={item.href}>{item.text}</Link>
          </MenuItem>
        ))}
        {/* <li></li> */}
      </ul>
    </div>
  );
};
