"use client";
import React, { useState } from "react";
import ProductCard from "@/components/ui/productCard";
import ProductFilters from "@/components/product/ProductFilters";
import { useCart } from "@/app/contexts/cartContext";

const sampleProduct = [
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
    image: "/images/bFELICITY-48V-15KWH-lithium-battery-STANDING.jpeg",
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
    image: "/images/b12v-Aurora-Lithium-Battery.png",
    category: "battery",
    rating: 4.3,
    reviews: 7,
    inStock: true,
  },
  {
    id: 6,
    name: "Mpower Lead Acid Tubular Battery",
    price: 270000,
    oldPrice: 289000,
    image: "/images/bmpower-lead-acid-battery.jpg",
    category: "battery",
    rating: 3.9,
    reviews: 4,
    inStock: true,
  },
  {
    id: 7,
    name: "MPPT Solar Charge Controller 60A",
    price: 204300,
    oldPrice: 253500,
    image: "/images/cPowMr-60A-MPPT-Solar-Charge-Controller-12-48V.jpg",
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
    image: "/images/controller.png",
    category: "charge-controller",
    rating: 4.1,
    reviews: 6,
    inStock: true,
  },
  {
    id: 9,
    name: "Solar Charge Controller PWM 60A",
    price: 64000,
    oldPrice: 70000,
    image: "/images/cSolar-Charge-Controller-60A-12-24-36-48v PWM-64000.jpeg",
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
    image: "/images/dSolar-Panel-images.jpg",
    category: "solar-panel",
    rating: 4.4,
    reviews: 11,
    inStock: true,
  },
  {
    id: 11,
    name: "Generic Solar Panel",
    price: 64000,
    oldPrice: 70000,
    image: "/images/dSolarPanel.webp",
    category: "solar-panel",
    rating: 4.0,
    reviews: 5,
    inStock: true,
  },
];

export default function ProductsPage({
  searchTerm = "",
  selectedCategory = "all",
  sortBy = "",
  onSearchChange,
  onCategoryChange,
  onSortChange,
}) {
  const [showAlert, setShowAlert] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  // Filtering
  let filtered = sampleProduct.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedCategory !== "all") {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);

  return (
    <main className="bg-gray-100 min-h-screen p-8 relative">
      {showAlert && (
        <div className="fixed top-19 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded shadow-lg z-50 transition">
          ✅ Added to cart!
        </div>
      )}

      {/* Filters */}
      <ProductFilters
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        onSearchChange={onSearchChange}
        onCategoryChange={onCategoryChange}
        onSortChange={onSortChange}
      />

      {/* Products */}
      <div className="flex flex-wrap gap-20 justify-center py-10">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div key={product.id} className="relative w-full max-w-xs">
              <ProductCard product={product} />
              {product.inStock ? (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="mt-2 text-red-600 font-semibold text-center">
                  Out of Stock
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No products found.</p>
        )}
      </div>
    </main>
  );
}





// "use client";
// import React, { useState } from "react";
// import ProductCard from "@/components/ui/productCard";
// import ProductFilters from "@/components/product/ProductFilters";
// import { useCart } from "@/app/contexts/cartContext";

