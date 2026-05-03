import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-on-surface text-white py-16 px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/20 pb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-primary-container flex items-center justify-center rounded-none">
                <svg fill="white" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase">VYBE</span>
            </div>
            <p className="text-outline-variant text-sm">Technical minimalism engineered for peak digital performance.</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-outline-variant">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-outline-variant">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-outline-variant">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex justify-between items-center text-xs tracking-widest text-outline-variant uppercase">
          <p>&copy; 2024 VYBE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
