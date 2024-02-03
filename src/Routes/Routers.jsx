import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Client/Pages/Home/Home";
import About from "../Client/Pages/About/About";
import Checkout from "../Client/Pages/Checkout/Checkout";
import Contact from "../Client/Pages/Contact/Contact";
import ShoppingCart from "../Client/Pages/ShoppingCart/ShoppingCart";
import Wishlist from "../Client/Pages/Wishlist/Wishlist";
import SingleProduct from "../Client/Pages/SingleProduct/SingleProduct";
import Products from "../Client/Pages/Products/Products";
import PageNotFound from "../Client/Pages/404/PageNotFound";
import Privacy from "../Client/Pages/Privacy/Privacy";
import Terms from "../Client/Pages/Terms/Terms";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="products/:id" element={<Products />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="terms-of-use" element={<Terms />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Routers;
