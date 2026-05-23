import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";

import Cart from "../pages/checkout/Cart";
import Checkout from "../pages/checkout/Checkout";
import Payment from "../pages/checkout/Payment";
import Success from "../pages/checkout/Success";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import ProductDetails from "../pages/shop/ProductDetails";
import Shop from "../pages/shop/Shop";
import Wishlist from "../pages/shop/Wishlist";
import Categories from "../pages/shop/Categories";
import SearchResults from "../pages/shop/SearchResults";
import Profile from "../pages/user/Profile";
import Orders from "../pages/user/Orders";
import Addresses from "../pages/user/Addresses";
import Settings from "../pages/user/Settings";
import Notifications from "../pages/user/Notifications";
import Unauthorized from "../pages/errors/Unauthorized";
import NotFound from "../pages/errors/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SHOP} element={<Shop />} />
      <Route path={ROUTES.PRODUCT} element={<ProductDetails />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
      <Route path={ROUTES.PAYMENT} element={<Payment />} />
      <Route path={ROUTES.SUCCESS} element={<Success />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={ROUTES.WISHLIST} element={<Wishlist />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.ORDERS} element={<Orders />} />
      <Route path={ROUTES.ADDRESSES} element={<Addresses />} />
      <Route path={ROUTES.SETTINGS} element={<Settings />} />
      <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />} />
      <Route path={ROUTES.CATEGORIES} element={<Categories />} />
      <Route path={ROUTES.SEARCH} element={<SearchResults />} />
      <Route path={ROUTES.UNAUTHORIZED} element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