// const sampleProduct = [
//   {
//     id: 1,
//     name: "Felicity Inverter 7.5kVA 48V",
//     price: 1149450,
//     oldPrice: 1285450,
//     image: "/images/afelicity-7.5KVA-48V-inverter-pure-sinewave-inverter-with-120A-mppt.jpeg",
//     category: "inverter",
//     rating: 4.5,
//     reviews: 12,
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Felicity Inverter 5kVA 24V",
//     price: 650600,
//     oldPrice: 700000,
//     image: "/images/a5kva-felicity-inverter.webp",
//     category: "inverter",
//     rating: 4.2,
//     reviews: 8,
//     inStock: true,
//   },
//   {
//     id: 3,
//     name: "Mpower Inverter 1100VA 12V Hybrid",
//     price: 420000,
//     oldPrice: 480000,
//     image: "/images/aMpower-1100VA-12V-hybrid-pure-sinewave.jpeg",
//     category: "inverter",
//     rating: 4.0,
//     reviews: 5,
//     inStock: false,
//   },
//   {
//     id: 4,
//     name: "FELICITY 48V/15KWH Lithium Battery (Standing)",
//     price: 2850000,
//     oldPrice: 3000000,
//     image: "/images/bFELICITY-48V-15KWH-lithium-battery-STANDING.jpeg",
//     category: "battery",
//     rating: 4.7,
//     reviews: 10,
//     inStock: true,
//   },
//   {
//     id: 5,
//     name: "12v Aurora Lithium ion Battery 25.6kwh",
//     price: 510000,
//     oldPrice: 550000,
//     image: "/images/b12v-Aurora-Lithium-Battery.png",
//     category: "battery",
//     rating: 4.3,
//     reviews: 7,
//     inStock: true,
//   },
//   {
//     id: 6,
//     name: "Mpower Lead Acid Tubular Battery",
//     price: 270000,
//     oldPrice: 289000,
//     image: "/images/bmpower-lead-acid-battery.jpg",
//     category: "battery",
//     rating: 3.9,
//     reviews: 4,
//     inStock: true,
//   },
//   {
//     id: 7,
//     name: "MPPT Solar Charge Controller 60A",
//     price: 204300,
//     oldPrice: 253500,
//     image: "/images/cPowMr-60A-MPPT-Solar-Charge-Controller-12-48V.jpg",
//     category: "charge-controller",
//     rating: 4.6,
//     reviews: 9,
//     inStock: true,
//   },
//   {
//     id: 8,
//     name: "PowMr 60A MPPT Solar Charge Controller 12-48V",
//     price: 96500,
//     oldPrice: 154400,
//     image: "/images/controller.png",
//     category: "charge-controller",
//     rating: 4.1,
//     reviews: 6,
//     inStock: true,
//   },
//   {
//     id: 9,
//     name: "Solar Charge Controller PWM 60A",
//     price: 64000,
//     oldPrice: 70000,
//     image: "/images/cSolar-Charge-Controller-60A-12-24-36-48v PWM-64000.jpeg",
//     category: "charge-controller",
//     rating: 3.8,
//     reviews: 3,
//     inStock: true,
//   },
//   {
//     id: 10,
//     name: "Solar Panel 300W",
//     price: 87000,
//     oldPrice: 89500,
//     image: "/images/dSolar-Panel-images.jpg",
//     category: "solar-panel",
//     rating: 4.4,
//     reviews: 11,
//     inStock: true,
//   },
//   {
//     id: 11,
//     name: "Generic Solar Panel",
//     price: 64000,
//     oldPrice: 70000,
//     image: "/images/dSolarPanel.webp",
//     category: "solar-panel",
//     rating: 4.0,
//     reviews: 5,
//     inStock: true,
//   },
// ];

// export default function ProductsPage({ searchTerm = "", selectedCategory = "all", sortBy = "" }) {
//   const [search, setSearch] = useState(searchTerm);
//   const [category, setCategory] = useState(selectedCategory);
//   const [sort, setSort] = useState(sortBy);
//   const [showAlert, setShowAlert] = useState(false);

//   const { addToCart } = useCart();

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setShowAlert(true);
//     setTimeout(() => setShowAlert(false), 2000);
//   };

//   let filtered = sampleProduct.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   if (category !== "all") {
//     filtered = filtered.filter((p) => p.category === category);
//   }

//   if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
//   else if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
//   else if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
//   else if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

//   return (
//     <main className="bg-gray-100 min-h-screen p-8 relative">
//       {showAlert && (
//         <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded shadow-lg z-50 transition">
//           ✅ Added to cart!
//         </div>
//       )}

//       <ProductFilters
//         searchTerm={search}
//         selectedCategory={category}
//         sortBy={sort}
//         onSearchChange={setSearch}
//         onCategoryChange={setCategory}
//         onSortChange={setSort}
//       />

//       <div className="flex flex-wrap gap-20 justify-center py-10">
//         {filtered.map((product) => (
//           <div key={product.id} className="relative w-full max-w-xs">
//             <ProductCard product={product} />
//             {product.inStock ? (
//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//               >
//                 Add to Cart
//               </button>
//             ) : (
//               <div className="mt-2 text-red-600 font-semibold text-center">
//                 Out of Stock
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }






// "use client";     // WITHOUT ALERT ADD TO CART
// import React, { useState } from "react";
// import ProductCard from "@/components/ui/productCard";
// import ProductFilters from "@/components/product/ProductFilters";
// import { useCart } from "@/app/contexts/cartContext";

