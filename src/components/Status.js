import React, { useEffect, useState } from "react";

const Status = ({ score, soloScore }) => {
  const [resultText, setResultText] = useState("");
  const [resultColor, setResultColor] = useState("");

  useEffect(() => {
    if (score > soloScore) {
      setResultText("You Won");
      setResultColor("bg-lime");
    } else if (score === soloScore) {
      setResultText("Draw");
      setResultColor("bg-[#78909c]");
    } else {
      setResultText("You Lost");
      setResultColor("bg-red-500");
    }
  }, []);

  return (
    <div
      className={`${resultColor} text-white w-fit mx-auto px-8 py-2 mt-12 mb-8`}
    >
      {resultText}
    </div>
  );
};

export default Status;
