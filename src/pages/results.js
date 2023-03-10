import { scoreState } from "@/atoms/scoreAtom";
import { soloScoreState } from "@/atoms/soloScoreAtom";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Status from "@/components/Status";
import VSComponent from "@/components/VSComponent";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { BsYoutube } from "react-icons/bs";

const Results = () => {
  const [score, setScore] = useRecoilState(scoreState);
  const [soloScore, setSoloScore] = useRecoilState(soloScoreState);

  const [matchResult, setMatchResult] = useState(0);
  const [totalXp, setTotalXp] = useState(0);

  useEffect(() => {
    if (score > soloScore) {
      setMatchResult(score);
      setTotalXp(score);
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Status score={score} soloScore={soloScore} />
      <VSComponent score={`${score} : ${soloScore}`} />

      <div className="flex justify-center items-end gap-4 mt-8">
        <div className="text-center text-accent text-[14px] w-[75px]">
          <p>ANSWERS</p>
          <p>BONUS</p>
          <div className="border-[2px] border-accent rounded-[2px]">0 XP</div>
        </div>

        <div className="text-center text-accent text-[14px] w-[75px]">
          <p>MATCH</p>
          <p>RESULT</p>
          <div className="border-[2px] border-accent rounded-[2px]">
            {matchResult} XP
          </div>
        </div>

        <div className="text-center text-accent text-[14px] w-[75px]">
          <p>TOTAL XP</p>
          <div className="border-[2px] border-accent rounded-[2px]">
            {totalXp} XP
          </div>
        </div>
      </div>

      <div className="absolute bottom-[80px] w-[100%]">
        <a
          href="https://www.youtube.com/c/TheBraveCoders/"
          className="bg-white text-red-500 py-2 px-4 flex w-fit mx-auto items-center gap-2 rounded-[40px]"
          target="_blank"
        >
          <BsYoutube className="text-[24px]" />
          Our Youtube Channel
        </a>
      </div>

      <div className="absolute bottom-0 border-t border-[#404040] w-[100%] py-2">
        <div className="flex gap-4 px-[15px]">
          <div className={`bg-accent py-2 px-[24px] rounded-[3px] text-[14px]`}>
            FIND FRIENDS
          </div>

          <Button text="Rematch" color="bg-lime text-[14px]" />
        </div>
      </div>
    </div>
  );
};

export default Results;
