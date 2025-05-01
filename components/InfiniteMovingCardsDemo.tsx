"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./Infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "고객님, 배당형 펀드는 안정적인 수익을 원하는 50대 고객님들께 아주 적합한 선택입니다. 변동성은 있지만, 고배당 주식에 투자하여 꾸준한 수익을 얻을 수 있습니다.",
    title: "배당형 펀드 추천",
    name: "홍길동 대리", // 직원 이름과 직책 추가
  },
  {
    quote:
      "은퇴 후 안정적인 수익을 원하신다면, 채권형 펀드를 추천드립니다. 원금 손실 위험이 적고, 정기적인 이자 수익을 얻을 수 있어 매우 안정적입니다.",
    title: "채권형 펀드 추천",
    name: "이준호 과장", // 직원 이름과 직책 추가
  },
  {
    quote:
      "분산 투자에 관심이 있으시다면, 해외채권이나 글로벌 인컴 펀드도 고려해 보세요. 해외 자산에 투자하면서 안정적인 수익을 얻을 수 있습니다.",
    title: "분산투자 추천",
    name: "김민수 부장", // 직원 이름과 직책 추가
  },
  {
    quote:
      "원금 보존을 중시하신다면 예금과 연금보험 같은 상품을 권해드립니다. 안정성이 가장 중요한 요소이니, 원금 보장이 되는 상품이 가장 적합합니다.",
    title: "원금보존형 상품 추천",
    name: "박소영 팀장", // 직원 이름과 직책 추가
  },
  {
    quote:
      "펀드는 고위험이라고 느끼실 수 있지만, 채권형 펀드와 배당형 펀드를 통해 안정적인 수익을 얻을 수 있습니다. 원금 손실 위험이 낮아 안심하고 투자하실 수 있습니다.",
    title: "안정형 투자 추천",
    name: "최지은 대리", // 직원 이름과 직책 추가
  },
];
