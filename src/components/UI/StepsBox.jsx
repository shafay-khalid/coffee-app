import React from "react";
import NumberBox from "./NumberBox";

const StepsBox = ({ val, idx }) => {
  return (
    <main
      className={`step-${idx} steps-box flex flex-col z-1 ${
        idx == 1 && "flex-col-reverse"
      }`}
    >
      <NumberBox idx={idx} />
      <div className="circle-div bg-first-color-light h-50 w-50 flex items-center justify-center rounded-full p-3">
        <img src={`/imgs/${val.img}`} alt={val.img} />
      </div>
      <p className="w-55 my-7">{val.para}</p>
    </main>
  );
};

export default StepsBox;
