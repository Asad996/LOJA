import React from 'react';

const FooterCard = () => {
    return (
        <div className='bg-[#cdc6c02a] rounded-3xl mt-14 xs-custom:p-9 xs:p-8 2xs-custom:p-6 p-4 flex flex-col justify-center xs-custom:items-center'>
            <h4 className='xs-custom:text-[22px] text-[18px] tracking-wide'>LOREM IPSUM SIT AMETERO IRSEO</h4>
            <p className='xs-custom:block hidden xs-custom:text-[18px] text-[15px] xs-custom:mt-4 xs:mt-3 mt-2 tracking-wider'>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Mauris sed nulla integer
            </p>
            <p className='xs-custom:hidden block xs-custom:text-[18px] text-[15px] xs-custom:mt-4 xs:mt-3 mt-2 tracking-wider'>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris sed nulla integer
            </p>
            <div className='flex gap-x-4'>
                <button className='xs-custom:text-[13px] xs:text-xs text-[10px] bg-white text-black xs-custom:px-6 xs-custom:py-4 xs:px-4 px-3 xs:py-3 py-3 rounded-3xl mt-5 font-semibold tracking-widest'>READ MORE</button>
                <button className='xs-custom:text-[13px] xs:text-xs text-[10px] bg-white text-black xs-custom:px-6 xs-custom:py-4 xs:px-4 px-3 xs:py-3 py-3 rounded-3xl mt-5 font-semibold tracking-widest'>SUBSCRIBE</button>
            </div>
        </div>
    );
}

export default FooterCard;
