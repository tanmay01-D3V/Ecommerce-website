import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

import FeaturedCollections from "./Components/Home/FeaturedCollections";
import NewArrivals from "./Components/Home/NewArrivals";
import NetworkCTA from "./Components/Home/NetworkCTA";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/product" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/collections" element={<FeaturedCollections />} />

        <Route path="/new-arrivals" element={<NewArrivals />} />

        <Route path="/network" element={<NetworkCTA />} />
      </Routes>
  );
};

export default App;
