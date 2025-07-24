"use client";

import { useState } from "react";
import MaxWidthContainer from "../ui/max-width-container";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/app/contexts/cartContext";

export default function Header({ searchTerm, onSearchChange }) {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const { cartItems } = useCart();

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const closeMobileMenu = () => {
    setIsMobileNavbarOpen(false);
  };

  return (
    <header className="bg-gray-800 fixed top-0 left-0 right-0 z-50 shadow-md">
      <MaxWidthContainer className="flex lg:gap-45 justify-between items-center px-4 md:px-20 py-4 relative">
        <div className="cursor-pointer">
          <h1 className="flex gap-1 text-4xl font-bold text-white">
            UB <span className="text-[20px] mt-3.5">Solar</span>
          </h1>
        </div>

<div className="text-white lg:hidden relative">
  <Link href="/cart" onClick={closeMobileMenu}>
    <div className="relative flex items-center">
      <ShoppingCart />
      {getTotalItems() > 0 && (
        <span
          className="absolute -top-2 -right-2 bg-red-600 text-white
                     text-xs w-5 h-5 rounded-full flex items-center justify-center"
        >
          {getTotalItems()}
        </span>
      )}
    </div>
  </Link>
</div>

          {isMobileNavbarOpen ? (
          <X
            className="lg:hidden block cursor-pointer size-10 text-white"
            onClick={() => setIsMobileNavbarOpen(false)}
          />
        ) : (
          <Menu
            className="lg:hidden block cursor-pointer size-10 text-white"
            onClick={() => setIsMobileNavbarOpen(true)}
          />
        )}

        <div
          className={`flex-col items-center gap-8 left-0 lg:flex lg:flex-row lg:justify-between lg:items-center w-full transition-all duration-300 ${
            isMobileNavbarOpen
              ? "flex h-[420px] bg-gray-400 z-20 absolute top-18"
              : "hidden lg:flex"
          }`}
        >
          {/* Synced Search */}
          <div className="flex items-center gap-3 pt-8 lg:pt-0 z-50">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search products..."
              className="bg-white border py-2 px-2 w-[250px] rounded-lg focus:outline-none"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          {/* Nav Links */}
          <nav className="z-50">
            <ul className="flex-col lg:flex-row space-x-0 lg:space-x-8 flex gap-6 text-lg font-semibold lg:text-white">
              <li>
                <Link href="/" onClick={closeMobileMenu}>Home</Link>
              </li>
              <li>
                <Link href="/aboutUs" onClick={closeMobileMenu}>About Us</Link>
              </li>
              <li>
                <Link href="/shop" onClick={closeMobileMenu}>Shop</Link>
              </li>
              <li>
                <Link href="/pastProjects" onClick={closeMobileMenu}>Past Projects</Link>
              </li>
              <li>
                <Link href="/contactUs" onClick={closeMobileMenu}>Contact Us</Link>
              </li>
              <li className="relative">
                <Link href="/cart" onClick={closeMobileMenu}>
                  <ShoppingCart />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </MaxWidthContainer>
    </header>
  );
}