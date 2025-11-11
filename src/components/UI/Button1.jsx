import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Button1 = ({ bgY, animateIt, animation }) => {
  return (
    <NavLink to={bgY ? "/shop" : "/about"} className="w-45">
      <div
        className={`glow-btn2 cursor-pointer ${
          (animateIt && animation) > 400 ? `animate-productMove` : ""
        } ${
          bgY ? "text-black" : "text-white"
        } w-full flex items-center px-7 py-3 ${
          bgY ? "bg-second-color" : "bg-first-color-alt"
        } rounded-3xl gap-2 ${
          bgY
            ? "shadow-[0_0_12px_var(--color-second-color),0_0_1px_var(--color-second-color)]"
            : "shadow-[0_0_12px_var(--color-first-color-alt),0_0_1px_var(--color-first-color-alt)]"
        }
`}
      >
        <button className="cursor-pointer">
          {bgY ? "Get Started" : "Scroll Down"}
        </button>
        <MdKeyboardArrowDown className="text-xl" />
      </div>
    </NavLink>
  );
};

export default Button1;
