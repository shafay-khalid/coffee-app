import React from "react";
import { BiCart } from "react-icons/bi";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const HamburgerMenu = ({ activeMenu, setActiveMenu }) => {
  const closeActiveMenu = () => {
    setActiveMenu(false);
  }

  return (
    <main
      className={`fixed h-screen w-[200px] top-0 right-0 bg-first-color-alt z-[99]
    transform transition-transform duration-500 ease-in-out
    ${activeMenu ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="menuDiv h-full w-full">
        <ul className="flex w-full h-full gap-10 items-center justify-center flex-col">
            <li className="text-3xl cursor-pointer hover:text-second-color" onClick={()=> setActiveMenu(false)}><IoClose /></li>
          <li className="hover:text-second-color">
            <NavLink onClick={()=> closeActiveMenu()} to="/">Home</NavLink>
          </li>
          <li className="hover:text-second-color">
            <NavLink onClick={()=> closeActiveMenu()} to="about">About</NavLink>
          </li>
          <li className="hover:text-second-color">
            <NavLink onClick={()=> closeActiveMenu()} to="steps">Steps</NavLink>
          </li>
          <li className="hover:text-second-color">
            <NavLink onClick={()=> closeActiveMenu()} to="shop">Shop</NavLink>
          </li>
          <li className="hover:text-second-color">
            <NavLink onClick={()=> closeActiveMenu()} to="testimonials">Testimonials</NavLink>
          </li>
          <li className="hover:text-second-color bg-white rounded-full text-xl text-black p-3 cursor-pointer">
            <NavLink onClick={()=> closeActiveMenu()} to="cart">
              <BiCart />
            </NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default HamburgerMenu;
