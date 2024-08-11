import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ name, price, bgimgUrl, hoverImgUrl, onAddToCart,onquickshop }) => {
    return (
        <div className="group relative transition-transform transform hover:scale-105 hover:shadow-2xl hover:p-2 border-gray-100 hover:border">
            <div 
                className='relative bg-[#d3d3d3] bg-center lg-custom:h-[400px] h-[450px] rounded-sm transition-background transition-border border border-transparent group-hover:border-yellow-500' 
                style={{ 
                    backgroundImage: `url(${bgimgUrl})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover' 
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundImage = `url(${hoverImgUrl})`}
                onMouseLeave={(e) => e.currentTarget.style.backgroundImage = `url(${bgimgUrl})`}
            >
              <Link to="/productdetail">  <button 
                onClick={onquickshop}
                    className='absolute bottom-0 left-0  right-0 w-full bg-[rgba(182,142,116,0.52)] text-black text-sm py-2 hover:bg-[rgba(182,142,116,0.67)]'
                    type='button'>
                     Quick Shop
                </button></Link>
            </div>
            <div className='flex justify-between mt-5 items-center'>
                <div className='2xs-custom:block'>
                    <p className='text-sm 2xs-custom:me-0 me-5'>{name}</p>
                    <p className='font-semibold text-sm text-[#2b2b2b]'>{price}$</p>
                </div>
                <button 
                    onClick={onAddToCart}

                    className='2xs-custom:mt-0 flex justify-center items-center border border-[rgb(182,142,116)] hover:bg-[rgb(182,142,116)] hover:text-white rounded-md px-3 py-[5px] shadow-[0px_0px_8px_rgba(0,0,0,0.2)]' 
                    type='button'>
                    <span className='text-[8.5px] tracking-widest me-2'>ADD TO CART</span>
                    <i className='fa-solid fa-shopping-cart text-sm'></i>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
