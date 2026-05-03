import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Premium Oversized Tee',
      ref: 'VYB-099283-MB',
      size: 'LARGE',
      color: 'MIDNIGHT BLACK',
      price: 65.00,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnY8LoF2lf-rKHQ7hcydaJoI-AKsQbzR8JpTQGJthS9_9SrX4icpTP6x5wgiJqJPGs1M1pkN2JXHBquuFWBQDBjwut2vZtlhglXPf98Z1o_TmbzwS6fPTM5qMyGVfENX2aML5EiXNNs-ASGNwv4NVw6YSEbkM3dj7JR6ATuEg0S7rCUUe_IeVZgjt7M89q3T5oJ7177t4UizvEp7VV8okHPPqsU9BAET0-CKe8V5kLrvKtvmAW8tk5PilWHolDqVCgUKLBMz6_D2uX'
    },
    {
      id: 2,
      title: 'VYBE Signature Hoodie',
      ref: 'VYB-882711-SG',
      size: 'XL',
      color: 'SLATE GREY',
      price: 120.00,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMcXicAJU-EqhrAJjV-GafVigjKU7ixMsFrPXvaG-5k8fToqBjWgLp5sK4OxpWAGbAM-3KoQBoMykMlcY9ddU2Roh6DyH2XP3uVQQsd8fyA_HCqxwQuzNTEHntqDCyo4eL8DW2vXR4Laya03CkfbHChnUjb29IQqBnXwtSpjFooC2W8CCeOfgzhaKHSzWAGME4H2dJGBxNu1savoV-jhA5fmIlzoJIOvK9MpKTIG21da1c7Q0FSYvxjvSh51LbMcnDyYQViBpvF_Sl'
    }
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white">
      <Header cartCount={cartItems.length} />

      <main className="max-w-[1440px] mx-auto px-10 lg:px-40 py-8">
        {/* Breadcrumbs & Header */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-primary text-lg font-medium hover:underline">Home</Link>
            <span className="text-outline text-lg">/</span>
            <span className="text-on-surface text-lg">Cart</span>
          </div>
          <h1 className="text-4xl uppercase font-bold tracking-tight">
            Shopping Cart <span className="text-outline text-2xl font-normal ml-4">[{cartItems.length > 0 ? '0' + cartItems.length : '00'} ITEMS]</span>
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-0 border border-on-surface bg-white">
          {/* CART ITEMS LIST (8/12 columns) */}
          <div className="col-span-12 lg:col-span-8 border-r border-on-surface">
            {/* Column Headers */}
            <div className="grid grid-cols-8 p-4 border-b border-on-surface bg-surface-container-low">
              <span className="col-span-4 text-xs uppercase tracking-widest text-outline font-bold">Product Details</span>
              <span className="col-span-2 text-xs uppercase tracking-widest text-outline font-bold text-center">Quantity</span>
              <span className="col-span-2 text-xs uppercase tracking-widest text-outline font-bold text-right">Total Price</span>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-8 p-6 border-b border-on-surface items-center">
                <div className="col-span-4 flex gap-6">
                  <div className="w-32 h-40 bg-surface-variant flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale contrast-125"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-2">
                    <div>
                      <h3 className="text-xl uppercase font-bold">{item.title}</h3>
                      <p className="text-[10px] text-outline mt-1">REF: {item.ref}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm"><span className="text-outline">SIZE:</span> {item.size}</span>
                      <span className="text-sm"><span className="text-outline">COLOR:</span> {item.color}</span>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-xs text-error uppercase font-bold flex items-center gap-2 hover:underline"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span> Remove Item
                    </button>
                  </div>
                </div>

                {/* Quantity */}
                <div className="col-span-2 flex justify-center">
                  <div className="flex items-center border border-on-surface">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-3 py-2 text-lg hover:bg-surface-container-low"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="w-12 text-center border-none focus:ring-0 font-bold"
                    />
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-3 py-2 text-lg hover:bg-surface-container-low"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="col-span-2 text-right">
                  <span className="text-2xl font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}

            {/* Footer of list */}
            <div className="p-6 flex justify-between items-center bg-surface-bright border-t border-on-surface">
              <Link
                to="/shop"
                className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest hover:gap-4 transition-all text-primary hover:text-on-surface"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Continue Shopping
              </Link>
              <div className="text-right">
                <p className="text-xs uppercase text-outline tracking-widest font-bold">Subtotal</p>
                <p className="text-3xl font-bold">${subtotal.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* ORDER SUMMARY (4/12 columns) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col bg-surface">
            <div className="p-8 flex flex-col h-full">
              <h2 className="text-2xl uppercase font-bold mb-8 border-b-2 border-on-surface pb-2">Order Summary</h2>

              <div className="flex flex-col gap-6 mb-12">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase text-outline tracking-widest font-bold">Items ({cartItems.length})</span>
                  <span className="text-base font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase text-outline tracking-widest font-bold">Standard Shipping</span>
                  <span className="text-base font-bold text-primary">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase text-outline tracking-widest font-bold">Tax Estimate (VAT)</span>
                  <span className="text-base font-bold">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-on-surface pt-6 flex justify-between items-end">
                  <div>
                    <span className="text-xs uppercase font-bold text-on-surface tracking-widest">Total Amount</span>
                    <p className="text-sm text-outline">All taxes included</p>
                  </div>
                  <span className="text-3xl font-bold text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4 mt-auto">
                <button className="bg-primary text-white w-full py-5 text-xs uppercase font-bold tracking-widest hover:bg-on-surface transition-colors">
                  Proceed to Checkout
                </button>

                <div className="relative flex items-center justify-center py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-outline-variant"></div>
                  </div>
                  <span className="relative bg-surface px-4 text-xs text-outline uppercase font-bold tracking-widest">Or</span>
                </div>

                <button className="border-2 border-on-surface text-on-surface w-full py-5 text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-3 hover:bg-on-secondary-fixed hover:text-white transition-all">
                  <span className="material-symbols-outlined">currency_bitcoin</span>
                  Pay with Crypto
                </button>
              </div>

              {/* Info Box */}
              <div className="mt-8 flex flex-col gap-4 p-4 border border-outline-variant bg-white">
                <span className="text-xs uppercase font-bold flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  VYBE Authenticity Guarantee
                </span>
                <p className="text-sm text-outline leading-relaxed">
                  Every item in your cart is strictly verified by our technical lab for architectural integrity and material quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;