import React from 'react';
import SmCTA from './SmCTA';

const CategoryCard = ({ name, bgImgUrl }) => {
    return (
        <div className='bg-[#d3d3d3] rounded-sm bg-center bg-cover h-[250px] pb-6 md-custom:px-6 md:px-4 px-6 flex flex-col justify-end' style={{ backgroundImage: `url(${bgImgUrl})` }}>
            <h2 className='mb-5 [text-shadow:_0.5px_1px_0_rgb(0_0_0_/_60%)] md-custom:text-2xl text-[21px] text-white w-[40%] tracking-[1.5px]'>{name}</h2>
            <SmCTA title="LEARN MORE" />
        </div>
    );
}

export default CategoryCard;
