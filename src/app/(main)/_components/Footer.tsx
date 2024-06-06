import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiNaver } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-6 px-4 bg-black text-white flex justify-between h-[15vh]">
      <div className="flex-1 flex flex-col items-center">
        <span>© 2024 StudyLog</span>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <span>개인정보처리방침</span>
        <span>이용약관</span>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
        <div className="flex gap-x-2">
          <div className="flex flex-col gap-y-2">
            <span className="text-lg px-3 py-3 rounded-full border-[1px]">
              <Link href="">
                <FaGithub className="w-[24px] h-[24px]" />
              </Link>
            </span>
            <span className="text-lg px-3 py-3 rounded-full border-[1px]">
              <Link href="">
                <FaLinkedin className="w-[24px] h-[24px]" />
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-lg px-3 py-3 rounded-full border-[1px]">
              <Link href="mailto:blackberry1114@naver.com" target="_top">
                <SiNaver className="w-[24px] h-[24px]" />
              </Link>
            </span>
            <span className="text-lg px-3 py-3 rounded-full border-[1px]">
              <Link href="">
                <FaInstagram className="w-[24px] h-[24px]" />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <span>© 방구석코딩쟁이</span>
      </div>
    </footer>
  );
}
