import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/loja-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="sticky top-14 lg:flex hidden justify-center gap-14 border-y-2 border-black py-3 tracking-wider bg-white z-40">
        <Link to="/"><p>HOME</p></Link>
        <Link to="clothes"><p>CLOTHES</p></Link>
        <p>ACCESSORIES</p>
        <p>LOJA PRODUCTS</p>
        <p>ABOUT US</p>
      </nav>
      <nav className="lg:hidden block sticky top-14 z-40 bg-white">
        <div className="lg:hidden flex justify-between px-4 items-center border-b-2 border-black py-3 tracking-wider">
          <div className="flex xs:justify-normal justify-between xs:w-fit w-full gap-4 items-center">
            <i className="fa-solid fa-bars text-3xl" onClick={handleShow}></i>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="text-2xl font-semibold">LOJA</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="ms-6 grid sm:grid-cols-2 gap-x-16 gap-y-8 text-2xl font-semibold">
                <Link to="/"><p>HOME</p></Link>
                <Link to="clothes"><p>CLOTHES</p></Link>
                <p>ACCESSORIES</p>
                <p>LOJA PRODUCTS</p>
                <p>ABOUT US</p>
                <p>CONTACT US</p>
                <p>LOGIN/REGISTER</p>
              </Offcanvas.Body>
            </Offcanvas>
            <img
              className="md:h-[60px] sm:h-[55px] h-[50px]"
              src={Logo}
              alt=""
            />
            <span className="text-xl">LOGIN/REGISTER</span>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
