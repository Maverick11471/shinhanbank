import Image from "next/image";

export default function KpopSavingsPage() {
  const characters = [
    {
      name: "루틴이",
      emoji: "💼",
      desc: "매달 저축을 빠짐없이! 계획적이고 성실한 ‘적금형’ 아이돌",
    },
    {
      name: "플렉서",
      emoji: "💸",
      desc: "가끔 큰돈을 넣고는 잊어버려! ‘예금’과 잘 맞는 타입",
    },
    {
      name: "스냅슛",
      emoji: "🎯",
      desc: "중간에 돈을 빼고 싶어 해! 자유적금이 잘 어울려",
    },
    {
      name: "드리머",
      emoji: "🎤",
      desc: "‘콘서트까지 1년!’ 같은 목표형 적금이 어울리는 꿈꾸는 타입",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-13 mt-50">
        🎤 너도 될 수 있어, 재테크 아이돌!
      </h1>

      <p className="text-center text-lg mb-30">
        연습생처럼 꾸준하게 준비하면 데뷔처럼 ‘이자’라는 선물도 받을 수 있어요.
        <br />
        나에게 어울리는 재테크 캐릭터를 찾아볼까요?
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-30">
        {characters.map((char) => (
          <div
            key={char.name}
            className="p-4 rounded-xl shadow-lg bg-white hover:scale-105 transition"
          >
            <div className="text-4xl mb-2">{char.emoji}</div>
            <h2 className="text-xl font-bold">{char.name}</h2>
            <p className="mt-2">{char.desc}</p>
          </div>
        ))}
      </div>

      <div className=" p-6 rounded-lg mb-10 flex flex-col sm:flex-row items-center gap-6 min-h-screen">
        <div className="w-full sm:w-1/2 h-[300px] sm:h-[500px] relative min-w-0">
          <Image
            src="/images/saving.png"
            alt="적금 설명 이미지"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left pl-10">
          <h2 className="text-3xl font-bold mb-2">💰 적금이란?</h2>
          <p>
            매달 일정한 금액을 저축하고,
            <br /> 기간이 지나면 이자와 함께 돌려받는 상품이에요.
            <br />
            꾸준함이 포인트! 연습생 루틴처럼 성실히 쌓아가요.
          </p>
        </div>
      </div>

      <div className=" p-6 rounded-lg  flex flex-col sm:flex-row items-center gap-6 min-h-screen">
        <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left pl-10">
          <h2 className="text-3xl font-bold mb-2">
            📸 적금넣고 인증샷 남기자!
          </h2>
          <p>
            "중1 때부터 매달 5천 원씩 모았어요. <br />
            드디어 드림콘서트 티켓과 응원봉까지 샀어요!"
            <br />
            <br />
          </p>
          <p className="underline underline-offset-3 text-blue-400">
            #적금으로성공
          </p>
          <p className="underline underline-offset-3 text-blue-400">
            #루틴이인정
          </p>
        </div>
        <div className="w-full sm:w-1/2 h-[300px] sm:h-[500px] relative min-w-0">
          <Image
            src="/images/concert.png"
            alt="팬 인증샷"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
