import React from "react";
import Image from "next/image";
import Header from "./Header";

function IntroTeen() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center justify-center py-12 bg-orange-100">
        <div className="flex items-center flex-col mt-30">
          <p className="text-lg text-gray-500  mb-5">요즘 친구들은 다 한다는</p>
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-20">
            나만의 금융 캐릭터 찾기
          </h1>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl flex justify-center gap-8">
          {/* 왼쪽 제목 영역 */}
          <div className="w-[150px]  relative   ">
            <Image
              src="/images/drone-bear.png"
              alt="10대 드론 캐릭터"
              fill
              className="object-contain"
            />
          </div>

          {/* 오른쪽 인터뷰 내용 */}
          <div className="w-2/3">
            <p className="text-gray-700 leading-relaxed mb-4">
              “처음엔 그냥 친구 따라 시작한 적금이었어요. <br />한 달에 2만 원씩
              모았는데, 1년 뒤엔 30만 원이 넘는 돈이 생겼죠. <br />
              그걸로 중고 드론을 샀는데, 유튜브 영상 만들면서 용돈도 벌고
              있어요. <br />
              요즘은 매달 적금 일지를 쓰는 게 습관이 됐어요!”
            </p>
            <p className="text-sm text-gray-500">– 서울 OO중학교 3학년 이OO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroTeen;
