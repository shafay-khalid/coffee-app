import React, { useEffect, useState } from "react";
import { MdOutlineDone } from "react-icons/md";

const ToastMessage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if(!visible) return null;

  return (
    <>
      <div className="Toast-Message flex items-center justify-center rounded-4xl bg-first-color-alt text-white px-5 py-4 fixed top-[120px] right-[20px]">
        <div className="msg flex items-center gap-5">
          <div className="left bg-green-500 text-first-color-alt p-1 rounded-full font-bold">
            <MdOutlineDone />
          </div>
          <div className="right text-white font-semibold">
            <p>Added to cart successfully!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToastMessage;
