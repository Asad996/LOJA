import React from 'react';
import Img1 from '../../assets/gallery/img1.jpg';
import Img2 from '../../assets/gallery/img2.webp';
import Img3 from '../../assets/gallery/img3.jpg';
import Img4 from '../../assets/gallery/img4.webp';
import Img5 from '../../assets/gallery/img5.jpg';
import Img6 from '../../assets/gallery/img6.webp';

const Gallery = () => {
    // total = 660px
    return (
        <div className="h-auto flex flex-col-reverse lg:flex-row pt-32 w-full">
            <div className="flex flex-col lg:w-[40%]">
                <div className="h-[350px] overflow-hidden">
                    <img className="h-[350px] transition-transform duration-300 ease-in-out transform hover:scale-110 w-full object-cover" src={Img1} alt="Gallery Image 1" />
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className="overflow-hidden h-[310px] w-full sm:w-1/2">
                        <img className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-[310px] w-full object-cover" src={Img2} alt="Gallery Image 2" />
                    </div>
                    <div className="overflow-hidden h-[310px] w-full sm:w-1/2">
                        <img className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-[310px] w-full object-cover" src={Img3} alt="Gallery Image 3" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:w-[60%]">
                <div className="flex flex-col sm:w-1/2 h-[660px]">
                    <div className="overflow-hidden h-[400px] w-full">
                        <img className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-[400px] w-full object-cover" src={Img4} alt="Gallery Image 4" />
                    </div>
                    <div className="overflow-hidden h-[260px] w-full">
                        <img className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-[260px] w-full object-cover" src={Img5} alt="Gallery Image 5" />
                    </div>
                </div>
                <div className="overflow-hidden h-[660px] sm:w-1/2">
                    <img className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-[660px] w-full object-cover" src={Img6} alt="Gallery Image 6" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;