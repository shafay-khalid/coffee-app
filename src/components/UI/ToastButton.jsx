import React from "react";

const ToastButton = ({showToast}) => {
  return (
    <button
      id="liveToastBtn"
      onClick={showToast}
      className="bg-first-color-alt py-2 px-5 rounded-[20px] text-white-color cursor-pointer"
    >
      Add to cart
    </button>
  );
};

export default ToastButton;
