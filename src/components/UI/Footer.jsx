import React from "react";
import Logo from "../UI/Logo";
import FooterForm from "./FooterForm";
import IconBox from "./IconBox";

const Footer = () => {
  return (
    <footer className="w-full h-[380px] px-28 pt-16 pb-10 flex items-center justify-center rounded-t-[70px] z-100 relative">
      <div className="container flex flex-col justify-between h-full">
        <div className="footer-box flex items-center justify-between w-full gap-5">
          <div className="footer-left flex flex-col gap-2">
            <Logo />
            <h3 className="font-pacifico">Sign up for our newsletter</h3>
          </div>
          <div className="footer-right">
            <FooterForm />
          </div>
        </div>
        <div className="footer-bottom flex flex-row items-center justify-center gap-8 text-xl">
          <IconBox />
        </div>
        <div className="copyright flex items-center justify-center text-text-color-light">
          <p>Copyright Shafay Khalid. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
