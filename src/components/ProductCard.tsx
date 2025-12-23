import React from "react";
import type { ProductItem } from "../data/dashboard";

type Props = {
  product: ProductItem;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white border border-borderLight rounded-xl shadow-card flex items-stretch overflow-hidden">
      {/* left: star + text */}
      <div className="flex-1 p-3 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <button
            className="text-yellow-500 text-lg leading-none"
            aria-label="Mark as favorite"
          >
            ★
          </button>
        </div>
        <div className="mt-1">
          <p className="text-sm font-medium leading-snug">
            {product.name}
          </p>
          <p className="text-xs text-textMuted mt-1">
            Price: {product.price}
          </p>
        </div>
      </div>

      {/* right: image */}
      <div className="w-24 h-20 sm:w-28 sm:h-20 flex-shrink-0">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductCard;
