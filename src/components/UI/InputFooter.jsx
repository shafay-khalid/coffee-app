import React from 'react';
// h-[55px] w-[360px]
const InputFooter = () => {
  return (
    <input className='footer-input h-[4.5vw] w-[34vw] bg-transparent border-2 border-text-color-light outline-none rounded-4xl px-7 placeholder:text-text-color-light text-[1.2vw]' type="text" placeholder='Enter e-mail address' />
  );
};

export default InputFooter;