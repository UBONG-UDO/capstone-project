"use client";
import React from 'react';
import Head from 'next/head';
import MyCarousel from '../ui/carousel';
import Link from 'next/link';
import { Button } from '../ui/button';


export default function hero() {
  return (
    <div className="mt-[71px]"
          style={{
            backgroundImage: `url('./images/panelbgBright.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
              >
    <>
     <main style={{ maxWidth: '750px', margin: '0 auto', padding: '2rem', background: 'transparent' }}>
  <div className="relative">
    <MyCarousel />

    {/* Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
      <h1 className="text-white text-shadow-border text-[30px] font-bold lg:text-[73px] sm:text-[48px] lg:font-black sm:font-bold text-center drop-shadow-lg 
        lg:text-nowrap sm:text-wra">
        Power Your Future With <br />
        <span className="text-blue-700 lg:text-[30px]text-[28px] whitespace-nowrap">Solar Technology</span>
      </h1>
      <p className="font-medium lg:text-2xl sm:text-base text-sm text-white text-center leading-loose mt-4 drop-shadow">
        ...Pure sine wave inverter for reliable power conversion<br />
      </p>
      <div className='mt-2 lg:mt-6 flex flex-col justify-center sm:space-x-5 sm:flex-row sm:justify-center sm:item-center 
      lg:space-x-5  lg:flex-row lg:justify-center lg:items-center'>
      <button
        className=" rounded-[10px] text-white font-bold text-2xl px-2 lg:px-8 sm:px-3 
       py-1.5 lg:py-3 sm:py-1.5  bg-blue-950 hover:bg-blue-900 pointer-events-auto"><Link href="/shop">
        SHOP NOW
      </Link></button>
      <button
        className="mt-3 py-2 border-2 border-blue-950 rounded-[10px] text-blue-950 font-bold text-base lg:mt-0.5 lg:py-3 lg:px-8 sm:py- 
        sm:px-3 sm:mt-0 bg-white/80 hover:bg-white pointer-events-auto"><Link href="/auth">
        Login/Register
      </Link></button>
      </div>
    </div>
  </div>
</main>
    </>
    </div>
  );
}
