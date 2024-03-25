import React from "react";
import Link from "next/link";

const infoClassName = "flex items-start gap-x-1 break-all";

export default function PrivacyInformation() {
  const userInfo = {
    company: 'HCC Lab',
    geolocation: 'Seoul',
    link: ['https://homebody-coder.tistory.com/', 'https://velog.io/@blackberry1114/posts']
  }

  return (
      <div className="w-[100%] py-4 flex flex-col text-sm gap-y-1">
        <p className={infoClassName}>
          <span>🏢</span>
          <span>{userInfo.company || '회사를 입력해주세요'}</span>
        </p>
        <p className={infoClassName}>
          <GeoIcon/>
          <span>{userInfo.geolocation || '지역을 입력해주세요'}</span>
        </p>
        <p className={infoClassName}>
          <span>🔗</span>
          <span>
            <Link href={userInfo.link[0]} target="_blank">
              {userInfo.link[0]}
            </Link>
          </span>
        </p>
        <p className={infoClassName}>
          <span>🔗</span>
          <span>
            <Link href={userInfo.link[1]} target="_blank">
              {userInfo.link[1]}
            </Link>
          </span>
        </p>
      </div>
  );
}

function GeoIcon() {
  return (
      <svg
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
      >
        <path
            d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
      </svg>
  );
}
