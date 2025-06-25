"use client";
import { useState } from "react";
import MaxWidthContainer from "./max-width-container";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

 
export default function Header() {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <header className=" bg-gray-800">
      <MaxWidthContainer className="flex lg:gap-45 justify-between items-center px-20 py- relative">
        <div className="w-fit cursor-pointer">
          <h1 className=" flex gap-1 py-4 text-4xl font-bold text-white">UB <span className="text-[20px] mt-3.5">Solar</span> </h1>
        </div>

        {isMobileNavbarOpen ? (
          <X className="lg:hidden block cursor-pointer size-10 text-white z-50" onClick={() => setIsMobileNavbarOpen(false)} />
        ) : (
          <Menu
            className="lg:hidden block cursor-pointer size-10 text-white z-50"
            onClick={() => setIsMobileNavbarOpen(true)}
          />
        )}

        <div
          className={`flex-col items-center gap-8 left-0 lg:flex lg:flex-row lg:justify-between lg:items-center w-full ${
            isMobileNavbarOpen ? "flex h-screen absolute top-28" : "hidden"
          }`}
        >
         
         <div className="flex items-center gap-3">
          <input
            type="search"
            name="search"
            id="search"
            className="bg-white cursor-auto border dark:border-white border-white py-2 px-2 w-[350px] rounded-lg focus:border-2 focus:dark:border-white focus:border-black focus:outline-none"
          />
          <div className="text-white "><Link href=""><Search /></Link></div>
          </div>
          

          <nav>
            <ul className="flex-col lg:flex-row space-x-8  flex gap-6 text-lg font-semibold text-white">
             <li>
                  <Link href="">Home</Link>
                </li>
                <li>
                  <Link href="">About Us</Link>
                </li>
                <li>
                  <Link href="">Shop</Link>
                </li>
                <li>
                  <Link href="">Past Projects</Link>
                </li>
                <li>
                  <Link href="">Contact Us</Link>
                </li>
                 <li>
                  <Link href=""><ShoppingCart /> </Link>
                </li>
            </ul>
          </nav>
        </div>
      </MaxWidthContainer>
    </header>
  );
}
