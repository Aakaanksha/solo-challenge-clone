import React from "react";

const Question = ({ question, by }) => {
  return (
    <div className="relative p-[15px] text-[20px]">
      {question}
      <div className="absolute right-[15px] bottom-0 text-[16px] text-accent">
        by {by}
      </div>
    </div>
  );
};

export default Question;
