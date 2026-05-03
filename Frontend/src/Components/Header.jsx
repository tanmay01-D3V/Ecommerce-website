import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartCount = 0 }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-on-surface w-full">
      <div className="max-w-[1440px] mx-auto px-16 h-20 flex items-center justify-between">
        {/* Logo & Navigation */}
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-6 text-primary bg-primary flex items-center justify-center">
              <svg fill="white" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tighter uppercase">VYBE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <Link to="/shop" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
              Shop
            </Link>
            <a href="#" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
              Collections
            </a>
            <a href="#" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
              New Arrivals
            </a>
            <a href="#" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
              Network
            </a>
          </nav>
        </div>

        {/* Right side: Search, Cart, Account */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <form onSubmit={handleSearch} className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
            <input
              type="text"
              placeholder="SEARCH SPECIFICATIONS"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-surface-container border-none text-xs tracking-widest pl-10 pr-4 py-2 w-64 focus:ring-1 focus:ring-primary rounded-none"
            />
          </form>

          {/* Cart Button */}
          <Link to="/cart" className="flex items-center gap-2 uppercase text-xs font-bold tracking-widest hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="hidden sm:inline">({cartCount})</span>
          </Link>

          {/* Account Button */}
          <button className="flex items-center gap-2 uppercase text-xs font-bold tracking-widest hover:text-primary transition-colors">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
