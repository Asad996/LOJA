import React from 'react';
import CoverImage from '../Components/shared/CoverImage';
import ProductCard from '../Components/shared/ProductCard';
import CTA from '../Components/shared/CTA';
import CategoryCard from '../Components/shared/CategoryCard';
import ClothesBgImage from '../assets/coverImages/clothes-cover.jpg';
import ClothesCatImg1 from '../assets/clothes/women/orange-white-shalwar.jpg';
import ClothesCatImg2 from '../assets/clothes/men/gray-kameez.jpg';
import ClothesCatImg3 from '../assets/accessories/img1.webp';

import { addToCart,quickshop } from '../features/CartSlice';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Clothes = () => {
    const clothesList = useSelector((state) => state.cartslice.items);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='mt-14'>
                <CoverImage bgImgUrl={ClothesBgImage} title="SHOP NOW" margin="0px 0px 30px 0px" />
            </div>
            <div className='2xl:px-16 xl-custom:px-14 md:px-10 px-12'>
                <div className='grid md:grid-cols-3 sm-custom:grid-cols-2 grid-cols-1 mt-28 gap-16'>
                  <Link to="/womensclothes"> <CategoryCard bgImgUrl={ClothesCatImg1} name="WOMEN'S CLOTHES" /></Link> 
                <CategoryCard bgImgUrl={ClothesCatImg2} name="MEN'S CLOTHES" />
                    <CategoryCard bgImgUrl={ClothesCatImg3} name="ACCESSORIES" />
                </div>
            </div>
            <div className='2xl:px-36 xl-custom:px-32 xl:px-28 lg-custom:px-24 lg:px-20 px-16'>
                <div className='py-28'>
                    <div className='grid lg-custom:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-24 gap-y-24'>
                        {clothesList().map((p) => {
                            return (
                                <ProductCard 
                                    key={p.id} 
                                    name={p.name} 
                                    price={p.price} 
                                    bgimgUrl={p.url} 
                                    hoverImgUrl={p.url2}
                                    onAddToCart={() => dispatch(addToCart(p))} 
                                    onquickshop={() => dispatch(quickshop(p))} 

                                />
                            );
                        })}
                    </div>
                    <div className='w-full flex justify-center mt-14'>
                        <CTA title="SHOW MORE" />
                    </div>
                </div>
            </div>
           
            <CoverImage isCTA={false} />
          
        </div>
    );
}

export default Clothes;
