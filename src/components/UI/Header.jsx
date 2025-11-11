import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { BiCart } from "react-icons/bi";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMenuSharp } from "react-icons/io5";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`fixed top-0 left-0 w-full h-[88px] bg-first-color font-pacifico
  flex items-center flex-col justify-center transition-transform duration-300
  ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="flex items-center justify-between flex-row w-10/12">
        <Logo />
        <div className="nav-right z-99">
          <ul className="flex gap-10 items-center">
            <li className="hover:text-second-color">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-second-color">
              <NavLink to="about">About</NavLink>
            </li>
            <li className="hover:text-second-color">
              <NavLink to="steps">Steps</NavLink>
            </li>
            <li className="hover:text-second-color">
              <NavLink to="shop">Shop</NavLink>
            </li>
            <li className="hover:text-second-color">
              <NavLink to="testimonials">Testimonials</NavLink>
            </li>
            <NavLink to="cart">
              <li className="hover:text-second-color bg-white rounded-full text-black p-2 cursor-pointer">
                <BiCart />
              </li>
            </NavLink>
            <li
              onClick={() => {
                setActiveMenu(true);
              }}
              className="hamburger-menu hover:text-second-color hidden bg-white rounded-full text-black p-2 cursor-pointer"
            >
              <IoMenuSharp />
            </li>
          </ul>
        </div>
      </nav>
      <img
        className="top-[26px] relative z-99"
        src="/imgs/Header-Line-dashed.svg"
        alt=""
      />
      <HamburgerMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </header>
  );
};

export default Header;
