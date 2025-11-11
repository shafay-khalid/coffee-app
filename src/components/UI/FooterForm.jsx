import React from 'react';
import InputFooter from './InputFooter';
import ButtonFooter from './ButtonFooter';
import { NavLink } from 'react-router-dom';

const FooterForm = () => {
  return (
    <div className='flex items-center flex-col gap-5'>
    <InputFooter />
    <ButtonFooter />
    <p>We care about your data. Read our <NavLink to={'/privacy policy'} className='text-second-color'>Privacy Policy</NavLink></p>
    </div>
  );
};

export default FooterForm;