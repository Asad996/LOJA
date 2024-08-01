import { Outlet } from "react-router-dom"
import Header from "../Components/Common/Header"
import HeaderMain from "../Components/Common/Headermain"
import Navbar from "../Components/Common/Navbar"
import Footer from "../Components/Common/Footer"


const Layout = () => {
  return (
    <div>
      <Header/>
      <HeaderMain/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
