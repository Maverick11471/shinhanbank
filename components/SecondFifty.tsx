"use client";
import React from "react";
import Image from "next/image";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

function SecondFifty() {
  return (
    <>
      <InfiniteMovingCardsDemo />

      <div className="w-full flex flex-col items-center justify-center py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl flex flex-col items-center mb-20 mt-20">
          {/* 펀드 추천 설명 */}
          <div className="w-full text-center mb-8">
            <p className="text-lg text-gray-700 mb-4">
              고객님의 투자 성향을 고려하여, 신한은행이 엄선한 안정적인 펀드를
              추천드립니다.
              <br />
              아래의 펀드는 10년 이상 검증된 안정성을 자랑하며, 고객님의 노후를
              안전하게 준비할 수 있습니다.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-20">
              안정적인 노후를 위한 추천 펀드 TOP 3
            </h2>
          </div>

          {/* 펀드 추천 표 */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-center table-auto">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-gray-200 text-gray-700">
                    펀드명
                  </th>
                  <th className="py-3 px-4 bg-gray-200 text-gray-700">
                    위험등급
                  </th>
                  <th className="py-3 px-4 bg-gray-200 text-gray-700">
                    1년 수익률
                  </th>
                  <th className="py-3 px-4 bg-gray-200 text-gray-700">
                    배당수익률
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4">신한 안정 목표 펀드</td>
                  <td className="py-3 px-4 text-green-600">낮음</td>
                  <td className="py-3 px-4">5.2%</td>
                  <td className="py-3 px-4">4.5%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">신한 글로벌 안정형 펀드</td>
                  <td className="py-3 px-4 text-green-600">낮음</td>
                  <td className="py-3 px-4">4.8%</td>
                  <td className="py-3 px-4">4.2%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">신한 안정 성장형 펀드</td>
                  <td className="py-3 px-4 text-yellow-600">중간</td>
                  <td className="py-3 px-4">6.1%</td>
                  <td className="py-3 px-4">4.7%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 상담 요청 버튼 */}
          <div className="mt-8">
            <button
              onClick={() =>
                window.open("https://www.shinhan.com/contact", "_blank")
              }
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition mr-5"
            >
              상담 요청하기
            </button>

            <button
              onClick={() => window.open("/download/brochure.pdf", "_blank")}
              className="bg-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              자료 다운로드
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondFifty;
