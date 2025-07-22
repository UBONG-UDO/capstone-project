"use client";

import { useState } from "react";
import MaxWidthContainer from "../ui/max-width-container";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { useCart } from "@/app/contexts/cartContext";

export default function Header() {
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
          {/* Search */}
          <div className="flex items-center gap-3 pt-8 lg:pt-0 z-50">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search products..."
              className="bg-white border py-2 px-2 w-[250px] rounded-lg focus:outline-none"
            />
            <div className="text-white z-50">
              <Link href="">
                <Search />
              </Link>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="z-50">
            <ul className="flex-col lg:flex-row space-x-0 lg:space-x-8 flex gap-6 text-lg font-semibold lg:text-white">
              <li>
                <Link href="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" onClick={closeMobileMenu}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/pastProjects" onClick={closeMobileMenu}>
                  Past Projects
                </Link>
              </li>
              <li>
                <Link href="/contactUs" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
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







// "use client";

// import { useState } from "react";
// import MaxWidthContainer from "../ui/max-width-container";
// import Link from "next/link";
// import { Menu, X, Search, ShoppingCart } from "lucide-react";
// import { useCart } from "@/app/contexts/cartContext";


// export default function Header() {
//   const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");

//   const { cartItems } = useCart();

//   const getTotalItems = () => {
//     return cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   };


//   const handleCategoryChange = (value) => {
//     setSelectedCategory(value);
//     // Call optional external logic here if needed
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     // Call optional external search logic here
//   };

//   return (
//     <header className="bg-gray-800 fixed top-0 left-0 right-0 z-50 shadow-md">
//       <MaxWidthContainer className="flex justify-between items-center px-4 md:px-20 py-4 relative">
//         {/* Logo */}
//         <div className="cursor-pointer">
//           <h1 className="flex gap-1 text-4xl font-bold text-white">
//             UB <span className="text-[20px] mt-3.5">Solar</span>
//           </h1>
//         </div>

//         {/* Mobile Toggle */}
//         {isMobileNavbarOpen ? (
//           <X
//             className="lg:hidden block cursor-pointer size-10 text-white"
//             onClick={() => setIsMobileNavbarOpen(false)}
//           />
//         ) : (
//           <Menu
//             className="lg:hidden block cursor-pointer size-10 text-white"
//             onClick={() => setIsMobileNavbarOpen(true)}
//           />
//         )}

//         {/* Main Nav */}
//         <div
//           className={`flex-col items-center gap-8 left-0 lg:flex lg:flex-row lg:justify-between lg:items-center w-full ${
//             isMobileNavbarOpen
//               ? "flex h-[420px] bg-gray-400 z-20 absolute top-18"
//               : "hidden lg:flex"
//           }`}
//         >
//           {/* Category Filter */}
//           <select
//             value={selectedCategory}
//             onChange={(e) => handleCategoryChange(e.target.value)}
//             className="px-4 py-2 border rounded border-blue-800 bg-white"
//           >
//             <option value="all">All Categories</option>
//             <option value="inverter">Inverter</option>
//             <option value="battery">Battery</option>
//             <option value="solar-panel">Solar Panel</option>
//             <option value="charge-controller">Charge Controller</option>
//           </select>

//           {/* Search Input */}
//           <div className="flex items-center gap-3 pt-8 lg:pt-0 z-50">
//             <input
//               type="search"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search products..."
//               className="bg-white border py-2 px-2 w-[250px] rounded-lg focus:outline-none"
//             />
//             <div className="text-white z-50">
//               <Link href={`/shop?search=${searchTerm}`}>
//                 <Search />
//               </Link>
//             </div>
//           </div>

//           {/* Nav Links */}
//           <nav className="z-50">
//             <ul className="flex-col lg:flex-row space-x-8 flex gap-6 text-lg font-semibold lg:text-white">
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/aboutUs">About Us</Link>
//               </li>
//               <li>
//                 <Link href="/shop">Shop</Link>
//               </li>
//               <li>
//                 <Link href="/pastProjects">Past Projects</Link>
//               </li>
//               <li>
//                 <Link href="/contactUs">Contact Us</Link>
//               </li>
//               <li className="relative">
//                 <Link href="/cart" className="relative">
//                   <ShoppingCart />
//                   {getTotalItems() > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                       {getTotalItems()}
//                     </span>
//                   )}
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </MaxWidthContainer>
//     </header>
//   );
// }







//last commented
// "use client";     // i commented this out to add item search selection at the header
// import { useState } from "react";
// import MaxWidthContainer from "../ui/max-width-container";
// import Link from "next/link";
// import { Menu, X, Search, ShoppingCart } from "lucide-react";
// import { useCart } from "@/app/contexts/cartContext";
// // import {onCategoryChange} from 
// // import {onCategoryChange, selectedCategory} from "@/components/product/products/ProductFilters";


// export default function Header() {
//   const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
//   const { cartItems } = useCart();

// //  default function ProductFilters({
// //   searchTerm,
// //   selectedCategory,
// //   sortBy,
// //   onSearchChange,
// //   onCategoryChange,
// //   onSortChange,
// // }){
//   const getTotalItems = () => {
//     return cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   };
  
//   return (
//     <header className="bg-gray-800 fixed top-0 left-0 right-0 z-50 shadow-md">
//       <MaxWidthContainer className="flex lg:gap-45 justify-between items-center px-4 md:px-20 py-4 relative">
//         <div className="cursor-pointer">
//           <h1 className="flex gap-1 text-4xl font-bold text-white">
//             UB <span className="text-[20px] mt-3.5">Solar</span>
//           </h1>
//         </div>
  
//         {isMobileNavbarOpen ? (
//           <X
//             className="lg:hidden block cursor-pointer size-10 text-white"
//             onClick={() => setIsMobileNavbarOpen(false)}
//           />
//         ) : (
//           <Menu
//             className="lg:hidden block cursor-pointer size-10 text-white"
//             onClick={() => setIsMobileNavbarOpen(true)}
//           />
//         )}
  
//         <div
//           className={`flex-col items-center gap-8 left-0 lg:flex lg:flex-row lg:justify-between lg:items-center w-full ${
//             isMobileNavbarOpen
//               ? "flex h-[420px] bg-gray-400 z-20 absolute top-18"
//               : "hidden"
//           }`}
//         >
//           {/* Search */}
  
  
//   {/* <select
//         value={selectedCategory}
//         onChange={(e) => onCategoryChange(e.target.value)}
//         className="px-4 py-2 border rounded border-blue-800"
//       >
//         <option value="all">All Categories</option>
//         <option value="inverter">Inverter</option>
//         <option value="battery">Battery</option>
//         <option value="solar-panel">Solar Panel</option>
//         <option value="charge-controller">Charge Controller</option>
//       </select> */}
  
  
  
//           <div className="flex items-center gap-3 pt-8 lg:pt-0 z-50">
//             <input
//               type="search"
//               name="search"
//               id="search"
//               className="bg-white border py-2 px-2 w-[250px] rounded-lg focus:outline-none"
//             />
//             <div className="text-white z-50">
//               <Link href="">
//                 <Search />
//               </Link>
//             </div>
//           </div>
  
//           {/* Nav Links */}
//           <nav className="z-50">
//             <ul className="flex-col lg:flex-row space-x-8 flex gap-6 text-lg font-semibold lg:text-white">
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/aboutUs">About Us</Link>
//               </li>
//               <li>
//                 <Link href="/shop">Shop</Link>
//               </li>
//               <li>
//                 <Link href="/pastProjects">Past Projects</Link>
//               </li>
//               <li>
//                 <Link href="/contactUs">Contact Us</Link>
//               </li>
//               <li className="relative">
//                 <Link href="/cart" className="relative">
//                   <ShoppingCart />
//                   {getTotalItems() > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                       {getTotalItems()}
//                     </span>
//                   )}
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </MaxWidthContainer>
//     </header>
//   );
// }
// // }




// "use client";     //commented out on 19/7/2025 to solve the problem of adding the number of items to cart
// import { useState } from "react";
// import MaxWidthContainer from "../ui/max-width-container";
// import Link from "next/link";
// import { Menu, X, Search, ShoppingCart } from "lucide-react";

 
// export default function Header() {
//   const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

//   return (
//     <header className=" bg-gray-800">
//       <MaxWidthContainer className="flex lg:gap-45 justify-between items-center px-20 py- relative">
//         <div className="w-fit cursor-pointer">
//           <h1 className=" flex gap-1 py-4 text-4xl font-bold text-white cursor-auto">UB <span className="text-[20px] mt-3.5">Solar</span> </h1>
//         </div>

//         {isMobileNavbarOpen ? (
//           <X className="lg:hidden block cursor-pointer  size-10 text-white" onClick={() => setIsMobileNavbarOpen(false)} />
//         ) : (
//           <Menu
//             className="lg:hidden block cursor-pointer size-10 text-white"
//             onClick={() => setIsMobileNavbarOpen(true)}
//           />
//         )}

//         <div
//           className={`flex-col items-center gap-8 left-0 lg:flex lg:flex-row lg:justify-between lg:items-center w-full ${
//             isMobileNavbarOpen ? "flex h-[420px] bg-gray-400 z-20 absolute top-15" : "hidden" //X bg
//           }`}
//         >
         
//          <div className="flex items-center gap-3  pt-8 z-50">
//           <input
//             type="search"
//             name="search"
//             id="search"
//             className="bg-white cursor-auto border dark:border-white border-white py-2 px-2 w-[300px] rounded-lg focus:border-2 focus:dark:border-white focus:border-black focus:outline-none"
//           />
//           <div className="text-white z-50 "><Link href=""><Search /></Link></div>
//           </div>
          

//           <nav className="z-50">
//             <ul className="flex-col lg:flex-row space-x-8 flex gap-6 text-lg font-semibold lg:text-white">
//              <li>
//                   <Link href="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link href="/aboutUs">About Us</Link>
//                 </li>
//                 <li>
//                   <Link href="/shop">Shop</Link>
//                 </li>
//                 <li>
//                   <Link href="/pastProjects">Past Projects</Link>
//                 </li>
//                 <li>
//                   <Link href="/contactUs">Contact Us</Link>
//                 </li>
//                  <li>
//                   <Link href="/cart"><ShoppingCart /> </Link>
//                 </li>
//             </ul>
//           </nav>
//         </div>
//       </MaxWidthContainer>
//     </header>
//   );
// }



// "use client";
// import { useState } from "react";
// import MaxWidthContainer from "../ui/max-width-container";
// import Link from "next/link";
// import { Menu, X, Search, ShoppingCart } from "lucide-react";
// // import { useCart } from "@/contexts/CartContext";
// // import { useCart } from "@/app/contexts/cartContext";


// export default function Header() {
//   const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
//   const { getTotalItems } = useCart();

//   return (
//     <header className="bg-gray-800">
//       <MaxWidthContainer className="flex lg:gap-45 justify-between items-center px-20 py- relative">
//         <div className="w-fit cursor-pointer">
//           <h1 className="flex gap-1 py-4 text-4xl font-bold text-white cursor-auto">
//             UB <span className="text-[20px] mt-3.5">Solar</span>
//           </h1>
//         </div>

//         {isMobileNavbarOpen ? (
//           <X
//             className="lg:hidden block cursor-pointer size-10 text-white"
//             onClick={() => setIsMobileNavbarOpen(false)}
//           />
//         ) : (
//           <Menu
//             className="lg:hidden block cursor-pointer size-10 text-white"
//             onClick={() => setIsMobileNavbarOpen(true)}
//           />
//         )}

//         <div
//           className={`flex-col items-center gap-8 left-0 lg:flex lg:flex-row lg:justify-between lg:items-center w-full ${
//             isMobileNavbarOpen ? "flex h-screen absolute top-28" : "hidden"
//           }`}
//         >
//           <div className="flex items-center gap-3 z-50">
//             <input
//               type="search"
//               name="search"
//               id="search"
//               className="bg-white cursor-auto border dark:border-white border-white py-2 px-2 w-[350px] rounded-lg focus:border-2 focus:dark:border-white focus:border-black focus:outline-none"
//             />
//             <div className="text-white z-50">
//               <Link href="">
//                 <Search />
//               </Link>
//             </div>
//           </div>

//           <nav className="z-50">
//             <ul className="flex-col lg:flex-row space-x-8 flex gap-6 text-lg font-semibold lg:text-white">
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/aboutUs">About Us</Link>
//               </li>
//               <li>
//                 <Link href="/shop">Shop</Link>
//               </li>
//               <li>
//                 <Link href="/pastProjects">Past Projects</Link>
//               </li>
//               <li>
//                 <Link href="/contactUs">Contact Us</Link>
//               </li>
//               <li className="relative">
//                 <Link href="/cart" className="flex items-center">
//                   <ShoppingCart />
//                   {getTotalItems() > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center text-white font-bold">
//                       {getTotalItems()}
//                     </span>
//                   )}
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </MaxWidthContainer>
//     </header>
//   );
// }



