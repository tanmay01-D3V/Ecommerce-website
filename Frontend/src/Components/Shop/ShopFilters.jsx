const ShopHeader = () => {
  return (
    <div className="flex items-center justify-between border-b border-[#d9d9d9] px-8 py-8">

      <div className="flex items-center gap-4">

        <h1 className="text-3xl font-bold uppercase">
          OUTERWEAR
        </h1>

        <p className="text-gray-500 text-lg">
          / 34 products found
        </p>

      </div>

      <div className="flex items-center gap-4">

        <span className="text-sm tracking-[2px] text-gray-500 uppercase">
          Sort By:
        </span>

        <select className="bg-transparent border-b border-black pb-2 text-sm uppercase outline-none">

          <option>Latest Arrivals</option>

          <option>Price Low</option>

          <option>Price High</option>

        </select>

      </div>

    </div>
  );
};

export default ShopHeader;