import React from "react";
import Image from "next/image";
import Header from "./Header";

function IntroThirty() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center justify-center py-12 bg-yellow-100">
        <div className="flex items-center flex-col mt-30">
          <p className="text-lg text-gray-500 mb-5">
            30대, 이제는 목표 중심의 투자로
          </p>
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-20">
            내 재무 목표, 펀드로 설계해보기
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl flex justify-center gap-8">
          {/* 왼쪽 이미지 영역 */}
          <div className="w-[150px] relative">
            <Image
              src="/images/thirtyCharacter.png" // 30대를 표현한 이미지로 교체하세요
              alt="30대 투자 캐릭터"
              fill
              className="object-contain"
            />
          </div>

          {/* 오른쪽 사례 내용 */}
          <div className="w-2/3">
            <p className="text-gray-700 leading-relaxed mb-4">
              “아이 낳기 전까지 전세금 마련하려고 적립식 펀드를 시작했어요.{" "}
              <br />
              신한은행 앱에서 수익률 그래프랑 5년 시뮬레이션 보면서 <br />
              계획 세우는 게 재밌고 든든하더라고요.”
            </p>
            <p className="text-sm text-gray-500">
              – 서울 거주 직장인 박OO (34세)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroThirty;
