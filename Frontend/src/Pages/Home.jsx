import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample Products Data
  const newArrivals = [
    {
      id: 1,
      title: 'VYBE-X1 SENSOR',
      price: 189.00,
      specs: 'PRECISION / OPTICAL / 24K DPI',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCykRgzbdDaNivrpWMeKIsuIPGcVIoiE8T2a7K9fYdugbdul4fsDxGLRdnkC9322O80F6TuxYj9cteNuHcnAFC3qn_IojdZCI0W-ah-fPRACgi0DMqXvuo1opo0zP5hRX5P7fCHjLcx4lenuqC5vxqzT6SqgFFUrqpyzUMEteETNJFyN74PD9mj6vmoEv9PjrHSKjANTOlbj72sSJf-FTWxlTMPtB9HgBZGdVqAFTUrykLc_3y8-U6DKxEKPDfOpSYSjquZ-Z1xY5cm'
    },
    {
      id: 2,
      title: 'CHRONO-M6',
      price: 420.00,
      specs: 'WEARABLE / TITANIUM / SYNC',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYimt_cmk1ri1DVYL1voud6lmAtJYusTC55e0KnXR2_dQBrxhsl-JCWgay90CqvJPViYAejihktG7W4nW9ewxkSCtMM5yBg6uZCaT2cnw9CDpIg6s7dP674cmmZpJhTqueaUQr3HIXGXLqm_2kJoWZagSfIai3oluaXYkedOSDiTSjQhozpc7YPS3sxYiijn0Cv2-ITYUVqLoDhYaO6ainUJs3BfPc8qpFDivFegAaW_X0b0UHR-4yRDYQbSFZ0q3l-rpsoNfjwyxK'
    },
    {
      id: 3,
      title: 'SONIC-CORE H2',
      price: 350.00,
      specs: 'AUDIO / NOISE-ISO / STUDIO',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH7Uv707F8P2h9UHelFljjx2r0oaUBS35Jx0bvet9Ms9TkSfz19a6XpdsSyNmfTplm3zjjoLeZUZDrqixb3pbje-Jz-CUpA0hzzwKA6IePhRxlzLnkgrv0bcengZpPIPtUDZsqIqS4LXPd4VsibmaUpGM8idvXKHs2yHo0--a5BQzDO2fVzLVHP9zoDipL_4LVIA2omwmlrr71gD6jOPBFT3NuhwE4v2NbpjUEOII-PhuYhmn4v5lUO1Qz4ChPCeTMOT1zeRCtXHwX'
    },
    {
      id: 4,
      title: 'VYBE PHONE G3',
      price: 999.00,
      specs: 'CORE / QUANTUM / 512GB',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSY84jrbrJufcMJMXbqARy18ncUA6Q-JcV4zHXNSQ4WhLr6mxbxu1I85Rtn8zr6WSJR52ya3apHIhTRIC9CcYOE5_tasVL5sbwmn5wpkQDNNiqzgYAzFTN5XTqwQQy_Edn5kVhPZTJIiPA4JkPX6U-0dbtSXpEjYs1qS-xdQSYboqi9IrMgXo6Y9Oa5igh5bn0krrZHLIOyV2kA9Nkfr1BVWKD8POin8iuhK49qBIIO13cKwBx1n3LJ5aR0VTwk9Mfwsha8ir7Ewei'
    }
  ];

  const collections = [
    {
      name: 'TECH\nPERIPHERALS',
      subtitle: 'Category 01',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-5YHb3WZVtmBRlvfo8zpyAmdsp3ysJ_1EvB2Ry8no7VihYB9b8GtUc-EjbM_IriUZZDKRXWju6d-XcwToBkN2q0QLDsSyoT3KQpQknUAjg72y4ybv693rLKkShP7hh_Wo4GpLzAjZHAO_LL4WnO9srZ7Zxy9SJqUSp6o2wqOQ72cfPWCo3LMeRB569nvZQSPSKKcE06XmnL-3OXXc9tcRRSpo29NSxFvCSUEzJjUXssO9iK3UqVX-s7Gnlhdi963Xw8kSiCDvwi6k'
    },
    {
      name: 'URBAN\nARMOR',
      subtitle: 'Category 02',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrxtIhpUCccbSGujwiNDbghV_79eXUGSL9EETn9JeBY95l3dxRG1nv1oiAIC9ECiQL-gWDi09p-q8Ab0vS3qE2goXpRmcuF_rQnRAeB31eKYZWHHuYrizk6CsRqyE-50T6TCOC4rs_KqmZI9l4SZx3UGC9o7XkH4XDWEdz2NOV1AKRhDQoN75K0CQhydM_7MyFbaV00piz9DKpb-rQA3WSZ7fTBXMRiuNY9dIpPjbdH6Jg5C601Z98GObS4PhTZJmFFaZblc-pUU4J'
    },
    {
      name: 'MODULAR\nSTATIONS',
      subtitle: 'Category 03',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqiIFQdEtAuNrRjfLkZ01HnKI6NyZbbGfDxghOPKy0-g_G28PuEskSv0Rys1twRdGdGKVDoNpFQMWREDYLJYuqvRaN_eOP61eIahCpz7oHY_oGmgBLBZNpS-CLaaQ'
    }
  ];

  return (
    <div className="bg-surface">
      <Header />

      <main className="max-w-[1440px] mx-auto overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-[819px] w-full border-b border-on-surface overflow-hidden">
          <div className="flex h-full w-full">
            {/* Main Slide */}
            <div
              className="relative w-full h-full flex flex-col justify-end p-16 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYSmcw8AOVQ2JoKDnB-ln9cfEJlhX2tSidnbEDdsq52jF8zyoqysoAXL_mwL94UoEYwGCbAnQ-GB1vbla1AYPjveCAFUEt5ENMI0n_U2GzNGCBMVVtH1movqPQ266zdz8mB5rHOHbQNLlfETShjdcy1Cul-g9vqqZVzLKE1VbLwkOGybhX-1HfAAyPWpCrsJi472f7RbnANCxl46W2Tbu1EU0iC7gyr2vh4sH971xOfXNy5l3p9rbAJelOrSA54GgIXLjjIf-XLs7_')`
              }}
            >
              <div className="z-10 max-w-2xl">
                <span className="inline-block border border-white px-3 py-1 text-white text-[10px] tracking-[0.2em] uppercase mb-6 font-bold">
                  RELEASE v2.04
                </span>
                <h1 className="text-white text-6xl font-bold uppercase mb-8 leading-none tracking-tighter">
                  RAW
                  <br />
                  HARDWARE
                </h1>
                <p className="text-white text-lg mb-8 opacity-80 max-w-lg leading-relaxed">
                  Industrial aesthetics engineered for peak digital performance. Experience the new standard of tactile precision.
                </p>
                <div className="flex gap-4">
                  <button className="bg-primary text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-on-surface transition-colors">
                    Shop Specs
                  </button>
                  <button className="bg-transparent border border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    Catalog
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-16 right-16 flex gap-1">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="size-12 border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => setCurrentSlide(currentSlide + 1)}
              className="size-12 border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-on-surface">
          <div className="p-8 border-r border-on-surface flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-secondary">Latency</span>
            <span className="text-2xl font-bold font-mono">0.12ms</span>
          </div>
          <div className="p-8 border-r border-on-surface flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-secondary">Material</span>
            <span className="text-2xl font-bold font-mono">T6-ALU</span>
          </div>
          <div className="p-8 border-r border-on-surface flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-secondary">Network</span>
            <span className="text-2xl font-bold font-mono">ENCRYPTED</span>
          </div>
          <div className="p-8 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-secondary">Uptime</span>
            <span className="text-2xl font-bold font-mono">99.9%</span>
          </div>
        </div>

        {/* Featured Collections */}
        <section className="py-24 border-b border-on-surface">
          <div className="px-16 flex justify-between items-end mb-12">
            <div>
              <span className="text-primary text-[12px] font-bold tracking-[0.3em] uppercase block mb-4">
                // ARCHIVE_SYSTEM
              </span>
              <h2 className="text-4xl uppercase leading-none font-bold tracking-tighter">FEATURED COLLECTIONS</h2>
            </div>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest border-b border-on-surface pb-1 mb-2 hover:text-primary transition-colors">
              View All Categories
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {collections.map((collection, idx) => (
              <Link
                key={idx}
                to="/shop"
                className="group relative aspect-[4/5] border-r border-on-surface overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${collection.image}')` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full flex justify-between items-end">
                  <div className="text-white">
                    <span className="text-[10px] font-bold tracking-widest uppercase mb-2 block">{collection.subtitle}</span>
                    <h3 className="text-2xl uppercase leading-none font-bold whitespace-pre-line">{collection.name}</h3>
                  </div>
                  <span className="material-symbols-outlined text-white text-4xl">north_east</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* New Arrivals Grid */}
        <section className="py-24 border-b border-on-surface bg-white">
          <div className="px-16 mb-16 text-center">
            <span className="text-primary text-[12px] font-bold tracking-[0.3em] uppercase block mb-4">
              // LATEST_DROP
            </span>
            <h2 className="text-4xl uppercase font-bold tracking-tighter">NEW ARRIVALS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-on-surface">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                specs={product.specs}
                image={product.image}
              />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-32 px-16 bg-on-surface text-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary-container text-[12px] font-bold tracking-[0.3em] uppercase block mb-6">
              NETWORK_ACCESS
            </span>
            <h2 className="text-6xl uppercase mb-12 font-bold tracking-tighter">JOIN THE NETWORK</h2>
            <p className="text-lg text-surface-variant mb-12 max-w-xl mx-auto leading-relaxed">
              Subscribe to receive early access to technical drops, firmware updates, and exclusive network events.
            </p>

            <form className="flex flex-col md:flex-row gap-0 max-w-2xl mx-auto mb-12">
              <input
                type="email"
                placeholder="ENTER EMAIL ADDRESS"
                className="flex-1 bg-white/5 border border-white/20 px-6 py-5 text-white tracking-widest uppercase text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-container text-white px-12 py-5 font-bold uppercase tracking-widest transition-colors"
              >
                Connect
              </button>
            </form>

            <div className="flex justify-center gap-8 text-xs tracking-[0.2em] uppercase font-bold text-outline-variant">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="size-4 rounded-none bg-transparent border-white/30 checked:bg-primary" />
                <span>Marketing</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="size-4 rounded-none bg-transparent border-white/30 checked:bg-primary" />
                <span>Hardware Updates</span>
              </label>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;