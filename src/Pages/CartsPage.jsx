import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from "../features/CartSlice";

const CartsPage = () => {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cartslice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch, cart]);

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                    </header>

                    <div className="mt-8">
                        <ul className="space-y-4">
                            {cart.map((item) => (
                                <li key={item.id} className="flex items-center gap-4">
                                    <img
                                        src={item.url} // Adjust according to your data structure
                                        alt={item.name}  // Adjust according to your data structure
                                        className="size-52 rounded object-cover"
                                    />

                                    <div>
                                        <h3 className="text-xl font-medium text-gray-900">{item.name}</h3>
                                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                            <div>
                                                <dt className="inline text-lg">Price:</dt>
                                                <dd className="inline text-lg">{item.price}</dd> {/* Adjust according to your data structure */}
                                            </div>

                                        </dl>
                                    </div>

                                    <div className="flex flex-1 items-center justify-end gap-2 ">
                                        <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l"
                                            onClick={() =>
                                                dispatch(decreaseItemQuantity(item.id))
                                            }>
                                            -
                                        </button>
                                        <div className="form-outline">
                                            <input
                                                type="number"
                                                id="form1"
                                                min="0"
                                                name="quantity"
                                                value={item.quantity}
                                                className="form-control w-10 p-2 border-none outline-none"
                                            />
                                        </div>
                                        <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r" onClick={() =>
                                            dispatch(increaseItemQuantity(item.id))
                                        }>
                                            +
                                        </button>

                                        <button className="text-gray-600 transition hover:text-red-600" onClick={() => dispatch(removeItem(item.id))}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-8 w-8"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            ))
                            }
                        </ul>

                        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                            <div className="w-screen max-w-lg space-y-4">
                                <dl className="space-y-0.5 text-sm text-gray-700">
                                    <div className="flex justify-between">
                                        <dt>Total items</dt>
                                        <dd>{totalQuantity}</dd> {/* Dynamically render subtotal */}
                                    </div>

                                    <div className="flex justify-between">
                                        <dt>Total Price</dt>
                                        <dd>£{totalPrice}</dd> {/* Example VAT calculation */}
                                    </div>


                                </dl>



                                <div className="flex justify-end">
                                    <a
                                        href="#"
                                        className=" mt-12 2xs-custom:mt-0 flex justify-center items-center border border-[rgb(182,142,116)] hover:bg-[rgb(182,142,116)] hover:text-white rounded-md px-6 py-[8px] shadow-[0px_0px_8px_rgba(0,0,0,0.2)]"
                                    >
                                        Checkout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartsPage;
