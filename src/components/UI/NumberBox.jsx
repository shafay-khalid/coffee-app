import React from "react";

const NumberBox = ({ idx }) => {
  console.log(idx);
  return (
    <div className="number-container bg-first-color h-20 w-20 rounded-full flex items-center justify-center -mt-7 absolute">
      <div className="number-box bg-second-color h-15 w-15 rounded-full flex items-center justify-center">
        <h4 className="text-first-color font-semibold">{`0${idx + 1}`}</h4>
      </div>
    </div>
  );
};

// <div className="number-container bg-second-color border-10 border-first-color rounded-full px-[15px] py-2">
//   <h4 className="text-first-color font-semibold">01</h4>
// </div>

export default NumberBox;
