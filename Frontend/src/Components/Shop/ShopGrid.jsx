import products from "../../data/products";

import ProductCard from "./ProductCard";

const ShopGrid = () => {
  return (
    <div className="grid grid-cols-3">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>
  );
};

export default ShopGrid;