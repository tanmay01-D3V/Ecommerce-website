// components/cart/CartHeader.jsx

import { Link } from "react-router-dom";

const CartHeader = ({ totalItems = 0 }) => {
  return (
    <div className="border-b border-[#d9d9d9] px-8 py-8">

      {/* BREADCRUMB */}
      <div className="flex items-center gap-3 text-sm tracking-wide">

        <Link
          to="/"
          className="text-[#5B21B6] font-semibold"
        >
          Home
        </Link>

        <span className="text-gray-400">/</span>

        <span className="text-[#1e1e1e]">
          Cart
        </span>

      </div>

      {/* TITLE */}
      <div className="flex items-center gap-4 mt-8">

        <h1 className="text-4xl font-black uppercase text-[#1e1e1e]">
          Shopping Cart
        </h1>

        <span className="text-gray-400 text-lg">
          [{totalItems} item{totalItems !== 1 ? "s" : ""}]
        </span>

      </div>

    </div>
  );
};

export default CartHeader;