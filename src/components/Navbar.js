import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-accent flex gap-4 p-4 items-center">
      <AiOutlineArrowLeft className="text-[26px]" />
      <h2 className="font-medium shadow-2xl">HTML Challenge</h2>
    </div>
  );
};

export default Navbar;
