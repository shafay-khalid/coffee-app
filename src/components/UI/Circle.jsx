import React from "react";

const Circle = ({ top, right }) => {
  return (
    <div
      className={`small-circle bg-first-color h-[350px] w-[350px] absolute rounded-full z-1 ${top} ${right}`}
    ></div>
  );
};

export default Circle;
