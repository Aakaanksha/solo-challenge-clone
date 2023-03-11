import { checkState } from "@/atoms/checkAtom";
import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

const Check = ({ checkStatus, anime, setAnime }) => {
  const check = useRef(null);

  useEffect(() => {
    check.current.addEventListener("transitionend", () => {
      setAnime(false);
    });
  }, []);

  return (
    <div
      ref={check}
      className={`text-lime ${
        checkStatus === "Wrong" && "text-red-500"
      } font-medium text-5xl absolute top-[80%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-[top] duration-1000`}
      style={{ top: anime ? "30%" : "80%", opacity: anime ? "100%" : "0" }}
    >
      {checkStatus}
    </div>
  );
};

export default Check;
