import React from "react";
import logo from "../assets/Logo.svg";
import {
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#f3f3f3] border-t-[6px] border-[#5B21B6] shadow-sm">
      <div className="w-full px-8 py-5 flex items-center justify-between">
        
        {/* LEFT SECTION */}
        <div className="flex items-center gap-14">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="logo" className="w-8 h-8" />

            <h1 className="text-4xl font-black tracking-tight text-[#1b1b1b]">
              VYBE
            </h1>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-12">
            {["SHOP", "COLLECTIONS", "NEW ARRIVALS", "NETWORK"].map(
              (item) => (
                <a
                  key={item}
                  href="/"
                  className="text-[15px] tracking-[2px] font-semibold text-[#1e1e1e] hover:text-[#5B21B6] transition"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-8">
          
          {/* SEARCH BAR */}
          <div className="hidden lg:flex items-center bg-[#e7e7e7] px-5 py-3 w-[370px]">
            <Search className="w-5 h-5 text-gray-500" />

            <input
              type="text"
              placeholder="SEARCH SPECIFICATIONS"
              className="bg-transparent outline-none ml-3 text-sm tracking-[2px] placeholder:text-gray-500 w-full"
            />
          </div>

          {/* CART */}
          <div className="flex items-center gap-2 cursor-pointer">
            <ShoppingCart className="w-7 h-7 text-[#1e1e1e]" />
            <span className="text-xl font-semibold">(0)</span>
          </div>

          {/* USER */}
          <button className="cursor-pointer">
            <User className="w-7 h-7 text-[#1e1e1e]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;