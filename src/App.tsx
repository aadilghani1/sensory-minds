import { useEffect, useState } from "react";
import { useReward } from "react-rewards";
import { initialData } from "./App.fixtures";
import Card from "./components/Card";
import { checkColumns } from "./helpers/checkColumns";
import { checkDiagonal } from "./helpers/checkDiagonals";
import { checkRows } from "./helpers/checkRow";
import { shuffleArray } from "./helpers/shuffleArray";
import { CardData } from "./lib/types";

function App() {
  const [data, setData] = useState<Array<CardData>>(initialData);
  const { reward, isAnimating } = useReward("rewardId", "emoji", { spread: 120, elementCount: 100 , emoji: ['🎉', '🤩', '🥳', '😍'] });

  useEffect(() => {
   setData(data => {
    const firstHalf = shuffleArray(data.slice(0,12))
    const secondHalf = shuffleArray(data.slice(13))
    const shuffledArray = [...firstHalf, data[12], ...secondHalf]

    return shuffledArray as CardData[]
  })
  }, [])

  return (
    <section className="flex flex-col space-y-5 h-screen w-full justify-center items-center">
      <span id="rewardId" />
      <p className="font-thin text-xl">
        SENSORY<span className="font-semibold">MINDS</span>
      </p>
      <div className="relative p-5 bg-[#F5F5F5]/50 border border-[#E2E2E2] rounded-lg grid grid-cols-5 gap-3 md:gap-5">
        <div className="bg-purple-600/50 blur-2xl h-60 w-60 absolute top-0 left-0 animate-pulse -z-10" />
        <div className="bg-orange-600/50 blur-2xl h-60 w-60 absolute bottom-0 right-0 animate-pulse -z-10" />
        {data.map((d, idx) => {
          const isWin =
            checkRows(data, idx) ||
            checkColumns(data, idx) ||
            checkDiagonal(data, idx);
          return (
            <Card
              idx={idx}
              key={idx}
              disabled={isAnimating}
              data={d}
              isWin={isWin}
              marked={d.marked}
              onClick={() => {
                if (idx !== 12) {
                  let tempArr = [...data];
                  tempArr[idx] = {
                    content: tempArr[idx].content,
                    marked: !tempArr[idx].marked,
                  };
                  if (
                    checkRows(tempArr, idx) ||
                    checkColumns(tempArr, idx) ||
                    checkDiagonal(tempArr, idx)
                  ) {
                    reward();
                  }
                  setData(tempArr);
                }
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default App;
