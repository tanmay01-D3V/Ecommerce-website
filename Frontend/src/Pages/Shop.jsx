// pages/Shop.jsx

import ProductPagination from "../Components/Shop/ProductPagination";
import ShopGrid from "../Components/Shop/ShopGrid";
import ShopHeader from "../Components/Shop/ShopHeader";
import ShopSidebar from "../Components/Shop/ShopSidebar";
import MainLayout from "../Layout/MainLayout";



const Shop = () => {
  return (
    <MainLayout>

      

      <div className="flex">

        <ShopSidebar />

        <div className="flex-1">
          <ShopHeader />

          <ShopGrid />

          <ProductPagination />

        </div>

      </div>

    </MainLayout>
  );
};

export default Shop;