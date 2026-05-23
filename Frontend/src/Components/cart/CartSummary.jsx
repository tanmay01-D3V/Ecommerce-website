const CartSummary = ({
  subtotal = 0,
  shipping = 0,
  tax = 0,
  total = 0,
  totalItems = 0,
  onCheckout,
}) => {

  return (
    <div className="p-8 sticky top-10">

      {/* TITLE */}
      <h2 className="text-3xl font-black uppercase">
        Order Summary
      </h2>

      <div className="w-full h-[2px] bg-black mt-4 mb-10" />

      {/* SUMMARY ROWS */}
      <div className="space-y-8">

        <div className="flex justify-between">

          <span className="uppercase text-gray-500">
            Items ({totalItems})
          </span>

          <span className="text-2xl font-bold">
            ₹{subtotal}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="uppercase text-gray-500">
            Standard Shipping
          </span>

          <span className="text-[#5B21B6] font-bold">
            {shipping === 0 ? "FREE" : `₹${shipping}`}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="uppercase text-gray-500">
            Tax Estimate
          </span>

          <span className="font-bold">
            ₹{tax}
          </span>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="w-full h-[1px] bg-[#d9d9d9] my-10" />

      {/* TOTAL */}
      <div className="flex justify-between items-end">

        <div>

          <h3 className="text-2xl font-black uppercase">
            Total Amount
          </h3>

          <p className="text-gray-500 mt-2">
            All taxes included
          </p>

        </div>

        <h2 className="text-4xl font-black text-[#5B21B6]">
          ₹{total}
        </h2>

      </div>

      {/* CHECKOUT */}
      <button
        onClick={onCheckout}
        className="
          w-full
          mt-10
          bg-[#5B21B6]
          hover:bg-[#4c1d95]
          text-white
          py-5
          uppercase
          tracking-[3px]
          font-bold
          transition
        "
      >
        Proceed To Checkout
      </button>

      {/* GUARANTEE */}
      <div className="border border-[#d9d9d9] mt-8 p-6">

        <h4 className="uppercase font-bold text-lg">
          VYBE Authenticity Guarantee
        </h4>

        <p className="text-gray-500 mt-4 leading-relaxed">

          Every item in your cart is strictly verified
          by our technical lab for architectural
          integrity and material quality.

        </p>

      </div>

    </div>
  );
};

export default CartSummary;