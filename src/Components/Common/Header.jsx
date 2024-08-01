import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../../features/CartSlice';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffcanvasCart from './OffcanvasCart'; // Import your OffcanvasCart component

function Header() {
  const [selectedCountry, setSelectedCountry] = useState("PAKISTAN");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const { cart, totalQuantity } = useSelector((state) => state.cartslice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-[#bc8e74] py-3 lg:px-16 md-custom:px-14 md:px-12 sm-custom:px-10 sm:px-8 px-6">
      <div className="text-white tracking-widest md:text-[19px] sm:text-[17px] xs:text-[15px] text-[14px] flex items-center">
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="bg-[#bc8e74] border-none text-white me-4 cursor-pointer focus:outline-none"
        >
          <option value="PAKISTAN">PAKISTAN</option>
          <option value="INDIA">INDIA</option>
          <option value="USA">USA</option>
          <option value="CANADA">CANADA</option>
          <option value="UK">UK</option>
          {/* Add more countries as needed */}
        </select>
        <span>FREE DELIVERY</span>
      </div>
      <div className="text-white flex sm:gap-x-8 xs:gap-x-6 gap-x-4 md:text-[25px] sm-custom:text-[23px] sm:text-[22px] xs-custom:text-[20px] xs:text-[19px] text-[17px]">
        <button
          onClick={handleShowOffcanvas}
          className="flex items-center text-white text-xl bg-transparent border-none focus:outline-none"
        >
          <i className="bi bi-cart2"></i>({totalQuantity})
        </button>
      </div>

      {/* Offcanvas Menu */}
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-2xl font-semibold">Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <OffcanvasCart handleClose={handleCloseOffcanvas} />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Header;
