const ProductCard = ({ product }) => {
  return (
    <div className="border border-[#d9d9d9] p-6 bg-[#f7f7f7]">

      <div className="relative">

        {product.tag && (
          <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 tracking-[2px]">
            {product.tag}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[420px] object-cover"
        />

      </div>

      <div className="mt-6">

        <div className="flex justify-between items-center">

          <p className="text-xs tracking-[2px] text-gray-500 uppercase">
            {product.type}
          </p>

          <div className="flex gap-2">

            <span className="font-bold text-2xl">
              {product.price}
            </span>

            {product.oldPrice && (
              <span className="line-through text-gray-400">
                {product.oldPrice}
              </span>
            )}

          </div>

        </div>

        <h2 className="text-3xl font-bold mt-4 uppercase">
          {product.name}
        </h2>

        <p className="text-gray-500 mt-2">
          {product.description}
        </p>

      </div>

    </div>
  );
};

export default ProductCard;