import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ButtonFooter = () => {
  return (
    <>
    <button className='footer-button glow-btn flex cursor-pointer items-center justify-center gap-2 h-[4.5vw] w-[34vw] bg-second-color text-black font-semibold border-none outline-none rounded-4xl px-7 text-[1.2vw]'>Subscribe <IoIosArrowForward className='font-bold text-[1.3vw]' /></button>
    </>
  );
};

export default ButtonFooter;