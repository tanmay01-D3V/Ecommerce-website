// components/cart/CartItems.jsx

import {
  Minus,
  Plus,
  X,
} from "lucide-react";

const CartItems = ({
  cartItems = [],
  onIncrease,
  onDecrease,
  onRemove,
}) => {

  return (
    <div className="border-r border-[#d9d9d9]">

      {/* TABLE HEADER */}
      <div className="grid grid-cols-12 border-b border-[#d9d9d9] px-6 py-6 uppercase text-sm tracking-[2px] text-gray-500">

        <div className="col-span-6">
          Product Details
        </div>

        <div className="col-span-3 text-center">
          Quantity
        </div>

        <div className="col-span-3 text-right">
          Total Price
        </div>

      </div>

      {/* CART ITEMS */}
      {cartItems.map((item) => (

        <div
          key={item._id}
          className="grid grid-cols-12 border-b border-[#d9d9d9] p-6"
        >

          {/* PRODUCT */}
          <div className="col-span-6 flex gap-6">

            <img
              src={item.image}
              alt={item.name}
              className="
                w-[140px]
                h-[180px]
                object-cover
                bg-[#f5f5f5]
              "
            />

            <div>

              <h2 className="text-3xl font-black uppercase leading-tight">
                {item.name}
              </h2>

              <p className="mt-4 text-gray-500 uppercase">
                Ref: {item.sku}
              </p>

              <p className="mt-2 uppercase">
                Size: {item.size}
              </p>

              <p className="mt-2 uppercase">
                Color: {item.color}
              </p>

              {/* REMOVE */}
              <button
                onClick={() => onRemove(item._id)}
                className="
                  flex
                  items-center
                  gap-2
                  mt-6
                  text-red-600
                  uppercase
                  font-semibold
                  hover:opacity-70
                  transition
                "
              >

                <X className="w-4 h-4" />

                Remove Item

              </button>

            </div>

          </div>

          {/* QUANTITY */}
          <div className="col-span-3 flex items-center justify-center">

            <div className="flex items-center border border-black">

              <button
                onClick={() => onDecrease(item._id)}
                className="
                  px-5
                  py-4
                  hover:bg-black
                  hover:text-white
                  transition
                "
              >
                <Minus size={16} />
              </button>

              <span className="px-6 font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() => onIncrease(item._id)}
                className="
                  px-5
                  py-4
                  hover:bg-black
                  hover:text-white
                  transition
                "
              >
                <Plus size={16} />
              </button>

            </div>

          </div>

          {/* PRICE */}
          <div className="col-span-3 flex items-center justify-end">

            <h3 className="text-3xl font-black">
              ₹{item.price * item.quantity}
            </h3>

          </div>

        </div>

      ))}

    </div>
  );
};

export default CartItems;