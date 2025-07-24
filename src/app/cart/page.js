"use client";
import React from "react";
import { useCart } from "@/app/contexts/cartContext";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const grandTotal = totalPrice;

  return (
    <main className="bg-gray-50 min-h-screen p-8 mt-[90px]">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Cart Items Section */}
        <div className="flex-1 space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.
            <span>
               <Image
                              src="/images/Empty-Cart.png"
                              alt="Empty Cart"
                              width={600}
                              height={400}
                              className="rounded-lg flex justify-center mb-5"
                            />
            </span>
            </p>
          ) : (
            cartItems.map((item) => (
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
                  {/* Hide minus button if quantity is 1 */}
                  {item.quantity > 1 && (
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                  )}
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
            ))
          )}
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded shadow p-6 w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Items ({cartItems.length})</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-blue-600">FREE</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₦{grandTotal.toLocaleString()}</span>
          </div>

          <Link
            href="/checkout"
            className="mt-6 flex items-center justify-center w-full bg-blue-800 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Proceed to Checkout <ArrowRight className="ml-3" />
          </Link>

          <Link
            href="/shop"
            className="mt-4 block text-center border border-gray-300 py-2 rounded hover:bg-gray-100"
          >
            Continue Shopping
          </Link>

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