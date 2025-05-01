import React from "react";
import Image from "next/image";

function IntroForty() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-green-100">
      <div className="flex items-center flex-col mt-30">
        <p className="text-lg text-gray-500 mb-5">
          40대, 이제는 자산의 균형과 안전이 중요할 때
        </p>
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-20 text-center">
          가족과 미래를 위한 자산 설계, 지금 시작해보세요
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl flex justify-center gap-8">
        {/* 왼쪽 이미지 영역 */}
        <div className="w-[150px] relative">
          <Image
            src="/images/fourtyCharacter.png" // 40대를 표현한 이미지로 교체
            alt="40대 투자 캐릭터"
            fill
            className="object-contain"
          />
        </div>

        {/* 오른쪽 사례 내용 */}
        <div className="w-2/3">
          <p className="text-gray-700 leading-relaxed mb-4">
            “아이 교육비랑 은퇴 자금, 이제는 동시에 생각해야 하더라고요.
            <br />
            그래서 자산의 절반은 안정형, 절반은 성장형으로 나눠 투자 중이에요.
            <br />
            신한은행에서 상담받은 포트폴리오 덕분에 훨씬 안심되더라고요.”
          </p>
          <p className="text-sm text-gray-500">
            – 부산 거주 공기업 재직자 이OO (43세)
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroForty;
