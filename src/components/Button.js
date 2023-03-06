import React from "react";

const Button = ({ text, color }) => {
  return (
    <div
      className={`uppercase ${color} inline-block py-2 px-[48px] rounded-[3px]`}
    >
      {text}
    </div>
  );
};

export default Button;
