"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const questions = [
  {
    question: "🎯 내 집 마련을 위한 첫걸음, 무엇부터 시작할까?",
    options: [
      { text: "적립식 펀드로 차곡차곡 모으기", type: "안정형" },
      { text: "부동산 ETF와 펀드 병행 투자", type: "성장형" },
      { text: "소형주 중심 고수익 펀드부터 시작", type: "도전형" },
    ],
  },
  {
    question: "📊 투자 상품 설명을 볼 때 가장 중요한 건?",
    options: [
      { text: "3년 이상 수익률 그래프", type: "안정형" },
      { text: "펀드 구성 종목과 산업 전망", type: "성장형" },
      { text: "최근 6개월간 수익률 최고인 상품", type: "도전형" },
    ],
  },
  {
    question: "💼 월급의 여유 자금이 생겼다면?",
    options: [
      { text: "자동이체로 펀드 적립부터 시작", type: "안정형" },
      { text: "재무목표별 포트폴리오 짜기", type: "성장형" },
      { text: "테마형 펀드에 과감히 투자!", type: "도전형" },
    ],
  },
];
const data = [
  { month: "1월", 미래형AI성장: 1.2, ESG안정투자: 0.8, 글로벌테크포커스: 2.0 },
  { month: "2월", 미래형AI성장: 2.1, ESG안정투자: 1.0, 글로벌테크포커스: 2.5 },
  { month: "3월", 미래형AI성장: 1.8, ESG안정투자: 1.1, 글로벌테크포커스: 3.1 },
  { month: "4월", 미래형AI성장: 3.4, ESG안정투자: 1.3, 글로벌테크포커스: 2.8 },
  { month: "5월", 미래형AI성장: 4.0, ESG안정투자: 1.5, 글로벌테크포커스: 3.7 },
  { month: "6월", 미래형AI성장: 3.6, ESG안정투자: 1.4, 글로벌테크포커스: 3.4 },
  { month: "7월", 미래형AI성장: 5.1, ESG안정투자: 1.7, 글로벌테크포커스: 4.2 },
  { month: "8월", 미래형AI성장: 4.7, ESG안정투자: 1.6, 글로벌테크포커스: 3.8 },
  { month: "9월", 미래형AI성장: 5.5, ESG안정투자: 1.8, 글로벌테크포커스: 4.5 },
  { month: "10월", 미래형AI성장: 6.2, ESG안정투자: 2.0, 글로벌테크포커스: 4.9 },
  { month: "11월", 미래형AI성장: 5.9, ESG안정투자: 2.1, 글로벌테크포커스: 5.1 },
  { month: "12월", 미래형AI성장: 7.0, ESG안정투자: 2.2, 글로벌테크포커스: 5.8 },
];
export default function SecondThirty() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleSelect = (type: string) => {
    setScores((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }));
    setStep(step + 1);
  };

  const handleRetry = () => {
    setStep(0);
    setScores({});
  };

  const handleShare = () => {
    window.open("https://www.instagram.com/", "_blank");
  };

  const getResult = () => {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

  const resultType = step >= questions.length ? getResult() : null;

  const productLinks: Record<
    string,
    { title: string; desc: string; link: string }
  > = {
    안정형: {
      title: "신한 안정 목표 펀드",
      desc: "내 집 마련, 자녀 교육 등 중장기 목표에 맞춘 안정적 투자",
      link: "https://bank.shinhan.com/index.jsp#020406100000",
    },
    성장형: {
      title: "신한 5년 포트폴리오 플랜",
      desc: "목표 지향적 자산 배분으로 수익과 리스크 균형 확보",
      link: "https://bank.shinhan.com/index.jsp#020406100000",
    },
    도전형: {
      title: "신한 테마 고성장 펀드",
      desc: "30대의 과감한 투자, 기술/테마 분야 집중",
      link: "https://bank.shinhan.com/index.jsp#020406100000",
    },
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-13 mt-50">
        🏠 내 목표에 맞춘 펀드 스타일 찾기
      </h1>
      <p className="text-center text-lg mb-30">
        30대의 현실적인 재무목표,
        <br />
        지금 내게 맞는 펀드 투자 스타일을 확인해보세요.
      </p>

      {step < questions.length ? (
        <div className="bg-green-50 p-6 shadow-md rounded-lg max-w-md mx-auto mb-50">
          <h2 className="text-xl font-semibold mb-4">
            {questions[step].question}
          </h2>
          <div className="space-y-2">
            {questions[step].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(opt.type)}
                className="w-full py-3 px-4 bg-blue-100 rounded-md hover:bg-blue-200 transition"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-30 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">
            📊 당신은 "{resultType}" 투자자!
          </h2>
          <p className="mb-4">
            {resultType === "안정형" && "꾸준함으로 목표에 도달하는 실속파"}
            {resultType === "성장형" &&
              "균형 잡힌 전략으로 미래를 설계하는 타입"}
            {resultType === "도전형" && "기회 포착에 능한 과감한 투자자"}
          </p>

          <div className="bg-white p-4 rounded-lg shadow-inner mb-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">
              📌 추천 상품: {productLinks[resultType!].title}
            </h3>
            <p className="mb-2">{productLinks[resultType!].desc}</p>
            <Link
              href={productLinks[resultType!].link}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              target="_blank"
            >
              자세히 보기
            </Link>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleShare}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              결과 공유하기
            </button>
            <button
              onClick={handleRetry}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              다시하기
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            * 공유 시 리워드 포인트 지급 예정!
          </p>
        </div>
      )}

      {/* 차트 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-30">
        <h2 className="text-2xl font-bold mb-4">
          📊 “30대가 가장 많이 고른 펀드, 수익률은?”
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis unit="%" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="미래형AI성장"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="ESG안정투자"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="글로벌테크포커스"
              stroke="#ffc658"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 상품설명 */}
      <div className=" p-6 rounded-lg mb-10 flex flex-col sm:flex-row items-center gap-6 min-h-screen">
        <div className="w-full sm:w-1/2 h-[300px] sm:h-[500px] relative min-w-0">
          <Image
            src="/images/fund.png"
            alt="펀드 설명 이미지"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left pl-10">
          <h2 className="text-3xl font-bold mb-2">📈 펀드란?</h2>
          <p>
            여러 사람이 돈을 모아 전문가가
            <br /> 주식이나 채권에 대신 투자해주는 상품이에요.
            <br /> 펀드는 소액으로도 분산 투자할 수 있어서 <br />
            30대의 장기 목표에도 잘 맞아요.
            <br /> 테마형, 글로벌 기술주, ESG 등 <br />
            관심 있는 분야로 고를 수도 있어요!
          </p>
        </div>
      </div>
    </div>
  );
}
