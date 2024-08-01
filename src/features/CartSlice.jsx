import { createSlice } from "@reduxjs/toolkit";
import ClothesList from "../helpers/ClothesList";
import WomensCLothes from "../helpers/WomensCLothes";

const initialState = {
    productdetail: null,
    cart: [],
    items: ClothesList,
    items2: WomensCLothes,
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
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        },
    },
});

export const {
    addToCart,
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    quickshop,
} = CartSlice.actions;
export default CartSlice.reducer;
