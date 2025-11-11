import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const IconBox = () => {
  return <>
    <a className="social-links" target="_blank" href="https://www.linkedin.com/in/shafay-khalid-571a182b1/"><FaLinkedin /></a>
    <a className="social-links" target="_blank" href="https://github.com/shafay-khalid"><FaGithub /></a>
    <a className="social-links" target="_blank" href=""><AiFillInstagram /></a>
  </>
};

export default IconBox;
