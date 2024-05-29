import React from "react";

const Button = ({ text, bgColor, textColor }) => {
  return (
    <button
      className={`${bgColor} ${textColor} relative z-10 cursor-pointer
      rounded-full px-8 py-2 duration-300 hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default Button;
