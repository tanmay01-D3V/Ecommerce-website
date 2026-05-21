// components/NewArrivals.jsx

const products = [
  {
    name: "VYBE-X1 SENSOR",
    price: "$189.00",
    category: "PRECISION / OPTICAL / 24K DPI",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1974&auto=format&fit=crop",
  },

  {
    name: "CHRONO-M6",
    price: "$420.00",
    category: "WEARABLE / TITANIUM / SYNC",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1974&auto=format&fit=crop",
  },

  {
    name: "SONIC-CORE H2",
    price: "$350.00",
    category: "AUDIO / NOISE-ISO / STUDIO",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1974&auto=format&fit=crop",
  },

  {
    name: "VYBE PHONE G3",
    price: "$999.00",
    category: "CORE / QUANTUM / 512GB",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1974&auto=format&fit=crop",
  },
];

const NewArrivals = () => {
  return (
    <section className="w-full bg-[#f3f3f3]">

      {/* TOP SECTION */}
      <div className="py-28 border-y border-black flex flex-col items-center justify-center">

        <p className="text-[#5B21B6] tracking-[5px] text-sm font-bold mb-6">
          // LATEST_DROP
        </p>

        <h2 className="text-5xl font-light tracking-wide text-[#1a1a1a]">
          NEW ARRIVALS
        </h2>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-b border-black">

        {products.map((product, index) => (
          <div
            key={index}
            className="border-r border-black last:border-r-0 px-10 py-12 group"
          >
            {/* PRODUCT IMAGE */}
            <div className="overflow-hidden bg-[#efefef] mb-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* PRODUCT INFO */}
            <div className="flex justify-between items-start mb-5">

              <h3 className="text-2xl font-black text-[#1a1a1a] leading-tight">
                {product.name}
              </h3>

              <p className="text-2xl text-[#1a1a1a]">
                {product.price}
              </p>
            </div>

            {/* CATEGORY */}
            <p className="tracking-[3px] text-sm text-gray-500 mb-10">
              {product.category}
            </p>

            {/* BUTTON */}
            <button className="w-full border border-black py-5 text-sm tracking-[5px] font-bold hover:bg-black hover:text-white transition duration-300">
              CONFIGURE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;