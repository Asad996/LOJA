import React from 'react';
import CategoryCircle from './CategoryBox';
import Logo from '../../assets/loja-logo.png'

const Categories = () => {
    return (
        <div className='py-32'>
            <h2 className='sm-custom:text-[45px] sm:text-[42px] xs-custom:text-[35px] xs:text-[30px] text-[25.5px] text-center'>CATEGORIES</h2>
            <div className='grid lg:grid-cols-5 place-items-center grid-cols-2 mt-6'>
                <CategoryCircle categoryName='Home' iconName='fa-solid fa-house'></CategoryCircle>
                <CategoryCircle categoryName='Clothing' iconName='fa-solid fa-tshirt'></CategoryCircle>
                <CategoryCircle categoryName='Loja Products' imgUrl={Logo}></CategoryCircle>
                <CategoryCircle categoryName='Appliances' iconName='fa-solid fa-tv'></CategoryCircle>
                <CategoryCircle categoryName='Accessories' iconName='fa-solid fa-bag-shopping'></CategoryCircle>
            </div>
        </div>
    );
}

export default Categories;
