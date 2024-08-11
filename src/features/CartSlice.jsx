import { createSlice } from "@reduxjs/toolkit";
import ClothesList from "../helpers/ClothesList";
import WomensCLothes from "../helpers/WomensCLothes";
import toast from 'react-hot-toast';

const loadCartFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
        console.error("Could not load cart from localStorage", e);
        return [];
    }
};

const initialState = {
    productdetail: null,
    cart: loadCartFromLocalStorage(),
    items: ClothesList,
    items2: WomensCLothes,
    searchTerm: '', // Add search term to the state
    totalQuantity: 0,
    totalPrice: 0,
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (findIndex >= 0) {
                state.cart[findIndex].quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            saveCartToLocalStorage(state.cart);
            toast.success(`${action.payload.name} added to cart!`);
        },

        removeItem: (state, action) => {
            const itemToRemove = state.cart.find((item) => item.id === action.payload);
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            saveCartToLocalStorage(state.cart);
            if (itemToRemove) {
                toast.error(`${itemToRemove.name} removed from cart!`);
            }
        },

        quickshop: (state, action) => {
            state.productdetail = { ...action.payload, quantity: action.payload.quantity || 1 };
        },

        getCartTotal: (state) => {
            const { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            saveCartToLocalStorage(state.cart);
        },

        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            saveCartToLocalStorage(state.cart);
        },

        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

const saveCartToLocalStorage = (cart) => {
    try {
        const serializedState = JSON.stringify(cart);
        localStorage.setItem('cart', serializedState);
    } catch (e) {
        console.error("Could not save cart to localStorage", e);
    }
};

export const {
    addToCart,
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    quickshop,
    setSearchTerm, // Export the setSearchTerm action
} = CartSlice.actions;

export default CartSlice.reducer;
