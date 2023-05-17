import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../Pages/Cart/Cart';
import Category from '../Pages/Category/Category';
import CategorySub from '../Pages/CategorySub/CategorySub';
import Checkout from '../Pages/Checkout/Checkout';
import CompletePayment from '../Pages/CompletePayment/CompletePayment';
import { Home } from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import ItemProduct from '../Pages/Profile/ItemProduct';
import Member from '../Pages/Profile/Member';
import Coupon from '../Pages/Profile/Member/Coupon';
import Orders from '../Pages/Profile/Member/Orders';
import Profile from '../Pages/Profile/Member/Profile';
import PurchaseHistory from '../Pages/Profile/Member/PurchaseHistory';
import Addresses from '../Pages/Profile/Setting/Addresses';
import EditPassword from '../Pages/Profile/Setting/EditPassword';
import EditProfile from '../Pages/Profile/Setting/EditProfile';
import Unsubscribe from '../Pages/Profile/Setting/Unsubscribe';
import Wallet from '../Pages/Profile/Setting/Wallet';
import Register from '../Pages/Register/Register';
import Search from '../Pages/Search/Search';
import SPLEvent from '../Pages/SPLEvent/SPLEvent';
import StoreInventory from '../Pages/StoreInventory/StoreInventory';
import ValueBuy from '../Pages/ValueBuy/ValueBuy';
import Wishlist from '../Pages/Wishlist/Wishlist';
import ReviewNew from '../Pages/ReviewNew/ReviewNew';
import Review from '../Pages/Review/Review';
import { useBreakpointValue } from '@chakra-ui/react';
import MobileMember from '../Pages/Profile/MobileMember';
import Signature from '../Pages/Submenu/Signature/Signature';

import Scarves from '../Pages/Submenu/Scarves/Scarves';

const Routers = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Routes>
      {isDesktop ? (
        <Route exact path="/" element={<Home />} />
      ) : (
        <Route exact path="/" element={<Category />} />
      )}
      <Route path="/:category" element={<Category />} />
      <Route path="/:category/:categorysub" element={<CategorySub />} />
      <Route path="/products/:category/:id" element={<ItemProduct />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registry" element={<Register />} />
      <Route path="/complete" element={<CompletePayment />} />
      <Route path="/search/:name" element={<Search />} />
      <Route path="/discounts" element={<ValueBuy />} />
      <Route path="/spl/:name" element={<SPLEvent />} />
      <Route path="/store inventory" element={<StoreInventory />} />
      <Route path="/products/:id/review/new" element={<ReviewNew />} />
      <Route path="/products/:id/review" element={<Review />} />
      <Route path="/s/:page" element={<Signature />} />
      <Route path="/s/scarves" element={<Scarves />} />
      {isDesktop ? (
        <Route path="/member" element={<Member />}>
          <Route path="/member/details" element={<Profile />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="purchase/history" element={<PurchaseHistory />} />
          <Route path="orders" element={<Orders />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="edit/password" element={<EditPassword />} />
          <Route path="wallets" element={<Wallet />} />
          <Route path="unsubscribe" element={<Unsubscribe />} />
        </Route>
      ) : (
        <>
          <Route path="/member" element={<Member />} />
          <Route path="/member/:pages" element={<MobileMember />} />
          {/* <Route path="/member/details" element={<Profile />} />
          <Route path="/member/coupon" element={<Coupon />} />
          <Route
            path="/member/purchase/history"
            element={<PurchaseHistory />}
          />
          <Route path="/member/orders" element={<Orders />} />
          <Route path="/member/edit" element={<EditProfile />} />
          <Route path="/member/addresses" element={<Addresses />} />
          <Route path="/member/edit/password" element={<EditPassword />} />
          <Route path="/member/wallets" element={<Wallet />} />
          <Route path="/member/unsubscribe" element={<Unsubscribe />} />{' '} */}
        </>
      )}
    </Routes>
  );
};

export default Routers;
