import React from 'react';
import SellerAccounts from '../../assets/seller.png'

const Seller = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='sm-custom:text-[45px] sm:text-[42px] xs-custom:text-[35px] xs:text-[30px] text-[25.5px] text-center'>SELLER ACCOUNTS</h2>
            {/* <p></p> */}
            <img className='object-cover sm-custom:h-[700px] sm:h-[700px] xs-custom:h-[620px] xs:h-[540px] 2xs-custom:h-[440px] h-[380px]' src={SellerAccounts} alt="" />
            <button className='bg-[rgb(188,142,116)] px-6 py-3 text-lg relative bottom-8 text-white rounded-lg'>Become a Seller</button>
        </div>
    );
}

export default Seller;
