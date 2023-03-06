import ChallengeStatusBar from "@/components/ChallengeStatusBar";
import Navbar from "@/components/Navbar";
import Options from "@/components/Options";
import Question from "@/components/Question";
import { useState } from "react";
import questions from "@/utils/data";
import { useRecoilState } from "recoil";
import { optionState } from "@/atoms/optionAtom";

const Challenge = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [score, setScore] = useState(0);
  const [soloScore, setSoloScore] = useState(0);
  const [option, setOption] = useRecoilState(optionState);

  const handleSubmit = () => {
    if (option === questions[questionNo].ans) {
      setScore((prevState) => ++prevState);
    }

    if (Boolean(Date.now() % 2)) {
      setSoloScore((prevState) => ++prevState);
    }

    if (questionNo === 4) {
      alert("Challenge Over");
      return;
    }

    setQuestionNo((prevState) => ++prevState);
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <ChallengeStatusBar score={score} soloScore={soloScore} />

      <Question
        question={questions[questionNo].question}
        by={questions[questionNo].by}
      />
      <Options ops={questions[questionNo]} questionNo={questionNo} />

      <div className="absolute bottom-0 border-t border-[#404040] w-[100%] py-2">
        <div
          className="bg-lime text-center p-2 mx-[15px] w-[calc(100%-30px)]"
          onClick={handleSubmit}
        >
          SUBMIT ANSWER
        </div>
      </div>
    </div>
  );
};

export default Challenge;
