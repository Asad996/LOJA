import React from 'react';
import Logo from '../../assets/loja-logo.png'
import FooterCard from './FooterCard';


const Footer = () => {
    return (
        <div className='bg-[#bc8e74] text-white 2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-16 lg:px-14 px-12 py-8 mt-28'>
            <div className='flex lg:flex-row flex-col justify-between'>
                <div className='lg:block flex md:flex-row flex-col gap-y-32 justify-between'>
                    <img className='md:h-20 md:w-40 w-36' src={Logo} alt="" />
                    <div>
                        <h3 className='lg:mt-20 xs:text-[22px] text-xl'>MENU</h3>
                        <div className='flex xs:gap-x-20 2xs-custom:gap-x-16 gap-x-12 border-t-2 xs:w-[300px] pt-7 mt-7 xs:text-[16.2px] text-sm'>
                            <div className='flex flex-col gap-y-3'>
                                <h4>HOME</h4>
                                <h4>ABOUT</h4>
                                <h4>CLOTHES</h4>
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <h4>ACCESSORIES</h4>
                                <h4>APPLIANCES</h4>
                                <h4>LOJA PRODUCTS</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex gap-x-3 lg:justify-end relative lg:bottom-0 lg:left-0 left-3 md:bottom-20 bottom-72'>
                        
                            <div className='bg-[#cdc6c0] rounded-[50%] lg:h-10 lg:w-10 md:h-9 md:w-9 w-8 h-8 flex justify-center items-center'>
                                <i className='fa-brands fa-instagram lg:text-[26px] md:text-[22px]'></i>
                            </div>
                        
                        
                            <div className='bg-[#cdc6c0] rounded-[50%] lg:h-10 lg:w-10 md:h-9 md:w-9 w-8 h-8 flex justify-center items-center'>
                                <i className='fa-brands fa-square-facebook lg:text-[26px] md:text-[22px]'></i>
                            </div>
                        
                        
                            <div className='bg-[#cdc6c0] rounded-[50%] lg:h-10 lg:w-10 md:h-9 md:w-9 w-8 h-8 flex justify-center items-center'>
                                <i className='fa-brands fa-linkedin-in lg:text-[26px] md:text-[22px]'></i>
                            </div>
                        
                    </div>
                    <FooterCard />
                </div>
            </div>
            <div className='mt-20 border-t pt-6'>
                <p className='tracking-[0.6px]'>&copy; All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;