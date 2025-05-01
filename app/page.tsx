import React from "react";
import Link from "next/link";
import Image from "next/image";

const ageGroups = [
  {
    label: "10대",
    description: "SNS와 트렌드를 즐기는 인싸파",
    color: "bg-orange-100",
    image: "/images/10.png",
    href: "/teen",
  },
  {
    label: "20대",
    description: "여행과 경험 소비를 즐기는 탐험파",
    color: "bg-red-100",
    image: "/images/20.png",
    href: "/twenty",
  },
  {
    label: "30대",
    description: "가성비와 미래 준비가 중요한 실속파",
    color: "bg-yellow-100",
    image: "/images/30.png",
    href: "/thirty",
  },
  {
    label: "40대",
    description: "가족과 건강 모두를 챙기는 균형파",
    color: "bg-green-100",
    image: "/images/40.png",
    href: "/fourty",
  },
  {
    label: "50대 이상",
    description: "안정과 은퇴 준비에 집중하는 신중파",
    color: "bg-blue-100",
    image: "/images/50.png",
    href: "/fifty",
  },
];

export default function AgeGroupSelector() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <iframe
        className="z-0 absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="https://www.youtube.com/embed/Se7fe6DZSWI?start=1&autoplay=1&mute=1&controls=0&loop=1&playlist=Se7fe6DZSWI&modestbranding=1&rel=0&disablekb=1&fs=0"
        title="YouTube video background"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className="relative z-10 min-h-screen flex flex-col justify-end items-center py-20">
        <div className="bg-white/20 px-6 py-2 rounded-md mb-8">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg ">
            “내 돈 관리법, 나이마다 다르다?” 지금 확인해보세요!
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-8 px-4 ">
          {ageGroups.map((group) => (
            <Link
              key={group.label}
              href={group.href}
              className={`${group.color} rounded-xl shadow-md hover:shadow-lg transition p-6 text-center w-64`}
            >
              <div className="h-[120px] relative flex items-end justify-center mb-2">
                <Image
                  src={group.image}
                  alt={`${group.label} 캐릭터`}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-700 mb-1">
                {group.label}
              </h2>
              <p className="text-sm text-gray-600 leading-tight">
                {group.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-5" />
    </div>
  );
}
