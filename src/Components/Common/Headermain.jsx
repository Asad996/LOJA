import { useState, useEffect } from 'react';
import Logo from '../../assets/loja-logo.png';

const HeaderMain = () => {


  return (
    <header
      className="justify-between items-center py-20 px-52 lg:flex hidden transition-transform duration-500" 
    >
      <span className='text-xl'>CONTACT US</span>
      <img className='h-[70px]' src={Logo} alt="" />
      <span className='text-xl'>LOGIN / REGISTER</span>
    </header>
  );
}

export default HeaderMain;
