"use client"; // if using inside a client component
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-lg">
      <div className="relative h-80 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cove "
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-green-600 font-bold text-xl">
            ₦{product.price}
          </span>
          {product.oldPrice && (
            <span className="line-through text-gray-400 text- font-bold">
              ₦{product.oldPrice}
            </span>
          )}
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
