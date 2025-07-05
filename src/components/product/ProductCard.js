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



// // components/ui/productCard.js
// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Star, ShoppingCart } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { useCart } from '@/contexts/CartContext';
// import { cn } from '@/lib/utils';

// export default function ProductCard({ product, className }) {
//   const { addToCart } = useCart();

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addToCart(product);
//   };

//   return (
//     <Link href={`/product/${product.id}`}>
//       <div className={cn(
//         "group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300",
//         className
//       )}>
//         <div className="relative aspect-square overflow-hidden bg-gray-100">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//           {product.oldPrice && (
//             <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
//               Save ₦{(product.oldPrice - product.price).toLocaleString()}
//             </Badge>
//           )}
//           {!product.inStock && (
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <Badge variant="destructive">Out of Stock</Badge>
//             </div>
//           )}
//         </div>

//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900 transition-colors line-clamp-2 mb-2">
//             {product.name}
//           </h3>

//           <div className="flex items-center space-x-1 mb-2">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={cn(
//                   "h-4 w-4",
//                   i < Math.floor(product.rating || 0)
//                     ? "text-yellow-400 fill-current"
//                     : "text-gray-300"
//                 )}
//               />
//             ))}
//             <span className="text-sm text-gray-600 ml-1">
//               ({product.reviews || 0})
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-3">
//             <div className="flex items-center space-x-2">
//               <span className="text-xl font-bold text-gray-900">
//                 ₦{product.price.toLocaleString()}
//               </span>
//               {product.oldPrice && (
//                 <span className="text-sm text-gray-500 line-through">
//                   ₦{product.oldPrice.toLocaleString()}
//                 </span>
//               )}
//             </div>
//           </div>

//           <Button
//             onClick={handleAddToCart}
//             disabled={!product.inStock}
//             className="w-full bg-blue-900 hover:bg-blue-800 text-white"
//             size="sm"
//           >
//             <ShoppingCart className="h-4 w-4 mr-2" />
//             {product.inStock ? 'Add to Cart' : 'Out of Stock'}
//           </Button>
//         </div>
//       </div>
//     </Link>
//   );
// }






// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Star, ShoppingCart } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { useCart } from '@/contexts/CartContext';
// import { cn } from '@/lib/utils';

// export default function ProductCard({ product, className }) {
//   const { addToCart } = useCart();

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addToCart(product);
//   };

//   return (
//     <Link href={`/product/${product.id}`}>
//       <div className={cn(
//         "group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300",
//         className
//       )}>
//         <div className="relative aspect-square overflow-hidden bg-gray-100">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//           {product.originalPrice && (
//             <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
//               Save ${(product.originalPrice - product.price).toFixed(0)}
//             </Badge>
//           )}
//           {!product.inStock && (
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <Badge variant="destructive">Out of Stock</Badge>
//             </div>
//           )}
//         </div>

//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900 transition-colors line-clamp-2 mb-2">
//             {product.name}
//           </h3>

//           <div className="flex items-center space-x-1 mb-2">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={cn(
//                   "h-4 w-4",
//                   i < Math.floor(product.rating)
//                     ? "text-yellow-400 fill-current"
//                     : "text-gray-300"
//                 )}
//               />
//             ))}
//             <span className="text-sm text-gray-600 ml-1">
//               ({product.reviews})
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-3">
//             <div className="flex items-center space-x-2">
//               <span className="text-xl font-bold text-gray-900">
//                 ${product.price.toFixed(2)}
//               </span>
//               {product.originalPrice && (
//                 <span className="text-sm text-gray-500 line-through">
//                   ${product.originalPrice.toFixed(2)}
//                 </span>
//               )}
//             </div>
//           </div>

//           <Button
//             onClick={handleAddToCart}
//             disabled={!product.inStock}
//             className="w-full bg-blue-900 hover:bg-blue-800 text-white"
//             size="sm"
//           >
//             <ShoppingCart className="h-4 w-4 mr-2" />
//             {product.inStock ? 'Add to Cart' : 'Out of Stock'}
//           </Button>
//         </div>
//       </div>
//     </Link>
//   );
// }