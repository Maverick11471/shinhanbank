"use client";
import React from "react";
import Image from "next/image";

function IntroFifty() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-blue-100">
      <div className="flex items-center flex-col mt-30">
        <p className="text-lg text-gray-500 mb-5">
          50대, 안정적인 노후 수입을 위한 준비가 필요할 때
        </p>
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-20 text-center">
          안정적인 노후 수입을 위한 펀드 추천, 지금 시작하세요
        </h1>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl flex justify-center gap-8">
        {/* 왼쪽 이미지 영역 */}
        <div className="w-[150px] relative">
          <Image
            src="/images/fifty.png" // 40대를 표현한 이미지로 교체
            alt="40대 투자 캐릭터"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-2/3">
          <p className="text-gray-700 leading-relaxed mb-4">
            “은퇴 자금과 자녀 교육비, 이제는 두 마리 토끼를 잡아야 할 때입니다.
            <br />
            그래서 자산의 대부분은 안정형 펀드로, 나머지는 장기 성장을 위해
            성장형으로 나누어 투자하고 있습니다.
            <br />
            신한은행에서 상담받은 후, 저에게 가장 적합한 펀드를 선택할 수 있어서
            훨씬 더 안심이 되었습니다.”
          </p>
          <p className="text-sm text-gray-500">
            – 서울 거주 대기업 재직자 김OO (53세)
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroFifty;
