import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import VSComponent from "./VSComponent";

const VS = () => {
  return (
    <div className="mt-20 min-h-[calc(100vh-140px)] relative">
      <VSComponent />

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
