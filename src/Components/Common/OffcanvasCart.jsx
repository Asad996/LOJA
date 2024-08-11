import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import { removeItem } from "../../features/CartSlice";

const OffcanvasCart = ({ handleClose }) => {
  const cart = useSelector((state) => state.cartslice.cart); // Ensure the correct path to cart items in the state
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index} className="flex items-center gap-4  ">
                <img
                  src={item.url} // Assuming each item has an image property
                  alt={item.name}  // Assuming each item has a name property
                  className="size-16 rounded object-cover overflow-hidden"
                />
                <div>
                  <h3 className="text-sm text-gray-900">{item.name}</h3>
                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Price:</dt>
                      <dd className="inline">{item.price}</dd> {/* Assuming size property */}
                    </div>
                    <div>
                      <dt className="inline">Item:</dt>
                      <dd className="inline">  {item.quantity}</dd> {/* Assuming size property */}
                    </div>

                  </dl>
                </div>
                <button className="text-gray-600 transition hover:text-red-600" onClick={() => dispatch(removeItem(item.id))}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </li>
            ))
          ) : (
            <li className="text-center">Your cart is empty.</li>
          )}
        </ul>
        <div className="space-y-4 text-center">
          <Link to="/cart">
            <a
              href="#"
              onClick={handleClose}
              className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-[rgb(182,142,116)]"
            >
              View my cart ({cart.length})
            </a>
          </Link>
          <a
            href="#"
            onClick={handleClose}
            className="  mt-12 2xs-custom:mt-0 flex justify-center items-center border border-[rgb(182,142,116)] hover:bg-[rgb(182,142,116)] hover:text-white rounded-md px-6 py-[8px] shadow-[0px_0px_8px_rgba(0,0,0,0.2)]"
          >
            Checkout
          </a>
          <a
            href="#"
            onClick={handleClose}
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </>
  );
}

export default OffcanvasCart;
