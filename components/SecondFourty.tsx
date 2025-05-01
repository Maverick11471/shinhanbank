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
    question: "🎯 은퇴 준비를 위한 첫걸음, 무엇부터 시작할까요?",
    options: [
      { text: "안정 자산 위주의 자산배분", type: "안정형" },
      { text: "균형 잡힌 포트폴리오 구성", type: "성장형" },
      { text: "고위험 고수익 자산 투자", type: "도전형" },
    ],
  },
  {
    question: "📊 자산 배분을 고려할 때 가장 중요한 요소는?",
    options: [
      { text: "안정적인 자산, 은퇴 후 안정적 수익", type: "안정형" },
      { text: "수익성과 리스크의 균형", type: "성장형" },
      { text: "빠른 수익을 위한 고위험 자산", type: "도전형" },
    ],
  },
  {
    question: "💼 자녀 교육 자금을 마련하려면?",
    options: [
      { text: "안정적인 펀드로 차근차근 투자", type: "안정형" },
      { text: "장기적인 성장을 위한 포트폴리오 계획", type: "성장형" },
      { text: "미래형 투자 상품에 과감히 투자", type: "도전형" },
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

export default function SecondForty() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [view, setView] = useState("summary"); // 'summary' 또는 'detailed'

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
      desc: "안정적인 자산배분으로 은퇴 후 안정적 수익을 위한 투자",
      link: "https://bank.shinhan.com/index.jsp#020406100000",
    },
    성장형: {
      title: "신한 5년 포트폴리오 플랜",
      desc: "균형 잡힌 전략으로 가족과 미래를 위한 자산 증식",
      link: "https://bank.shinhan.com/index.jsp#020406100000",
    },
    도전형: {
      title: "신한 테마 고성장 펀드",
      desc: "과감한 투자로 큰 수익을 추구하는 40대를 위한 투자 상품",
      link: "https://bank.shinhan.com/index.jsp#020406100000",
    },
  };

  // 보기 전환 함수
  const toggleView = () => {
    setView(view === "summary" ? "detailed" : "summary");
  };

  // 상담 요청 함수
  const handleContactConsultation = () => {
    window.open("https://www.shinhan.com/contact", "_blank");
  };

  // 결과 설명
  const renderResultDescription = () => {
    if (view === "summary") {
      return (
        <>
          {resultType === "안정형" &&
            "안정적인 자산배분으로 은퇴 후 안정적 수익을 추구하는 실속파"}
          {resultType === "성장형" &&
            "가족과 미래를 위한 균형 잡힌 투자로 장기적으로 안정적인 성장을 추구하는 타입"}
          {resultType === "도전형" &&
            "과감한 투자로 큰 수익을 추구하는 도전적인 투자자"}
        </>
      );
    } else {
      return (
        <>
          {resultType === "안정형" &&
            "자산배분 전략은 주식, 채권, 현금 등을 적절히 혼합하여 안정적인 수익을 추구하는 방식입니다. 주요 포트폴리오는 주식의 비중을 낮추고, 채권과 현금성 자산을 늘려 안정성을 꾀합니다."}
          {resultType === "성장형" &&
            "성장형 포트폴리오는 중장기적인 안정적 성장을 목표로 하며, 주식과 채권의 비율을 조절하여 리스크를 분산합니다. 가족과 미래를 위한 계획적인 자산 증식이 특징입니다."}
          {resultType === "도전형" &&
            "도전형 투자자는 더 높은 리스크를 감수하고, 높은 수익을 목표로 합니다. 고위험 자산에 투자해 빠른 수익을 추구합니다. 하지만 장기적인 변동성이 클 수 있습니다."}
        </>
      );
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-13 mt-50">
        🏠 40대를 위한 맞춤형 펀드 스타일 찾기
      </h1>
      <p className="text-center text-lg mb-30">
        40대의 안정적인 재무 목표를 위해,
        <br />
        당신에게 맞는 펀드 투자 스타일을 찾아보세요.
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
          <p className="mb-4">{renderResultDescription()}</p>

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">
            📊 “40대가 가장 많이 고른 펀드, 수익률은?”
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
      </div>
    </div>
  );
}
