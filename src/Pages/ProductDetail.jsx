import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { addToCart} from "../features/CartSlice";

const ProductDetail = () => {
    const productDetail = useSelector((state) => state.cartslice.productdetail);

    const dispatch = useDispatch();
    const [mainImage, setMainImage] = useState('');



    useEffect(() => {
        if (productDetail && productDetail.url) {
            setMainImage(productDetail.url);
        }
    }, [productDetail]);

    if (!productDetail) {
        return <div>No product details available</div>;
    }

    return (
        <div className="flex flex-col md:flex-row p-4 m-6">
            {/* Left Side: Main Image and Thumbnails */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
                <div className="overflow-hidden w-2/3 h-2/3 mb-4 border border-gray-300">
                    <Zoom>
                        <img
                            src={mainImage}
                            alt="Main"
                            className="w-full h-auto"
                        />
                    </Zoom>
                </div>
                <div className="flex space-x-2">
                    <img
                        src={productDetail.url}
                        alt={productDetail.name}
                        className={`w-24 h-24 cursor-pointer border ${mainImage === productDetail.url ? 'border-yellow-500' : 'border-gray-300'}`}
                        onClick={() => setMainImage(productDetail.url)}
                    />
                    {productDetail.url2 && (
                        <img
                            src={productDetail.url2}
                            alt={productDetail.name}
                            className={`w-24 h-24 cursor-pointer border ${mainImage === productDetail.url2 ? 'border-yellow-500' : 'border-gray-300'}`}
                            onClick={() => setMainImage(productDetail.url2)}
                        />
                    )}
                </div>
            </div>

            {/* Right Side: Product Data */}
            <div className="w-full md:w-1/2">
                <h1 className="text-xl md:text-2xl font-bold">{productDetail.name}</h1>
                <p className="text-gray-600">(150 Reviews) | In Stock</p>
                <p className="text-2xl md:text-3xl font-semibold mt-4">${productDetail.price}</p>
                <p className="mt-2 text-gray-600">
                    This outfit features a printed lawn shirt with embroidered sleeves and a hem border, paired with printed lawn trousers adorned with an embroidered border. It includes a shirt and trouser set with accompanying accessories.
                </p>
                <div className="mt-4">
                    <span className="font-semibold">Colours: </span>
                    <span className="inline-block w-6 h-6 rounded-full bg-blue-500 ml-2 cursor-pointer"></span>
                    <span className="inline-block w-6 h-6 rounded-full bg-gray-500 ml-2 cursor-pointer"></span>
                </div>
                <div className="mt-4">
                    <span className="font-semibold">Size: </span>
                    <button className="border rounded px-2 py-1 mx-1">XS</button>
                    <button className="border rounded px-2 py-1 mx-1">S</button>
                    <button className="border rounded px-2 py-1 mx-1">M</button>
                    <button className="border rounded px-2 py-1 mx-1">L</button>
                    <button className="border rounded px-2 py-1 mx-1">XL</button>
                </div>
               
                <button 
                    onClick={() => dispatch(addToCart(productDetail))}
                    className=' mt-12 2xs-custom:mt-0 flex justify-center items-center border border-[rgb(182,142,116)] hover:bg-[rgb(182,142,116)] hover:text-white rounded-md px-6 py-[8px] shadow-[0px_0px_8px_rgba(0,0,0,0.2)]' 
                    type='button'>
                    <span className='text-xs tracking-widest me-2'>ADD TO CART</span>
                    <i className='fa-solid fa-shopping-cart text-xl'></i>
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
