import React from "react";

function IntroTeen() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div>
        <h2 className="text-xl font-bold text-gray-800 leading-snug">
          [인터뷰] 중3 이서준 군의 적금 성공기
        </h2>
      </div>

      <div className="w-2/3">
        <p className="text-gray-700 leading-relaxed mb-4">
          “처음엔 그냥 친구 따라 시작한 적금이었어요. <br />한 달에 2만 원씩
          모았는데, 1년 뒤엔 30만 원이 넘는 돈이 생겼죠. <br />
          그걸로 중고 드론을 샀는데, 유튜브 영상 만들면서 용돈도 벌고 있어요.{" "}
          <br />
          요즘은 매달 투자 일지를 쓰는 게 습관이 됐어요!”
        </p>
        <p className="text-sm text-gray-500">– 서울 중산중학교 3학년 이서준</p>
      </div>
    </div>
  );
}

export default IntroTeen;
