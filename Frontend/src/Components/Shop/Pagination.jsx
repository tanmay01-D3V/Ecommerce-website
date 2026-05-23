const ProductPagination = () => {
  return (
    <div className="flex items-center justify-between border-t border-[#d9d9d9] px-10 py-10">

      <button className="uppercase tracking-[2px] text-sm">
        ← Previous
      </button>

      <div className="flex gap-8">

        <button className="text-[#5B21B6] font-bold">
          01
        </button>

        <button>02</button>

        <button>03</button>

        <button>...</button>

        <button>12</button>

      </div>

      <button className="uppercase tracking-[2px] text-sm">
        Next →
      </button>

    </div>
  );
};

export default ProductPagination;