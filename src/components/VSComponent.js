import Image from "next/image";
import React from "react";

const VSComponent = ({ score }) => {
  return (
    <div className="flex justify-between items-center px-[15px]">
      <div>
        <Image src="/akame.jpg" height={100} width={100} alt="dp" />
        <div className="mt-2 text-center w-fit">
          <h2 className="leading-5">
            Aakaanksha 💕 <br /> [TheBraveCoders]
          </h2>
          <p className="text-[#939393] text-[14px]">LEVEL 16</p>
        </div>
      </div>

      <div className="mr-4">
        {score ? (
          <div className="text-accent font-bold text-[28px]">{score}</div>
        ) : (
          <Image src="/vs.jpg" height={52} width={52} alt="vs" />
        )}
      </div>

      <div>
        <Image src="/solo.jpg" height={100} width={100} alt="dp" />
        <div className="mt-2 text-center w-fit mx-auto">
          <h2 className="leading-5">SoloLearn</h2>
          <p className="text-[#939393] text-[14px]">LEVEL 22</p>
        </div>
      </div>
    </div>
  );
};

export default VSComponent;
