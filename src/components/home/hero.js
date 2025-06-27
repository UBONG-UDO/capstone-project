"use client";
import React from 'react';
import Head from 'next/head';
import MyCarousel from '../ui/carousel';
import Link from 'next/link';
// import backgroundImage from

export default function Home() {
  return (
    <div className=""
          style={{
            // backgroundImage: `url('./images/bg.png')`,
            backgroundImage: `url('./images/pbg (3).jpeg')`,
            // backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
              >
    <>
      {/* <Head className='pt-0.5 z-50'>
        <title className='text-black text-9xl font-black'>Next.js Carousel Example</title>
        <meta name="description" content="A simple carousel example in Next.js" />
      </Head> */}
     <main style={{ maxWidth: '750px', margin: '0 auto', padding: '2rem', background: 'transparent' }}>
  <div className="relative">
    {/* Carousel */}
    <MyCarousel />

    {/* Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
      <h1 className="text-white text-shadow-border text-[35px] font-bold lg:text-[73px] sm:text-[48px] lg:font-black sm:font-bold text-center drop-shadow-lg 
        lg:text-nowrap sm:text-wra">
        Power Your Future With <br />
        <span className="text-blue-700">Solar Technology</span>
      </h1>
      <p className="font-medium lg:text-2xl sm:text-base text-white text-center leading-loose mt-4 drop-shadow">
        ...Pure sine wave inverter for reliable power conversion<br />
      </p>
      
      <button
        className="mt-8 border-2 border-blue-950 rounded-[10px] text-blue-950 font-bold text-2xl px-2 lg:px-8 sm:px-3 
       py-1.5 lg:py-3 sm:py-1.5  bg-white/80 hover:bg-white pointer-events-auto"><Link href="">
        SHOP NOW
      </Link></button>
    </div>
  </div>
</main>
    </>
    </div>
  );
}
