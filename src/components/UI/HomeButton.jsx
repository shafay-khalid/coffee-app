import React from "react";
import { NavLink } from "react-router-dom";

const HomeButton = ({color, path}) => {
  return (
    <NavLink
      to={path}
      className="w-1/2 mt-5"
    >
      <button
        className={`checkout-button ${color} h-12 w-full text-white rounded-3xl cursor-pointer text-sm font-medium flex items-center justify-center flex-row`}
      >Go Back
      </button>
    </NavLink>
  );
};

export default HomeButton;
