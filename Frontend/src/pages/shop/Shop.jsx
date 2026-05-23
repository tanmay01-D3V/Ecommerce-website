// pages/shop/Shop.jsx

import ProductGrid from "../../components/product/ProductGrid";
import Pagination from "../../components/shop/Pagination";
import ShopFilters from "../../components/shop/ShopFilters";
import ShopSidebar from "../../components/shop/ShopSidebar";
import MainLayout from "../../layouts/MainLayout";



const Shop = () => {
  return (
    <MainLayout>

      

      <div className="flex">

        <ShopSidebar />

        <div className="flex-1">
          <ShopFilters />

          <ProductGrid />

          <Pagination />

        </div>

      </div>

    </MainLayout>
  );
};

export default Shop;
