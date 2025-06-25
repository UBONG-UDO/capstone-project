"use client";
import React from 'react';
import Head from 'next/head';
import MyCarousel from '../components/carousel';


export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Carousel Example</title>
        <meta name="description" content="A simple carousel example in Next.js" />
      </Head>
     <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', background: 'transparent' }}>
  <div className="relative">
    {/* Carousel */}
    <MyCarousel />

    {/* Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
      <h1 className="text-white text-6xl font-black text-center drop-shadow-lg">
        Power Your Future With <br />
        <span className="text-blue-700">Solar Technology</span>
      </h1>
      <p className="font-black text-center leading-loose mt-4 drop-shadow">
        ...Pure sine wave inverter for reliable power conversion<br />
        ...High-efficiency panel for maximum energy generation <br />
        ...Advanced MPPT technology for optimal performance
      </p>
      <button
        className="mt-8 border-2 rounded-[5px] text-blue-950 font-bold text-2xl px-8 py-3 bg-white/80 hover:bg-white pointer-events-auto"
      >
        SHOP NOW
      </button>
    </div>
  </div>
</main>

    </>
  );
}
