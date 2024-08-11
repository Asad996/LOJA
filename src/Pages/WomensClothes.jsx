import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, quickshop } from '../features/CartSlice';
import ProductCard from '../Components/shared/ProductCard';
import CTA from '../Components/shared/CTA';
import SearchBar from '../Components/Common/SearchBar'; // Import the SearchBar component

const WomensClothes = () => {
    const womensClothes = useSelector((state) => state.cartslice.items2);
    const searchTerm = useSelector((state) => state.cartslice.searchTerm); // Get the search term from the state
    const dispatch = useDispatch();

    // Filter womensClothes based on the search term
    const filteredWomensClothes = womensClothes().filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className='2xl:px-36 xl-custom:px-32 xl:px-28 lg-custom:px-24 lg:px-20 px-16  z-10 sticky top-[118px] mt-20 '>
                <SearchBar /> {/* Add the search bar component */}
            </div>

            <div className='2xl:px-36 xl-custom:px-32 xl:px-28 lg-custom:px-24 lg:px-20 px-16'>
                <div className='py-28'>
                    <div className='grid lg-custom:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-24 gap-y-24'>
                        {filteredWomensClothes.map((p) => {
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
