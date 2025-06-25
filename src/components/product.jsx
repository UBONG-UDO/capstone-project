"use client";
import React from 'react';
import ProductCard from "@/components/productCard";
// import MaxWidthContaner from './max-width-container';

const sampleProduct = [
  {
    name: "Felicity Inverter 7.5kVA 48V",
    price: "1,149,450",
    oldPrice: "1,285,450",
    image: "/images/afelicity-7.5KVA-48V-inverter-pure-sinewave-inverter-with-120A-mppt.jpeg",
  },
  {
    name: "Felicity Inverter 5kVA 24V",
    price: "650,600",
    oldPrice: "700,000",
    image: "/images/a5kva-felicity-inverter.webp",
  },
  {
    name: "Mpower Inverter 1100VA 12V Hybrid",
    price: "420,000",
    oldPrice: "480,000",
    image: "/images/aMpower-1100VA-12V-hybrid-pure-sinewave.jpeg",
  },
  {
  name: "FELICITY 48V/15KWH Lithium Battery (Standing)",
    price: "2,850,000",
    oldPrice: "3,000,000",
    image: "/images/bFELICITY-48V-15KWH-lithium-battery-STANDING-₦2,850,000.00.jpeg",
  },
   {
  name: "12v Aurora Lithium ion Battery 25.6kwh",
    price: "510,000",
    oldPrice: "550,000",
    image: "/images/b12v-Aurora-Lithium-Battery  ₦510,000.00  Aurora 25.6kwh Lithium ion Battery ( 12.8V200AH) (12v system).png",
  },
   {
    name: "Mpower lead acid  Tubular battery",
    price: "270,000",
    oldPrice: "289,000",
    image: "/images/bmpower lead acid battery.jpg",
  },
   {
    name: "MPPT Solar Charge Controller 60A 12V24V36V48V Auto",
    price: "204,300",
    oldPrice: "253,500",
    image: "/images/cMPPT Solar Charge Controller 60A 12V24V36V48V Auto, 60Amp Solar Regulator ... s-l1600  N204,367.webp",
  },
   {
    name: "PowMr 60A MPPT Solar Charge Controller 12-48V",
    price: "96,500",
    oldPrice: "154,400",
    image: "/images/cPowMr 60A MPPT Solar Charge Controller 12-48V Max PV 190VDC 96,519  154,417.jpg",
  },
   {
    name: "Solar Charge Controller 60A-12-24-36-48v PWM",
    price: "64,000",
    oldPrice: "70,000",
    image: "/images/cSolar Charge Controller 60A-12-24-36-48v PWM 64000.jpeg",
  },
   {
    name: "Solar Panel 300W",
    price: "87,000",
    oldPrice: "89,500",
    image: "/images/dSolar Panel imagess.jpg",
  },
   {
    name: "Solar Panel",
    price: "64,000",
    oldPrice: "70,000",
    image: "/images/dSolarPanel.webp",
  },
];
export default function HomePage() {
  return (
    <main className="p-8 flex flex-wrap gap-6 justify-center">
      {sampleProduct.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </main>
  );
}