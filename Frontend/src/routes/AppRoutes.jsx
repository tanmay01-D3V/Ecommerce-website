import { Route, Routes } from "react-router-dom";

import NetworkCTA from "../components/common/NetworkCTA";
import FeaturedCollections from "../components/product/FeaturedCollections";
import RelatedProducts from "../components/product/RelatedProducts";
import Cart from "../pages/checkout/Cart";
import Home from "../pages/home/Home";
import ProductDetails from "../pages/shop/ProductDetails";
import Shop from "../pages/shop/Shop";
import NotFound from "../pages/errors/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/collections" element={<FeaturedCollections />} />
      <Route path="/new-arrivals" element={<RelatedProducts />} />
      <Route path="/network" element={<NetworkCTA />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
