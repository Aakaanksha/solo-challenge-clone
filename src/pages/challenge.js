import ChallengeStatusBar from "@/components/ChallengeStatusBar";
import Navbar from "@/components/Navbar";
import Options from "@/components/Options";
import Question from "@/components/Question";
import { useRef, useState } from "react";
import questions from "@/utils/data";
import { useRecoilState } from "recoil";
import { optionState } from "@/atoms/optionAtom";
import ProgressBar from "@/components/ProgressBar";
import Check from "@/components/Check";
import { useRouter } from "next/router";
import { scoreState } from "@/atoms/scoreAtom";
import { soloScoreState } from "@/atoms/soloScoreAtom";

const Challenge = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [score, setScore] = useRecoilState(scoreState);
  const [soloScore, setSoloScore] = useRecoilState(soloScoreState);
  const [option, setOption] = useRecoilState(optionState);
  const [anime, setAnime] = useState(false);
  const [checkStatus, setCheckStatus] = useState("");
  const [reset, setReset] = useState(false);
  const router = useRouter();

  const correctSound = useRef(null);
  const incorrectSound = useRef(null);

  const handleSubmit = () => {
    if (option === questions[questionNo].ans) {
      setScore((prevState) => ++prevState);
      setCheckStatus("Correct");

      try {
        correctSound.current.play();
      } catch (error) {}
    } else {
      setCheckStatus("Wrong");

      try {
        incorrectSound.current.play();
      } catch (error) {}
    }

    if (Boolean(Date.now() % 2)) {
      setSoloScore((prevState) => ++prevState);
    }

    setAnime(true);
    setReset((prevState) => !prevState);

    if (questionNo === 4) {
      router.push("/results");
      return;
    }

    setQuestionNo((prevState) => ++prevState);
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <ProgressBar
        handleSubmit={handleSubmit}
        reset={reset}
        setReset={setReset}
      />
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

      <Check checkStatus={checkStatus} anime={anime} setAnime={setAnime} />

      <audio ref={correctSound} src="/correct.mp3" hidden></audio>
      <audio ref={incorrectSound} src="/incorrect.mp3" hidden></audio>
    </div>
  );
};

export default Challenge;
