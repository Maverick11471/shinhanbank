"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const questions = [
  {
    question: "💡 갑자기 100만 원이 생겼다! 뭐할래?",
    options: [
      { text: "비상금으로 저축", type: "안정형" },
      { text: "주식 반, 적금 반!", type: "성장형" },
      { text: "일단 비트코인부터 ㄱㄱ", type: "도전형" },
    ],
  },
  {
    question: "📱 투자 앱에서 제일 먼저 보는 건?",
    options: [
      { text: "수익률 그래프", type: "도전형" },
      { text: "펀드 추천 목록", type: "성장형" },
      { text: "안정적인 예금 상품", type: "안정형" },
    ],
  },
  {
    question: "🎯 친구가 펀드 추천해달랬을 때 나는?",
    options: [
      { text: "일단 리스크 적은 거부터!", type: "안정형" },
      { text: "목표에 맞춰 조합해봐~", type: "성장형" },
      { text: "몰빵도 해봐야지 인생이지~", type: "도전형" },
    ],
  },
];

export default function SecondTwenty() {
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
      title: "신한 ESG 안정형 펀드",
      desc: "환경과 사회적 책임을 고려한 안정적 투자!",
      link: "https://bank.shinhan.com/index.jsp#020406100000",
    },
    성장형: {
      title: "신한 글로벌 테크 펀드",
      desc: "미래 기술에 분산 투자하여 수익과 성장 모두!",
      link: "https://bank.shinhan.com/index.jsp#020406100000",
    },
    도전형: {
      title: "신한 혁신 테마형 펀드",
      desc: "테마별 주식에 과감하게 투자하고 싶은 당신에게!",
      link: "https://bank.shinhan.com/index.jsp#020406100000",
    },
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-13 mt-50">
        🚀 나에게 딱 맞는 투자 스타일은?
      </h1>
      <p className="text-center text-lg mb-30">
        MZ세대도 똑똑하게 시작하는 재테크!
        <br /> 3문제로 내 투자 성향을 알아보고,
        <br /> 신한은행 추천 펀드까지 확인해보세요.
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
            {resultType === "안정형" && "위험은 싫어! 차곡차곡 쌓는 게 좋아요."}
            {resultType === "성장형" &&
              "균형 잡힌 투자, 미래도 챙기고 현재도 챙겨요!"}
            {resultType === "도전형" &&
              "위험도 감수! 큰 수익도 노릴 줄 아는 타입!"}
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

      <div className=" p-6 rounded-lg flex flex-col sm:flex-row items-center gap-6 min-h-screen">
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
            여러 사람이 돈을 모아 전문가가 <br /> 주식이나 채권에 대신
            투자해주는 상품이에요.
            <br /> 펀드는 소액으로도 분산 투자할 수 있어서 <br /> 20대에게도
            부담 없이 시작 가능해요.
            <br /> 테마형, 글로벌 기술주, ESG 등 <br /> 관심 있는 분야로 고를
            수도 있어요!
          </p>
        </div>
      </div>

      <div className=" p-6 rounded-lg  flex flex-col sm:flex-row items-center gap-6 min-h-screen">
        <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left pl-10">
          <h2 className="text-3xl font-bold mb-2">📸 펀드로 다녀온 첫 여행!</h2>
          <p>
            "ESG 펀드로 소소하게 시작했는데 <br /> 수익 쌓인 걸 보니까 유럽
            항공권이 딱 되더라고요!
            <br /> 처음으로 혼자 해외여행 다녀왔는데 <br /> 펀드 덕분에 용기 낼
            수 있었어요."
          </p>
          <p className="underline underline-offset-3 text-blue-400 mt-4">
            #펀드로여행가자
          </p>
          <p className="underline underline-offset-3 text-blue-400">
            #내돈내산해외여행
          </p>
        </div>
        <div className="w-full sm:w-1/2 h-[300px] sm:h-[500px] relative min-w-0">
          <Image
            src="/images/fundCharacter.png"
            alt="펀드로 다녀온 여행 인증샷"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
