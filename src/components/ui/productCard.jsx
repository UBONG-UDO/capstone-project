// components/ui/ProductCard.jsx

"use client";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
      {/* Image container */}
      <div className="w-full h- overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product details */}
      <h3 className="mt-4 text-lg font-semibold text-center">{product.name}</h3>

      <div className="mt-1 text-center">
        <p className="text-gray-800 text-base font-bold">
          ₦{product.price.toLocaleString()}
        </p>
        {product.oldPrice && (
          <p className="text-red-500 text-sm line-through">
            ₦{product.oldPrice.toLocaleString()}
          </p>
        )}
      </div>

      {/* Rating (optional) */}
      {/* {product.rating && (
        <div className="mt-2 text-yellow-500 text-sm">
          ⭐ {product.rating} / 5
        </div>
      )} */}
    </div>
  );
}