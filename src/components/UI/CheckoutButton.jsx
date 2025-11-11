import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const CheckoutButton = ({color, text, icon, totalPrice}) => {

  return (
    <NavLink to={text == 'Checkout' ? `/checkout/${totalPrice}` : '/shop'} className='w-full'>
    <button className={`checkout-button ${color} h-12 w-full text-white rounded-3xl cursor-pointer text-sm font-medium flex items-center justify-center flex-row ${text == 'Checkout' ? 'flex-row-reverse' : ''}`}>
       {icon}{text} 
    </button>
    </NavLink>
  );
};

export default CheckoutButton;