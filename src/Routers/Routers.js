import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../Pages/Cart/Cart';
import Category from '../Pages/Category/Category';
import CategorySub from '../Pages/CategorySub/CategorySub';
import Checkout from '../Pages/Checkout/Checkout';
import CompletePayment from '../Pages/CompletePayment/CompletePayment';
import { Home } from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import ItemProduct from '../Pages/Profile/ItemProduct';
import Register from '../Pages/Register/Register';
import Wishlist from '../Pages/Wishlist/Wishlist';

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/:category/:categorysub" element={<CategorySub />} />
      <Route path="/products/:category/:id" element={<ItemProduct />} />
      <Route path="/member/details" element={<ItemProduct />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registry" element={<Register />} />
      <Route path="/complete" element={<CompletePayment />} />
    </Routes>
  );
};

export default Routers;
