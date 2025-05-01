import React from "react";
import Image from "next/image";

function IntroTwenty() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-red-100">
      <div className="flex items-center flex-col mt-30">
        <p className="text-lg text-gray-500 mb-5">
          요즘 20대는 재테크도 스마트하게
        </p>
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-20">
          내 투자 성향, 지금 확인해보기
        </h1>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl flex justify-center gap-8">
        {/* 왼쪽 이미지 영역 */}
        <div className="w-[150px] relative">
          <Image
            src="/images/computer.png" // 20대를 표현한 이미지로 교체하세요
            alt="20대 금융 캐릭터"
            fill
            className="object-contain"
          />
        </div>

        {/* 오른쪽 인터뷰 내용 */}
        <div className="w-2/3">
          <p className="text-gray-700 leading-relaxed mb-4">
            “군 전역하고 바로 펀드에 관심 생겨서 5만 원씩 넣기 시작했어요.{" "}
            <br />
            처음엔 그냥 ESG 펀드가 괜찮다길래 골랐는데, 생각보다 수익률도
            괜찮더라고요. <br />
            요즘은 글로벌 테크 펀드 쪽도 공부하면서 투자 중이에요. <br />
            주식보다 부담 없어서 꾸준히 넣기 좋아요.”
          </p>
          <p className="text-sm text-gray-500">– 경기 OO대학교 2학년 김OO</p>
        </div>
      </div>
    </div>
  );
}

export default IntroTwenty;
