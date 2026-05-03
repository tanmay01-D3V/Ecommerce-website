import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [expandedSection, setExpandedSection] = useState(null);

  const product = {
    id: 1,
    title: 'Tech Jacket v1.0',
    price: 425.00,
    badge: 'PERFORMANCE_SERIES // 2024',
    description: 'The VYBE Tech Jacket is a masterpiece of technical minimalism. Engineered with a three-layer waterproof membrane and laser-cut precision, it provides maximum protection without the bulk of traditional outerwear.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-eBVFyKVI0kJehymqMQDOg9dKkvHzonU7WEAs1OHhyeZ1J2ePT4PlwrUEGPw8LBevwe0NkD4CTsKqoLMpjuzIoIsJ9L_otUTsxgtPJIXiBpILwrCQqcqBoaZ87G2dZQYOh9mhrhDHAACckBW5pjLsYaSUKLw-_Z9Yk7FKJIKWIFDP_wb7GJGTZsixgoFeiV2o7l07nxnigGieivoHy0U5H3lyUvUJBDdxgF0Xua7A8vgVx86LpDaCD9-U1mggS8tOkuebhIhvQUdh',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIjLrtIYJaVFMI2ivugdCMdUEjGV1H74-wBIs1JZZvMu6BtI0S38AP7yBrLy3RH8K7LCmrtTGknx5nmRuvpE1_oROnFWm-671MTwULsGs9bUaZfSNQn7lUAm32_nPumWP0U9uOi2JXTlQT2Bvo93TGoUPEVrNBO3bhl92SstT118co4yP8IbEXkNFFqPbvXrIFqU1w1qIHfQGqQQjntNoMfTEKIE_FctjoKu-sd4WCs0SDKoqvehofdwpF36GKnJPUrGcSEx3hDLWv',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyXwCc1tLXoyBUjzkD1NCiGN1yteQYkRUZKUiN6XWVz2dI8XB0aGPcA8L8_zDbg_C1yqpXWqS9i_fahUJdgzUC0PZhtK7vBNFsmTWt4NVaOyNLZqt7cXkyUj1xk-aURzW3sxgsnle5TwXI_aOuCPNUed9gqd8LR-jtA00DDhWX4w5-eqaNnwewoqedcTg-Q8dT0l1EEqpRchTk2U8Qb0D7J3FkyHk2MykuKeQ-0xIALba1OUdmMfRRmh2rmIb-RCw0eStg8HSAFsuu',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfBT3UgVcQKqT4EUAw-m9hiIPLu-SxWevhet0XL64JlfesNQzNWYI29rCiii8V9sDvfqmt4jCmdD5b6pUcb-xQywGrhFGhi58NKOx8YR7bLReNkX7B55LUT1sBvNg3wDGb6IMV5N7eLkIUnLlNmNZ16lUpUk8_cQc3yOE710kT2O7MhKSEfuurNwoHdJu0tZJXL6zuNv266EqP4Xvk4dn5D8o_0kpwiuM_vmSXHa8S1KP8zCUeF4MBIGIn6LevOJAr8yyrcKzLBIWS'
    ],
    specs: [
      { label: 'Material', value: '3L GORE-TEX® PRO' },
      { label: 'Waterproof Rating', value: '28,000 mm' },
      { label: 'Zippers', value: 'YKK® AquaGuard®' },
      { label: 'Weight', value: '340g (Size M)' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    relatedProducts: [
      { id: 10, title: 'Cargo Shell Pant', price: 285, category: 'Lower Body // Tier 2', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU8zX_8I82XYwNyXpKq0aEgo00fDL7gmg9w30MxbC94AJe3DITL3UJ3K0rs1KqEckUa9NRfBXIYIFeFR-0rel0083UbspCouhhNrSdvq10X8N-7XdpiCMWoec_iCDJ3RSxZnjEmNVhXx22zBxq-mbWhecd2A3FQ82yLXhaPTPAkAllyuhAvLPLtTIT-NnONN3u3bDeTfoqac2LHBVqeT0VKKH5oM2avqTdiDrPwhnoRw3yZ7NwP7tygY3fq42AJVpc4XBzLz7Uv7-U' },
      { id: 11, title: 'Modular Pack 20L', price: 310, category: 'Carry // Tier 1', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpZjDGbjFhlelffMk5ufcVLsTH-1SrFUmQUK43OBlV_8y7JU6kKa8ra2RBlJVc74VcZk_AS3j3UXxG1-ZaitY0H2boytKySnspibv4YZndvOintAKop1frFvuxBRRgRgOB5R0IuJspeSCQApFQSezExEXx6p9M_1zWG6v9oqrdytkOkiUtVxl4IypV8yNBX3Cux0sEwysECKWexP-AI6RGW6PFZxwO48lartd6jkp_qiQYHWsc14J42bvJ5R4JpVNlt4Mu-EqaH6oh' },
      { id: 12, title: 'V-Stride Runner', price: 195, category: 'Footwear // Performance', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHD7Ih0T7fKh8GOgstXg7dfd057YnQg27502rMXLllRDCvoKX7wIfXCHaGECTbmCsj29Mifx2h0xRSUbzsRHIbWOAFPhccTh2om4p8Hl18mjLGJeOL4JSCzdvE1lvlwD1nn8H3kmUJ2pvMqManLa5aInnh-W67ggBT4PTiQQ3OJmdVgy-XRGK3XSZgOR8VCPtWu-jGg6ykXfw3Y4D1t1giwmQe4syeX65mmsjOLCpJkinjMP0BxEx5O-5D9yiaKQd_3uiLNpIkJYA0' },
      { id: 13, title: 'Compression Base', price: 120, category: 'Base // Layering', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0-q2_Kg2Xo2AZ28cJqJiRTpW2HpAmY5og-QU2u7l_q8EXAr3TXgXbMVJp62Wfqbk4V6_E4ybOT36iYfwc1lhuJXwjVUOQB92ZD_OSWrN4vIkEDcucELRyY-BUcaJBUTiwLpvV4KsEFWbpWb8iMnlu8ms78lpK9zrHNjlVuxF1E6vRsGeGhtvXs9aeIUZ5nd53_mOVsfA_NzTlJb_tM12JPKPTPrhPbxMH7GowZ2yjHetu1D9Dk9_oS3b0UM9oUVj50SyHMKS5gD1J' }
    ]
  };

  return (
    <div className="bg-white">
      <Header />

      <main className="max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <div className="px-16 py-4 flex gap-2 text-xs font-medium uppercase tracking-widest text-outline border-b border-outline-variant">
          <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/shop')} className="hover:text-primary transition-colors">Outerwear</button>
          <span>/</span>
          <span className="text-on-surface">{product.title}</span>
        </div>

        {/* Product Hero Section */}
        <section className="flex flex-col lg:flex-row border-t border-b border-outline-variant">
          {/* Left: Gallery */}
          <div className="lg:w-7/12 border-r border-outline-variant bg-surface-container-low">
            <div className="grid grid-cols-2">
              {product.images.map((image, idx) => (
                <div
                  key={idx}
                  className={`aspect-[3/4] border-r border-b border-outline-variant bg-center bg-no-repeat bg-cover ${
                    idx === product.images.length - 1 ? 'border-r-0' : ''
                  } ${idx % 2 === 1 ? 'border-r-0' : ''}`}
                  style={{ backgroundImage: `url('${image}')` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:w-5/12 p-16 flex flex-col justify-start">
            <div className="mb-12">
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
                {product.badge}
              </span>
              <h1 className="text-5xl font-bold tracking-tighter leading-none mb-4 uppercase">
                {product.title}
              </h1>
              <p className="text-2xl font-light text-on-surface mb-8 tracking-tight">
                ${product.price.toFixed(2)} USD
              </p>
              <p className="text-lg text-secondary leading-relaxed max-w-md">
                {product.description}
              </p>
            </div>

            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-bold uppercase tracking-widest">Select Size</label>
                <button className="text-[10px] underline uppercase tracking-widest text-outline hover:text-on-surface">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-0 border border-outline-variant">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    disabled={!product.availableSizes.includes(size)}
                    className={`h-14 border-r border-b border-outline-variant text-sm font-medium uppercase transition-colors last:border-r-0 ${
                      selectedSize === size
                        ? 'bg-on-surface text-surface'
                        : product.availableSizes.includes(size)
                        ? 'hover:bg-surface-container-highest'
                        : 'text-outline opacity-40 cursor-not-allowed'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full bg-primary text-white py-6 font-bold text-sm tracking-[0.2em] uppercase hover:bg-black transition-colors">
                Add to Cart
              </button>
              <button className="w-full border border-on-surface text-on-surface py-6 font-bold text-sm tracking-[0.2em] uppercase hover:bg-surface-container transition-colors">
                Add to Wishlist
              </button>
            </div>

            <div className="mt-16 border-t border-outline-variant pt-10">
              <div className="space-y-6">
                {[
                  { title: 'Technical Specifications', isOpen: true },
                  { title: 'Shipping & Returns', isOpen: false },
                  { title: 'Care Instructions', isOpen: false }
                ].map((section) => (
                  <div key={section.title} className="group border-b border-outline-variant pb-4">
                    <button
                      onClick={() => setExpandedSection(expandedSection === section.title ? null : section.title)}
                      className="w-full flex justify-between items-center text-left"
                    >
                      <span className="text-xs font-bold uppercase tracking-[0.1em]">{section.title}</span>
                      <span className="material-symbols-outlined transition-transform">
                        expand_more
                      </span>
                    </button>
                    {(expandedSection === section.title || section.isOpen) && section.title === 'Technical Specifications' && (
                      <div className="mt-4 text-sm text-secondary leading-relaxed font-light">
                        <ul className="space-y-2 list-none p-0">
                          {product.specs.map((spec, idx) => (
                            <li key={idx} className="flex justify-between border-b border-surface-container-highest pb-2">
                              <span className="font-medium text-on-surface">{spec.label}</span>
                              <span>{spec.value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="p-16 border-b border-outline-variant">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-3xl font-bold tracking-tighter uppercase">Complementary Hardware</h3>
            <button className="text-xs font-bold uppercase tracking-widest border-b border-on-surface pb-1 hover:text-primary transition-colors">
              View Collection
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-outline-variant">
            {product.relatedProducts.map((item) => (
              <div key={item.id} className="border-r group cursor-pointer bg-white last:border-r-0">
                <div
                  className="aspect-[4/5] bg-center bg-no-repeat bg-cover overflow-hidden"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="w-full h-full bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <div className="p-6 border-t border-outline-variant">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-bold uppercase tracking-tight">{item.title}</p>
                    <p className="text-sm font-medium">${item.price}</p>
                  </div>
                  <p className="text-[10px] font-medium text-outline uppercase tracking-widest">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Product;