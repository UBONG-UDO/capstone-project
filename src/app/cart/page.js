"use client";
import React from "react";
import { useCart } from "@/app/contexts/cartContext";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // const tax = totalPrice * 0.08;
  // const grandTotal = totalPrice + tax;
  const grandTotal = totalPrice;

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        <div className="flex-1 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow p-4 flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="text-left">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500">₦{item.price.toLocaleString()} each</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex items-center text-red-600 hover:underline"
                >
                  <Trash2 size={16} className="mr-1" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded shadow p-6 w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Items ({cartItems.length})</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">FREE</span>
            </div>
            {/* <div className="flex justify-between">
              <span>Tax</span>
              <span>₦{tax.toFixed(2)}</span>
            </div> */}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₦{grandTotal.toLocaleString()}</span>
          </div>

          <Link
            href="/checkout"
            className="mt-6 flex items-center justify-center w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
             Proceed to Checkout <ArrowRight className="ml-3" />
          </Link>

          <button
            className="mt-4 w-full text-center border border-gray-300 py-2 rounded hover:bg-gray-100"
          >
            <Link href="/shop">
            Continue Shopping
            </Link>
          </button>

          <ul className="mt-4 text-xs text-gray-500 list-disc list-inside space-y-1">
            <li>✓ Free shipping on orders over ₦500</li>
            <li>✓ 30-day return policy</li>
            <li>✓ 2-year warranty included</li>
          </ul>
        </div>
      </div>
    </main>
  );
}







// "use client";  // 19/7/2025 to achieve a recent cart
// import React from "react";
// // import { useCart } from "@/context/CartContext";
// // import { useCart } from "../contexts/cartContext";
// import { useCart } from "@/app/contexts/cartContext";
// import Link from "next/link";



// export default function CartPage() {
//   const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <main className="p-8 max-w-4xl mx-auto text-center">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul>
//             {cartItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex items-center justify-between border-b py-4"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded"
//                   />
//                   <div>
//                     <h2 className="font-semibold">{item.name}</h2>
//                     <p>₦{item.price.toLocaleString()}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="number"
//                     min="1"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       updateQuantity(item.id, parseInt(e.target.value, 10))
//                     }
//                     className="w-16 border rounded px-2 py-1"
//                   />
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-600 hover:underline"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-6 flex justify-between items-center">
//             <p className="text-xl font-bold">
//               Total: ₦{totalPrice.toLocaleString()}
//             </p>
//             <button
//               onClick={clearCart}
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
//             >
//               Clear Cart
//             </button>
//           </div>
//           <div className="mt-6">
//             <Link 
//             href="/checkout"
//               className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
//               >
//               Proceed to Checkout  
//             </Link>
//             {/* <a
//               href="/checkout"
//               className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
//             >
//               Proceed to Checkout
//             </a> */}
//           </div>
//         </>
//       )}
//     </main>
//   );
// }




// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// // import { Separator } from '@/components/ui/seperator';
// import { Separator } from '@/components/ui/separator';
// // import { useCart } from '@/contexts/cartContext';
// import { useCart } from '../contexts/cartContext';
// import { Slot } from '@radix-ui/themes';



// export default function CartPage() {
//   const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <ShoppingCart className="mx-auto h-24 w-24 text-gray-400 mb-4" />
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
//           <p className="text-gray-600 mb-6">Start shopping to add products to your cart</p>
//           <Button asChild className="bg-blue-900 hover:bg-blue-800">
//             <Link href="/shop">Continue Shopping</Link>
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2 space-y-4">
//             {items.map((item) => (
//               <Card key={item.product.id}>
//                 <CardContent className="p-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="flex-shrink-0 w-24 h-24">
//                       <Image
//                         src={item.product.image}
//                         alt={item.product.name}
//                         width={96}
//                         height={96}
//                         className="w-full h-full object-cover rounded-md"
//                       />
//                     </div>

//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-lg font-medium text-gray-900">
//                         <Link 
//                           href={`/product/${item.product.id}`}
//                           className="hover:text-blue-900 transition-colors"
//                         >
//                           {item.product.name}
//                         </Link>
//                       </h3>
//                       <p className="text-sm text-gray-500 mt-1">
//                         ${item.product.price.toFixed(2)} each
//                       </p>
//                     </div>

//                     <div className="flex items-center space-x-2">
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
//                         disabled={item.quantity <= 1}
//                         className="h-8 w-8"
//                       >
//                         <Minus className="h-4 w-4" />
//                       </Button>
//                       <span className="w-12 text-center font-medium">
//                         {item.quantity}
//                       </span>
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
//                         className="h-8 w-8"
//                       >
//                         <Plus className="h-4 w-4" />
//                       </Button>
//                     </div>

//                     <div className="text-right">
//                       <div className="text-lg font-medium text-gray-900">
//                         ${(item.product.price * item.quantity).toFixed(2)}
//                       </div>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => removeFromCart(item.product.id)}
//                         className="text-red-600 hover:text-red-800 hover:bg-red-50 mt-2"
//                       >
//                         <Trash2 className="h-4 w-4 mr-1" />
//                         Remove
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <Card className="sticky top-4">
//               <CardContent className="p-6">
//                 <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                
//                 <div className="space-y-2 mb-4">
//                   <div className="flex justify-between text-sm">
//                     <span>Items ({getTotalItems()})</span>
//                     <span>${getTotalPrice().toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span>Shipping</span>
//                     <span className="text-green-600">FREE</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span>Tax</span>
//                     <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
//                   </div>
//                 </div>

//                 <Separator className="my-4" />
                
//                 <div className="flex justify-between text-lg font-semibold mb-6">
//                   <span>Total</span>
//                   <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
//                 </div>

//                 <div className="space-y-3">
//                   <Button asChild className="w-full bg-blue-900 hover:bg-blue-800" size="lg">
//                     <Link href="/checkout">
//                       Proceed to Checkout
//                       <ArrowRight className="ml-2 h-5 w-5" />
//                     </Link>
//                   </Button>
//                   <Button asChild variant="outline" className="w-full">
//                     <Link href="/shop">Continue Shopping</Link>
//                   </Button>
//                 </div>

//                 <div className="mt-6 text-sm text-gray-600">
//                   <p>✓ Free shipping on orders over $500</p>
//                   <p>✓ 30-day return policy</p>
//                   <p>✓ 2-year warranty included</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }