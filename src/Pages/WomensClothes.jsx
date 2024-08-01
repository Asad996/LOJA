import React from 'react';
import womensClothes from '../helpers/WomensCLothes';


import { addToCart,quickshop } from '../features/CartSlice';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../Components/shared/ProductCard';
import CTA from '../Components/shared/CTA';
const WomensClothes = () => {
  const womensClothes = useSelector((state) => state.cartslice.items2);
  const dispatch = useDispatch();
  return (
    <>

    <div className='2xl:px-36 xl-custom:px-32 xl:px-28 lg-custom:px-24 lg:px-20 px-16'>
                <div className='py-28'>
                    <div className='grid lg-custom:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-24 gap-y-24'>
                   {womensClothes().map((p) => {
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




      </>


  );
};

export default WomensClothes;
