import React, { useState, useMemo } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [priceRange, setPriceRange] = useState([0, 750]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('latest');

  const products = [
    {
      id: 1,
      title: 'VORTEX SHELL JKT',
      price: 540.00,
      type: '01-Hardshell',
      color: 'Matte Black / Gore-Tex Pro',
      category: 'Outerwear',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANasVxrnN8wztDghiX1MXh7oedeVefH-xPt2-FVuVM3WOPrZL3v5u6uM9H9ZpHPRzyjihjC_gGB50f6V2LrcXIzWgUeU0E3HSXgu3rYnaRb_EaOZEY1xbJq50t_mP_wHGNtJE3BB5qJ26NyOJpTm8lAZaJtqvdUhvM2hwHLjvUMlcm8XXFNHaRPANQBKDgyYIbLTMcCgRmkXjF_8hqTEuibPXWqFWzoyrlCC9I-o-jnuSB9ZsPikM46qHgjnGX_pnILKURZ74kjJ_U',
      isNew: true
    },
    {
      id: 2,
      title: 'FLUX MID-LAYER',
      price: 224.00,
      originalPrice: 280.00,
      type: '04-Insulator',
      color: 'Charcoal / PrimaLoft',
      category: 'Outerwear',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmGQ_GIemWwh6utD5Fw03MpWTbbp7ll3-UMV08Xo1FfBCIZ-0GkKpWY4ehUj4ZSema5bkYhxQSWufs0Mxu5AHXahZBYueZ_7HD9H2sOAGYql4gJ0-SVU9itxd-Yx2tGM4dRTH90Fy2qFsMszt2jW6t-H6yExomkZ-zqseEQkpbpqfxAXfc29lRYAJytmVSS9BnPmKOqCHxunGekJXtM709SZbp4pqAUbbsFN8agTsNrwJPGAj4sKNbumrjapauyNhkXBCnSb0LV4Pi',
      discount: '-20% ARCHIVE',
      category: 'Outerwear'
    },
    {
      id: 3,
      title: 'OBSIDIAN LONG COAT',
      price: 715.00,
      type: '02-Parka',
      color: 'Deep Navy / 3-Layer Laminate',
      category: 'Outerwear',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHR0nIhACLeMKtkOi4BNz3aXQSbTwZYgfsbV5DQZlWNAFlNkTIcLYFwcYXRE8mIxYJuK_DLEMRtgGGq9Iz9mKSPCPC6lXy85UzKJ1oGH9SCECzArQDQ8PbMUeEX58-SE-MSuWIDILJKqbADg8txgzutVvFHp3vzI1ZXYfOnBvolh-3hHIIR9vgE79R73y_ikRhdnRETB6AzZ6968VCMuhvQ-rqrs7b0RSlpQ8gXlA1WDwwIKwqfS84Fvgcu0feJsl2MrURK29B4-qD',
      category: 'Outerwear'
    },
    {
      id: 4,
      title: 'CARGO VEST MK II',
      price: 340.00,
      type: '08-Modular',
      color: 'Slate / Ripstop Nylon',
      category: 'Outerwear',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIoo-iy164cI-aEFLeni6QZXM-8JdiNDNW2ca7V68qxux4GsQaBol0lvUisPdcuJhl30rRspOexnGdcYliSt0DkV_xCWxUqrfenXjL67YuORC3gZVyhI36LzoJ1U7ySaTfg90xWYg7tFpauCinKTEVBiJ9vYcoHZm0kNOsl-phi05p7YXY9WAQjQYR7RVukfZ6cCjJvOrwX15kiULIGF4vsCgKcm0i2IRA93oYNfu7ua-xq4tYRZS1CCS6cXG44fWdgBQEARPFc-Tz',
      category: 'Outerwear'
    },
    {
      id: 5,
      title: 'SOFTSHELL HOODIE',
      price: 295.00,
      type: '03-Softshell',
      color: 'Grey / Waterproof',
      category: 'Outerwear',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJsnKMXnLmsGnjwnXAX8zBA8NtHnIPaV0Zgizs6v0VQWGIbOZY_z8Z6l15g7SAPJbwGmxxFvFMCzjhJQO5o9riXoLOcGiZIXMwjC0RKtE2qVrNuglqw1W6jqmT5px9fJcLh9s-yjxtWVypK5FsCvDTmhUVYvAJWiQVOANmGDSLW7Mqiafb0WvHPRars9xxT-fPGFlSS35F9--vP22WSq10Tk8BPOjlnVjZQrkQ83_XJthngQ1_x5pX21gdm6vh7MDHRJuP-JWpNd3z',
      category: 'Outerwear'
    }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const categoryMatch = selectedCategory === 'All Products' || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });

    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="bg-surface">
      <Header />

      <main className="max-w-[1440px] mx-auto flex">
        {/* Sidebar Filters */}
        <aside className="w-[300px] flex-shrink-0 border-r border-outline-variant min-h-screen bg-surface px-16 py-12 hidden lg:block">
          <div className="space-y-12">
            {/* Categories */}
            <section>
              <h3 className="text-[11px] uppercase tracking-[0.2em] mb-6 text-outline font-bold">Category</h3>
              <ul className="space-y-4 font-body-md text-sm">
                {['All Products', 'Outerwear', 'Knitwear', 'Accessories', 'Footwear'].map((category, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`flex justify-between items-center group w-full ${
                        selectedCategory === category ? 'font-bold text-primary' : ''
                      }`}
                    >
                      <span className={selectedCategory === category ? '' : 'group-hover:text-primary transition-colors'}>
                        {category}
                      </span>
                      <span className="text-[10px] text-outline">
                        {category === 'All Products' ? '128' : category === 'Outerwear' ? '34' : '22'}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-outline-variant"></div>

            {/* Price Range */}
            <section>
              <h3 className="text-[11px] uppercase tracking-[0.2em] mb-6 text-outline font-bold">Price Range</h3>
              <div className="space-y-4">
                <div className="relative h-1 bg-outline-variant w-full">
                  <div
                    className="absolute h-full bg-primary left-0"
                    style={{ right: `${100 - (priceRange[1] / 750) * 100}%` }}
                  ></div>
                  <input
                    type="range"
                    min="0"
                    max="750"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="absolute w-3 h-3 bg-primary top-1/2 -translate-y-1/2 left-0 appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="750"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="absolute w-3 h-3 bg-primary top-1/2 -translate-y-1/2 appearance-none cursor-pointer"
                    style={{ right: `${100 - (parseInt(e.target.value) / 750) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between font-label-mono text-[10px]">
                  <span>${priceRange[0]}.00</span>
                  <span>${priceRange[1]}.00</span>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-outline-variant"></div>

            {/* Sizes */}
            <section>
              <h3 className="text-[11px] uppercase tracking-[0.2em] mb-6 text-outline font-bold">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    className={`border py-2 text-[10px] font-label-mono transition-all ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-on-primary'
                        : 'border-outline-variant hover:border-primary hover:text-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-outline-variant"></div>

            {/* Material Spec */}
            <section>
              <h3 className="text-[11px] uppercase tracking-[0.2em] mb-6 text-outline font-bold">Material Spec</h3>
              <div className="space-y-3">
                {['Gore-Tex Shell', 'Merino Wool', 'Recycled Nylon'].map((material) => (
                  <label key={material} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedMaterial === material}
                      onChange={() => setSelectedMaterial(selectedMaterial === material ? null : material)}
                      className="w-4 h-4 appearance-none border border-outline checked:bg-primary cursor-pointer"
                    />
                    <span className="text-xs uppercase font-label-mono tracking-wider group-hover:text-primary">
                      {material}
                    </span>
                  </label>
                ))}
              </div>
            </section>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 px-16 py-12">
          {/* Header/Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 uppercase tracking-tighter">
                Outerwear <span className="text-outline text-lg font-normal lowercase tracking-normal ml-4">/ {filteredAndSortedProducts.length} products found</span>
              </h1>
              <div className="flex gap-2">
                <span className="bg-primary-container text-on-primary px-3 py-1 text-[9px] font-label-mono uppercase">
                  Waterproof
                </span>
                <span className="border border-outline-variant text-outline px-3 py-1 text-[9px] font-label-mono uppercase">
                  Technical
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-on-surface pb-1">
              <span className="font-label-mono text-[10px] uppercase text-outline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none font-label-mono text-[10px] uppercase focus:ring-0 p-0 cursor-pointer"
              >
                <option value="latest">Latest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t border-l border-outline-variant">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                specs={`Type: ${product.type}`}
                discount={product.discount}
                showConfigureBtn={false}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
