import logo from "../../assets/icons/Logo.svg";
import cart from "../../assets/icons/shopping-cart-20-solid.svg";
import user from "../../assets/icons/user-16-solid.svg";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import NavLinks from "./NavLinks";
import { ROUTES } from "../../constants/routes";

const Navbar = () => {
  return (
    <div className="w-full bg-[#f3f3f3] border-t-[6px] border-[#5B21B6] shadow-sm">
      <div className="w-full px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-14 mx-5">
          <Link to={ROUTES.HOME} className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <h1 className="text-4xl font-black tracking-tight text-[#1b1b1b]">VYBE</h1>
          </Link>

          <NavLinks
            className="hidden md:flex items-center gap-12"
            itemClassName="text-[20px] tracking-[2px] font-semibold text-[#1e1e1e] hover:text-[#5B21B6] transition"
          />
        </div>

        <div className="flex items-center gap-8 mx-5">
          <div className="hidden lg:flex items-center bg-[#e7e7e7] px-5 py-3 w-[370px]">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="SEARCH SPECIFICATIONS"
              className="bg-transparent outline-none ml-3 text-sm tracking-[2px] placeholder:text-gray-500 w-full"
            />
          </div>

          <Link to={ROUTES.CART} className="flex items-center gap-2 cursor-pointer">
            <img src={cart} alt="cart" className="w-7 h-7 text-[#1e1e1e]" />
            <span className="text-xl font-semibold">❬0❭</span>
          </Link>

          <button className="cursor-pointer">
            <img src={user} alt="user" className="w-8 h-8 text-[#1e1e1e]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
