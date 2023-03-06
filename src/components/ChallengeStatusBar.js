import Image from "next/image";
import React from "react";

const ChallengeStatusBar = ({ score, soloScore }) => {
  return (
    <div className="px-2 py-2 bg-gray text-[#c3c7ca] flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-1">
          <Image src="/akame_challenge.jpg" height={55} width={55} alt="dp" />
          <div>
            <h2 className="text-[12px]">Aakaanksha 💕</h2>
            <p className="text-[10px]">LEVEL 16</p>
          </div>
        </div>

        <div>
          <h2 className="text-[20px] font-medium">
            {score} : {soloScore}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <div>
          <h2 className="text-[12px]">SoloLearn</h2>
          <p className="text-[10px] text-right">LEVEL 22</p>
        </div>
        <Image src="/solo_challenge.jpg" height={53} width={53} alt="dp" />
      </div>
    </div>
  );
};

export default ChallengeStatusBar;
