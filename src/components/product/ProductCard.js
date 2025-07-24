"use client";
import React, { useState } from "react";
// import ProductCard from "@/components/ui/productCard";
import ProductCard from "../ui/productCard";
import ProductFilters from "@/components/product/ProductFilters";
import { useCart } from "@/contexts/CartContext";

const sampleProduct = [ /* your products as defined */ ];

export default function ProductsPage({ searchTerm = "", selectedCategory = "", sortBy = "" }) {
  const [search, setSearch] = useState(searchTerm);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState(sortBy);
  const { addToCart } = useCart();

  let filtered = sampleProduct.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  if (category && category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (sort === "price-low") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "rating") {
    filtered = filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <main className="bg-gray-100">
      <ProductFilters
        searchTerm={search}
        selectedCategory={category}
        sortBy={sort}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />
      <div className="p-8 flex flex-wrap gap-10 justify-center">
        {filtered.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard product={product} />
            {product.inStock ? (
              <button
                onClick={() => addToCart(product, 1)}
                className="mt-2 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
              >
                Add to Cart
              </button>
            ) : (
              <div className="mt-2 w-full text-center text-red-600 font-semibold">
                Out of Stock
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}