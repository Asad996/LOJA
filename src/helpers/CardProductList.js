// CLOTHES IMAGES
import Clothes1 from '../assets/clothes/img1.jpg'
import Clothes2 from '../assets/clothes/img2.jpg'
import Clothes3 from '../assets/clothes/img3.jpg'

// ACCESSORIES IMAGES
import Accessories1 from '../assets/accessories/img1.webp'
import Accessories2 from '../assets/accessories/img2.jpg'
import Accessories3 from '../assets/accessories/img3.jpg'

// APPLIANCES IMAGES
// import LojaProduct1 from '../assets/appliances/img1.webp'
// import LojaProduct2 from '../assets/appliances/img2.webp'
// import LojaProduct3 from '../assets/appliances/img3.webp'

const CardProductList = () => {
    return (
        [
            // CLOTHES
            {
                id: 1,
                url: Clothes1,
                category: 'clothing'
            },
            {
                id: 2,
                url: Clothes2,
                category: 'clothing'
            },
            {
                id: 3,
                url: Clothes3,
                category: 'clothing'
            },
            {
                id: 4,
                category: 'clothing'
            },

            // ACCESSORIES
            {
                id: 5,
                url: Accessories1,
                category: 'accessories'
            },
            {
                id: 6,
                url: Accessories2,
                category: 'accessories'
            },
            {
                id: 7,
                url: Accessories3,
                category: 'accessories'
            },
            {
                id: 8,
                category: 'accessories'
            },

            // Loja Products
            {
                id: 9,
                url: '',
                category: 'lojaProducts'
            },
            {
                id: 10,
                url: '',
                category: 'lojaProducts'
            },
            {
                id: 11,
                url: '',
                category: 'lojaProducts'
            },
            {
                id: 12,
                category: 'lojaProducts'
            },
        ]
    )
}

export default CardProductList;
