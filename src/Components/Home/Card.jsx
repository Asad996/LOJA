import React from 'react';

const Card = ({ url, imageExhausted }) => {
    return (
        <>
            {imageExhausted ? (
                <div className="w-full h-52 bg-black rounded-3xl shadow-lg flex justify-center items-center">
                    <p className='text-white text-lg'>No more images in this category</p>
                </div>
            ) : (
                <div className="w-full h-52 rounded-3xl border border-[rgb(199,199,199)] overflow-hidden shadow-md">
                    <img
                        onDragStart={(e) => e.preventDefault()}
                        src={url}
                        className="w-full transition-transform duration-1000 ease-in-out transform hover:scale-125 h-full object-cover bg-[rgb(25,25,25)]"
                    />
                </div>
            )}
        </>
    );
};

export default Card;
