import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ 
  id, 
  title, 
  price, 
  image, 
  specs, 
  discount = null, 
  onAddToCart = null,
  showConfigureBtn = true 
}) => {
  return (
    <div className="border-r border-b border-on-surface p-8 group cursor-pointer hover:bg-surface transition-colors">
      {/* Product Image */}
      <div className="aspect-square mb-8 overflow-hidden bg-surface-container relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        {discount && (
          <div className="absolute top-4 left-4">
            <span className="bg-error text-on-primary text-[9px] font-label-mono px-2 py-1 uppercase tracking-widest">
              {discount}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-start mb-2">
        <Link to={`/product/${id}`} className="hover:text-primary transition-colors">
          <h4 className="text-headline-md uppercase text-sm font-bold tracking-tight group-hover:text-primary">
            {title}
          </h4>
        </Link>
        <span className="text-sm font-mono">${price.toFixed(2)}</span>
      </div>

      {/* Specs */}
      {specs && (
        <p className="text-[11px] text-secondary uppercase tracking-widest mb-6 font-medium">
          {specs}
        </p>
      )}

      {/* Action Button */}
      <button
        onClick={() => onAddToCart && onAddToCart(id)}
        className="w-full border border-on-surface py-3 text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-on-surface group-hover:text-white transition-colors"
      >
        {showConfigureBtn ? 'Configure' : 'Add To Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
