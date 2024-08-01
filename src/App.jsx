import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Clothes from "./Pages/Clothes";

import CartsPage from "./Pages/CartsPage";
import WomensClothes from "./Pages/WomensClothes";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/clothes" element={<Clothes/>} />
            <Route path="/cart" element={<CartsPage/>} />
            <Route path="/womensclothes" element={<WomensClothes/>} />
            <Route path="/productdetail" element={<ProductDetail/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
