"use client";
import React, { useState } from "react";
import ProductCard from "@/components/ui/productCard";
import ProductFilters from "@/components/product/ProductFilters";
// import { useCart } from "@/contexts/cartContext";
import { useCart } from "@/app/contexts/cartContext";

const sampleProduct = [ /* your products as defined */
  {
    id: 1,
    name: "Felicity Inverter 7.5kVA 48V",
    price: 1149450,
    oldPrice: 1285450,
    image: "/images/afelicity-7.5KVA-48V-inverter-pure-sinewave-inverter-with-120A-mppt.jpeg",
    category: "inverter",
    rating: 4.5,
    reviews: 12,
    inStock: true,
  },
  {
    id: 2,
    name: "Felicity Inverter 5kVA 24V",
    price: 650600,
    oldPrice: 700000,
    image: "/images/a5kva-felicity-inverter.webp",
    category: "inverter",
    rating: 4.2,
    reviews: 8,
    inStock: true,
  },
  {
    id: 3,
    name: "Mpower Inverter 1100VA 12V Hybrid",
    price: 420000,
    oldPrice: 480000,
    image: "/images/aMpower-1100VA-12V-hybrid-pure-sinewave.jpeg",
    category: "inverter",
    rating: 4.0,
    reviews: 5,
    inStock: false,
  },
  {
    id: 4,
    name: "FELICITY 48V/15KWH Lithium Battery (Standing)",
    price: 2850000,
    oldPrice: 3000000,
    image: "/images/bFELICITY-48V-15KWH-lithium-battery-STANDING-₦2,850,000.00.jpeg",
    category: "battery",
    rating: 4.7,
    reviews: 10,
    inStock: true,
  },
  {
    id: 5,
    name: "12v Aurora Lithium ion Battery 25.6kwh",
    price: 510000,
    oldPrice: 550000,
    image: "/images/b12v-Aurora-Lithium-Battery  ₦510,000.00  Aurora 25.6kwh Lithium ion Battery ( 12.8V200AH) (12v system).png",
    category: "battery",
    rating: 4.3,
    reviews: 7,
    inStock: true,
  },
  {
    id: 6,
    name: "Mpower lead acid  Tubular battery",
    price: 270000,
    oldPrice: 289000,
    image: "/images/bmpower lead acid battery.jpg",
    category: "battery",
    rating: 3.9,
    reviews: 4,
    inStock: true,
  },
  {
    id: 7,
    name: "MPPT Solar Charge Controller 60A 12V24V36V48V Auto",
    price: 204300,
    oldPrice: 253500,
    image: "/images/cMPPT Solar Charge Controller 60A 12V24V36V48V Auto, 60Amp Solar Regulator ... s-l1600  N204,367.webp",
    category: "charge-controller",
    rating: 4.6,
    reviews: 9,
    inStock: true,
  },
  {
    id: 8,
    name: "PowMr 60A MPPT Solar Charge Controller 12-48V",
    price: 96500,
    oldPrice: 154400,
    image: "/images/cPowMr 60A MPPT Solar Charge Controller 12-48V Max PV 190VDC 96,519  154,417.jpg",
    category: "charge-controller",
    rating: 4.1,
    reviews: 6,
    inStock: false,
  },
  {
    id: 9,
    name: "Solar Charge Controller 60A-12-24-36-48v PWM",
    price: 64000,
    oldPrice: 70000,
    image: "/images/cSolar Charge Controller 60A-12-24-36-48v PWM 64000.jpeg",
    category: "charge-controller",
    rating: 3.8,
    reviews: 3,
    inStock: true,
  },
  {
    id: 10,
    name: "Solar Panel 300W",
    price: 87000,
    oldPrice: 89500,
    image: "/images/dSolar Panel imagess.jpg",
    category: "solar-panel",
    rating: 4.4,
    reviews: 11,
    inStock: true,
  },
  {
    id: 11,
    name: "Solar Panel",
    price: 64000,
    oldPrice: 70000,
    image: "/images/dSolarPanel.webp",
    category: "solar-panel",
    rating: 4.0,
    reviews: 5,
    inStock: true,
  },
 ];

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

// "use client"; // if using inside a client component
// import Image from "next/image";

// export default function ProductCard({ product }) {
//   return (
//     <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-lg">
//       <div className="relative h-80 w-full">
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cove "
//         />
//       </div>
//       <div className="p-4">
//         <h2 className="text-lg font-semibold">{product.name}</h2>
//         <div className="flex items-ce nter space-x-2 mt-1">
//           <span className="text-green-600 font-bold text-xl">
//             ₦{product.price}
//           </span>
//           {product.oldPrice && (
//             <span className="line-through text-gray-400 text- font-bold">
//               ₦{product.oldPrice}
//             </span>
//           )}
//         </div>
//         <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
