// components/ShopSidebar.jsx

import { useState } from "react";
import {
  ChevronUp,
  Search,
} from "lucide-react";

const ShopSidebar = () => {

  // CATEGORY
  const [activeCategory, setActiveCategory] =
    useState("Outerwear");

  // PRICE
  const [price, setPrice] = useState(450);

  // SIZE
  const [selectedSize, setSelectedSize] =
    useState("S");

  // MATERIALS
  const [materials, setMaterials] = useState([
    "GORE-TEX SHELL",
  ]);

  const toggleMaterial = (material) => {
    if (materials.includes(material)) {
      setMaterials(
        materials.filter((m) => m !== material)
      );
    } else {
      setMaterials([...materials, material]);
    }
  };

  const categories = [
    {
      name: "All Products",
      count: 128,
    },
    {
      name: "Outerwear",
      count: 34,
    },
    {
      name: "Knitwear",
      count: 22,
    },
    {
      name: "Accessories",
      count: 45,
    },
    {
      name: "Footwear",
      count: 27,
    },
  ];

  const sizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
  ];

  const materialOptions = [
    "GORE-TEX SHELL",
    "MERINO WOOL",
    "RECYCLED NYLON",
  ];

  return (
    <aside className="w-[320px] min-h-screen bg-[#f5f5f5] border-r border-black/10 p-8 overflow-y-auto">

      {/* SEARCH */}
      <div className="mb-14">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="SEARCH PRODUCTS"
            className="
              w-full
              border
              border-black/20
              bg-white
              py-4
              pl-12
              pr-4
              text-sm
              tracking-[3px]
              outline-none
              focus:border-[#5B21B6]
              transition
            "
          />
        </div>
      </div>

      {/* CATEGORY */}
      <div className="mb-16">

        <p className="text-[11px] tracking-[5px] text-gray-500 mb-8">
          CATEGORY
        </p>

        <div className="flex flex-col gap-6">

          {categories.map((category) => (

            <button
              key={category.name}
              onClick={() =>
                setActiveCategory(category.name)
              }
              className="
                flex
                items-center
                justify-between
                group
              "
            >

              <div className="flex items-center gap-3">

                <span
                  className={`
                    text-[15px]
                    tracking-wide
                    transition
                    ${
                      activeCategory === category.name
                        ? "text-[#5B21B6] font-semibold"
                        : "text-black"
                    }
                  `}
                >
                  {category.name}
                </span>

                {activeCategory === category.name ? (
                  <ChevronUp
                    size={16}
                    className="text-[#5B21B6]"
                  />
                ) : null}
              </div>

              <span className="text-xs text-gray-400 tracking-[2px]">
                {category.count}
              </span>

            </button>
          ))}

        </div>
      </div>

      {/* PRICE RANGE */}
      <div className="mb-16 border-t border-b border-black/10 py-10">

        <p className="text-[11px] tracking-[5px] text-gray-500 mb-10">
          PRICE RANGE
        </p>

        <input
          type="range"
          min="20"
          max="950"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          className="
            w-full
            accent-[#5B21B6]
            cursor-pointer
          "
        />

        <div className="flex justify-between mt-5 text-sm tracking-[2px]">

          <span>$20.00</span>

          <span className="text-[#5B21B6] font-bold">
            ${price}.00
          </span>

          <span>$950.00</span>
        </div>
      </div>

      {/* SIZE */}
      <div className="mb-16">

        <p className="text-[11px] tracking-[5px] text-gray-500 mb-8">
          SIZE
        </p>

        <div className="grid grid-cols-3 gap-3">

          {sizes.map((size) => (

            <button
              key={size}
              onClick={() =>
                setSelectedSize(size)
              }
              className={`
                py-4
                border
                text-sm
                tracking-[3px]
                transition-all
                duration-300

                ${
                  selectedSize === size
                    ? "bg-[#5B21B6] text-white border-[#5B21B6]"
                    : "bg-white border-black/20 hover:border-[#5B21B6]"
                }
              `}
            >
              {size}
            </button>
          ))}

        </div>
      </div>

      {/* MATERIAL */}
      <div>

        <p className="text-[11px] tracking-[5px] text-gray-500 mb-8">
          MATERIAL SPEC
        </p>

        <div className="flex flex-col gap-6">

          {materialOptions.map((material) => (

            <label
              key={material}
              className="flex items-center gap-4 cursor-pointer group"
            >

              {/* FUTURISTIC CHECKBOX */}
              <div className="relative">

                <input
                  type="checkbox"
                  checked={materials.includes(material)}
                  onChange={() =>
                    toggleMaterial(material)
                  }
                  className="
                    peer
                    appearance-none
                    w-5
                    h-5
                    border
                    border-[#5B21B6]
                    bg-black/40
                    checked:bg-[#5B21B6]
                    checked:shadow-[0_0_10px_#5B21B6]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                />

                {/* CHECK */}
                <svg
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    w-3
                    h-3
                    text-white
                    -translate-x-1/2
                    -translate-y-1/2
                    opacity-0
                    peer-checked:opacity-100
                    transition
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <span className="text-sm tracking-[2px] text-black/80 group-hover:text-[#5B21B6] transition">
                {material}
              </span>

            </label>
          ))}

        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;
