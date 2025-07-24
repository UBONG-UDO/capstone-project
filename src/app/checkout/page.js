"use client";

import React, { useState } from "react";
import { useCart } from "@/app/contexts/cartContext";
import Image from "next/image";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const [errors, setErrors] = useState({});

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const grandTotal = totalPrice.toFixed(2);

  function validate() {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";

    if (!form.address.trim()) newErrors.address = "Address is required";

    if (!form.city.trim()) newErrors.city = "City is required";

    if (!form.state.trim() || form.state === "") newErrors.state = "State is required";

    if (!form.zip.trim()) newErrors.zip = "ZIP code is required";

    if (!form.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{13,19}$/.test(form.cardNumber.replace(/\s+/g, ""))) {
      newErrors.cardNumber = "Card number must be 13-19 digits";
    }

    if (!form.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required";
    } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(form.expiryDate)) {
      newErrors.expiryDate = "Expiry date must be MM/YY";
    }

    if (!form.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(form.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    if (!form.cardName.trim()) newErrors.cardName = "Name on card is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    // Clear error for this field
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }

  function handleCheckout() {
    if (!validate()) return;

    alert("Checkout successful! Thank you for your purchase.");
    clearCart();

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
    });
  }

  if (cartItems.length === 0) {
    return (
      <main className="p-8 max-w-3xl mx-auto text-center mt-[90px]">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <Image
          src="/images/Empty-Cart.png"
          alt="Empty Cart"
          width={600}
          height={400}
          className="rounded-lg flex justify-center mb-5"
        />
        <p>Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main className="p-6 md:p-12 bg-gray-50 min-h-screen mt-[80px]">
      <h1 className="text-3xl font-bold text-center mb-10">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left section */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">🧾 Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <input
                  name="firstName"
                  placeholder="First Name"
                  className={`border p-2 rounded ${errors.firstName ? "border-red-500" : ""}`}
                  value={form.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className={`border p-2 rounded ${errors.lastName ? "border-red-500" : ""}`}
                  value={form.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>
                )}
              </div>
              <div className="flex flex-col md:col-span-2">
                <input
                  name="email"
                  placeholder="Email"
                  className={`border p-2 rounded ${errors.email ? "border-red-500" : ""}`}
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col md:col-span-2">
                <input
                  name="phone"
                  placeholder="Phone Number"
                  className={`border p-2 rounded ${errors.phone ? "border-red-500" : ""}`}
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
                )}
              </div>
              <div className="flex flex-col md:col-span-2">
                <input
                  name="address"
                  placeholder="Address"
                  className={`border p-2 rounded ${errors.address ? "border-red-500" : ""}`}
                  value={form.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <span className="text-red-500 text-xs mt-1">{errors.address}</span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  name="city"
                  placeholder="City"
                  className={`border p-2 rounded ${errors.city ? "border-red-500" : ""}`}
                  value={form.city}
                  onChange={handleChange}
                />
                {errors.city && (
                  <span className="text-red-500 text-xs mt-1">{errors.city}</span>
                )}
              </div>
              <div className="flex flex-col">
                <select
                  name="state"
                  className={`border p-2 rounded ${errors.state ? "border-red-500" : ""}`}
                  value={form.state}
                  onChange={handleChange}
                >
                  <option value="">Select state</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Port Harcourt">Port Harcourt</option>
                </select>
                {errors.state && (
                  <span className="text-red-500 text-xs mt-1">{errors.state}</span>
                )}
              </div>
              <div className="flex flex-col md:col-span-2">
                <input
                  name="zip"
                  placeholder="ZIP Code"
                  className={`border p-2 rounded ${errors.zip ? "border-red-500" : ""}`}
                  value={form.zip}
                  onChange={handleChange}
                />
                {errors.zip && (
                  <span className="text-red-500 text-xs mt-1">{errors.zip}</span>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">💳 Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col md:col-span-2">
                <input
                  name="cardNumber"
                  placeholder="Card Number"
                  className={`border p-2 rounded ${errors.cardNumber ? "border-red-500" : ""}`}
                  value={form.cardNumber}
                  onChange={handleChange}
                  maxLength={19}
                />
                {errors.cardNumber && (
                  <span className="text-red-500 text-xs mt-1">{errors.cardNumber}</span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  name="expiryDate"
                  placeholder="Expiry Date (MM/YY)"
                  className={`border p-2 rounded ${errors.expiryDate ? "border-red-500" : ""}`}
                  value={form.expiryDate}
                  onChange={handleChange}
                  maxLength={5}
                />
                {errors.expiryDate && (
                  <span className="text-red-500 text-xs mt-1">{errors.expiryDate}</span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  name="cvv"
                  placeholder="CVV"
                  className={`border p-2 rounded ${errors.cvv ? "border-red-500" : ""}`}
                  value={form.cvv}
                  onChange={handleChange}
                  maxLength={4}
                />
                {errors.cvv && (
                  <span className="text-red-500 text-xs mt-1">{errors.cvv}</span>
                )}
              </div>
              <div className="flex flex-col md:col-span-2">
                <input
                  name="cardName"
                  placeholder="Name on Card"
                  className={`border p-2 rounded ${errors.cardName ? "border-red-500" : ""}`}
                  value={form.cardName}
                  onChange={handleChange}
                />
                {errors.cardName && (
                  <span className="text-red-500 text-xs mt-1">{errors.cardName}</span>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 flex items-center">
              🔒 Your payment information is secure and encrypted
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="divide-y">
            {cartItems.map((item) => (
              <li key={item.id} className="py-2 flex justify-between">
                <div>
                  {item.name}
                  <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                </div>
                <span>₦{(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-500">FREE</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>₦{parseFloat(grandTotal).toLocaleString()}</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-800 font-semibold"
          >
            Complete Order - ₦{parseFloat(grandTotal).toLocaleString()}
          </button>
          <ul className="text-xs text-gray-600 space-y-1 mt-2">
            <li>✓ Free shipping on all orders</li>
            <li>✓ 30-day return policy</li>
            <li>✓ 2-year warranty included</li>
          </ul>
        </div>
      </div>
    </main>
  );
}