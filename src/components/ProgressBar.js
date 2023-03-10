import React, { useEffect, useState } from "react";

const ProgressBar = ({ handleSubmit, reset, setReset }) => {
  const [progress, setProgress] = useState(100);
  let time = 100;
  useEffect(() => {
    setProgress(100);

    const intervalId = setInterval(() => {
      setProgress((prevState) => --prevState);
      --time;
      if (time <= 0) {
        handleSubmit();
        setProgress(100);
        setReset((prevState) => !prevState);
        clearInterval(intervalId);
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, [reset]);

  return (
    <div className="relative bg-[#575e64] h-[4px]">
      <div
        className={`bg-lime absolute top-0 left-0 h-[100%]`}
        style={{ width: `${progress}%`, transition: "all 0.4s linear" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
