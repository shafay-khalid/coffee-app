import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="nav-left">
      <NavLink className="flex gap-1 items-center" to="/">
        <img className="z-99" src="/imgs/logo.svg" alt="logo" />
        <h5 style={{fontSize: '17px'}} className="font-pacifico z-99">Cofetto</h5>
      </NavLink>
    </div>
  );
};

export default Logo;
