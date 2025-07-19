"use client";
import React, { useState } from "react";
// import ProductsPage from "@/app/products/page";
import ProductsPage from "@/components/product/page";
import MaxWidthContainer from "@/components/ui/max-width-container";

const categoryLinks = [
  { id: 'inverter', name: 'Inverter' },
  { id: 'battery', name: 'Battery' },
  { id: 'solar-panel', name: 'Solar Panel' },
  { id: 'charge-controller', name: 'Charge Controller' },
  { id: 'dc-circuit-breaker', name: 'DC Circuit Breaker' },
  { id: 'dc-cable', name: 'DC Cable' },
  { id: 'battery-rack', name: 'Battery Rack' },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div>
      <div className="pb-12">
        <section className="bg-blue-900 text-white py-15">
          <div>
            <p className="text-5xl font-black flex justify-center pb-8">Shop</p>
            <ul className="lg:flex lg:justify-center text-base font-bold space-x-14 hidden">
              {categoryLinks.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={`focus:outline-none ${selectedCategory === cat.id ? 'underline' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={`focus:outline-none ${selectedCategory === 'all' ? 'underline' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <MaxWidthContainer>
        <ProductsPage selectedCategory={selectedCategory} />
      </MaxWidthContainer>
    </div>
  );
}
