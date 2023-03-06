import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const VS = () => {
  return (
    <div className="mt-20 h-[calc(100vh-140px)] relative">
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
          <Image src="/vs.jpg" height={52} width={52} alt="vs" />
        </div>

        <div>
          <Image src="/solo.jpg" height={100} width={100} alt="dp" />
          <div className="mt-2 text-center w-fit mx-auto">
            <h2 className="leading-5">SoloLearn</h2>
            <p className="text-[#939393] text-[14px]">LEVEL 22</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="w-fit mx-auto text-center text-lime flex flex-col">
          <h3 className="uppercase font-medium">Winner Gets</h3>
          <button className="uppercase font-medium border-[2px] border-lime rounded-[4px] py-[2px]">
            32 xp
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 border-t border-[#404040] w-[100%] py-2">
        <div className="flex gap-4 px-[15px]">
          <Button text="Decline" color="bg-[#ee534f]" />
          <Link href="/challenge">
            <Button text="Accept" color="bg-lime" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VS;
