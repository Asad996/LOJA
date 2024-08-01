import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

const OffcanvasCart = ({ handleClose }) => {
  const cart = useSelector((state) => state.cartslice.cart); // Ensure the correct path to cart items in the state

  return (
    <>
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <img
                  src={item.url} // Assuming each item has an image property
                  alt={item.name}  // Assuming each item has a name property
                  className="size-16 rounded object-cover"
                />
                <div>
                  <h3 className="text-sm text-gray-900">{item.name}</h3>
                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Price:</dt>
                      <dd className="inline">{item.price}</dd> {/* Assuming size property */}
                    </div>
                    
                  </dl>
                </div>
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
            className="block  mt-12 2xs-custom:mt-0 flex justify-center items-center border border-[rgb(182,142,116)] hover:bg-[rgb(182,142,116)] hover:text-white rounded-md px-6 py-[8px] shadow-[0px_0px_8px_rgba(0,0,0,0.2)]"
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