// const sampleProduct = [/* your existing 11 products */
//    {
//     id: 1,
//     name: "Felicity Inverter 7.5kVA 48V",
//     price: 1149450,
//     oldPrice: 1285450,
//     image: "/images/afelicity-7.5KVA-48V-inverter-pure-sinewave-inverter-with-120A-mppt.jpeg",
//     category: "inverter",
//     rating: 4.5,
//     reviews: 12,
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Felicity Inverter 5kVA 24V",
//     price: 650600,
//     oldPrice: 700000,
//     image: "/images/a5kva-felicity-inverter.webp",
//     category: "inverter",
//     rating: 4.2,
//     reviews: 8,
//     inStock: true,
//   },
//   {
//     id: 3,
//     name: "Mpower Inverter 1100VA 12V Hybrid",
//     price: 420000,
//     oldPrice: 480000,
//     image: "/images/aMpower-1100VA-12V-hybrid-pure-sinewave.jpeg",
//     category: "inverter",
//     rating: 4.0,
//     reviews: 5,
//     inStock: false,
//   },
//   {
//     id: 4,
//     name: "FELICITY 48V/15KWH Lithium Battery (Standing)",
//     price: 2850000,
//     oldPrice: 3000000,
//     image: "/images/bFELICITY-48V-15KWH-lithium-battery-STANDING.jpeg",
//     category: "battery",
//     rating: 4.7,
//     reviews: 10,
//     inStock: true,
//   },
//   {
//     id: 5,
//     name: "12v Aurora Lithium ion Battery 25.6kwh",
//     price: 510000,
//     oldPrice: 550000,
//     image: "/images/b12v-Aurora-Lithium-Battery.png",
//     category: "battery",
//     rating: 4.3,
//     reviews: 7,
//     inStock: true,
//   },
//   {
//     id: 6,
//     name: "Mpower Lead Acid Tubular Battery",
//     price: 270000,
//     oldPrice: 289000,
//     image: "/images/bmpower-lead-acid-battery.jpg",
//     category: "battery",
//     rating: 3.9,
//     reviews: 4,
//     inStock: true,
//   },
//   {
//     id: 7,
//     name: "MPPT Solar Charge Controller 60A",
//     price: 204300,
//     oldPrice: 253500,
//     image: "/images/cPowMr-60A-MPPT-Solar-Charge-Controller-12-48V.jpg",
//     category: "charge-controller",
//     rating: 4.6,
//     reviews: 9,
//     inStock: true,
//   },
//   {
//     id: 8,
//     name: "PowMr 60A MPPT Solar Charge Controller 12-48V",
//     price: 96500,
//     oldPrice: 154400,
//     image: "/images/controller.png",
//     category: "charge-controller",
//     rating: 4.1,
//     reviews: 6,
//     inStock: true,
//   },
//   {
//     id: 9,
//     name: "Solar Charge Controller PWM 60A",
//     price: 64000,
//     oldPrice: 70000,
//     image: "/images/cSolar-Charge-Controller-60A-12-24-36-48v PWM-64000.jpeg",
//     category: "charge-controller",
//     rating: 3.8,
//     reviews: 3,
//     inStock: true,
//   },
//   {
//     id: 10,
//     name: "Solar Panel 300W",
//     price: 87000,
//     oldPrice: 89500,
//     image: "/images/dSolar-Panel-images.jpg",
//     category: "solar-panel",
//     rating: 4.4,
//     reviews: 11,
//     inStock: true,
//   },
//   {
//     id: 11,
//     name: "Generic Solar Panel",
//     price: 64000,
//     oldPrice: 70000,
//     image: "/images/dSolarPanel.webp",
//     category: "solar-panel",
//     rating: 4.0,
//     reviews: 5,
//     inStock: true,
//   },
// ];

// export default function ProductsPage({ searchTerm = "", selectedCategory = "all", sortBy = "" }) {
//   const [search, setSearch] = useState(searchTerm);
//   const [category, setCategory] = useState(selectedCategory);
//   const [sort, setSort] = useState(sortBy);

//   const { addToCart } = useCart();

//   let filtered = sampleProduct.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   if (category !== "all") {
//     filtered = filtered.filter((p) => p.category === category);
//   }

//   if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
//   else if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
//   else if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
//   else if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

//   return (
//     <main className="bg-gray-100 min-h-screen p-8">
//       <ProductFilters
//         searchTerm={search}
//         selectedCategory={category}
//         sortBy={sort}
//         onSearchChange={setSearch}
//         onCategoryChange={setCategory}
//         onSortChange={setSort}
//       />
//       <div className="flex flex-wrap gap-20 justify-center py-10">
//         {filtered.map((product) => (
//           <div key={product.id} className="relative w-full max-w-xs">
//             <ProductCard product={product} />
//             {product.inStock ? (
//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//               >
//                 Add to Cart
//               </button>
//             ) : (
//               <div className="mt-2 text-red-600 font-semibold text-center">
//                 Out of Stock
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
