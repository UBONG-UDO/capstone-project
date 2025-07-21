"use client";

import React, { useState } from "react";
import { useCart } from "@/app/contexts/cartContext";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // const tax = (totalPrice * 0.08).toFixed(2);
  //  const grandTotal = (totalPrice + parseFloat(tax)).toFixed(2);
  const grandTotal = (totalPrice).toFixed(2);

  const handleCheckout = () => {
    alert("Checkout successful! Thank you for your purchase.");
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <main className="p-8 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
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
              <input placeholder="First Name" className="border p-2 rounded" />
              <input placeholder="Last Name" className="border p-2 rounded" />
              <input placeholder="Email" className="col-span-2 border p-2 rounded" />
              <input placeholder="Phone Number" className="col-span-2 border p-2 rounded" />
              <input placeholder="Address" className="col-span-2 border p-2 rounded" />
              <input placeholder="City" className="border p-2 rounded" />
              <select className="border p-2 rounded">
                <option>Select state</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
              <input placeholder="ZIP Code" className="col-span-2 border p-2 rounded" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">💳 Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Card Number" className="col-span-2 border p-2 rounded" />
              <input placeholder="Expiry Date" className="border p-2 rounded" />
              <input placeholder="CVV" className="border p-2 rounded" />
              <input placeholder="Name on Card" className="col-span-2 border p-2 rounded" />
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
                <span>
                  ₦{(item.price * item.quantity).toLocaleString()}
                </span>
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
            {/* <div className="flex justify-between">
              <span>Tax</span>
              <span>₦{parseFloat(tax).toLocaleString()}</span>
            </div> */}
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





// "use client";
// import React from "react";
// // import { useCart } from "@/context/CartContext";
// import { useCart } from "@/app/contexts/cartContext";


// export default function CheckoutPage() {
//   const { cartItems, clearCart } = useCart();

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const handleCheckout = () => {
//     alert("Checkout successful! Thank you for your purchase.");
//     clearCart();
//   };

//   if (cartItems.length === 0) {
//     return (
//       <main className="p-8 max-w-3xl mx-auto text-center">
//         <h1 className="text-3xl font-bold mb-6">Checkout</h1>
//         <p>Your cart is empty.</p>
//       </main>
//     );
//   }

//   return (
//     <main className="p-8 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Checkout</h1>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id} className="flex justify-between py-2 border-b">
//             <span>
//               {item.name} x {item.quantity}
//             </span>
//             <span>₦{(item.price * item.quantity).toLocaleString()}</span>
//           </li>
//         ))}
//       </ul>
//       <div className="mt-4 text-xl font-bold">
//         Total: ₦{totalPrice.toLocaleString()}
//       </div>
//       <button
//         onClick={handleCheckout}
//         className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
//       >
//         Confirm Purchase
//       </button>
//     </main>
//   );
// }





// 'use client';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Separator } from '@/components/ui/separator';
// import { Badge } from '@/components/ui/badge';
// import { useCart } from '@/contexts/CartContext';
// import { CreditCard, Lock, Truck, CheckCircle } from 'lucide-react';

// export default function CheckoutPage() {
//   const { items, getTotalPrice, clearCart } = useCart();
//   const router = useRouter();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [orderComplete, setOrderComplete] = useState(false);

//   // Controlled state for the Select component (State)
//   const [stateValue, setStateValue] = useState('');

//   useEffect(() => {
//     if (items.length === 0 && !orderComplete) {
//       router.push('/cart');
//     }
//   }, [items.length, orderComplete, router]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);

//     // Simulate payment processing
//     await new Promise(resolve => setTimeout(resolve, 2000));

//     setIsProcessing(false);
//     setOrderComplete(true);
//     clearCart();

//     // Redirect to home after 3 seconds
//     setTimeout(() => {
//       router.push('/');
//     }, 3000);
//   };

//   // If redirecting, don't render anything to avoid flicker
//   if (items.length === 0 && !orderComplete) {
//     return null;
//   }

//   if (orderComplete) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <Card className="max-w-md mx-auto">
//           <CardContent className="p-8 text-center">
//             <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Complete!</h2>
//             <p className="text-gray-600 mb-4">
//               Thank you for your purchase. You'll receive a confirmation email shortly.
//             </p>
//             <p className="text-sm text-gray-500">
//               Redirecting to home page...
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   const subtotal = getTotalPrice();
//   const tax = subtotal * 0.08;
//   const total = subtotal + tax;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Checkout Form */}
//             <div className="space-y-6">
//               {/* Shipping Information */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <Truck className="h-5 w-5 mr-2" />
//                     Shipping Information
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="firstName">First Name</Label>
//                       <Input id="firstName" required />
//                     </div>
//                     <div>
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <Input id="lastName" required />
//                     </div>
//                   </div>
//                   <div>
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" type="email" required />
//                   </div>
//                   <div>
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input id="phone" type="tel" required />
//                   </div>
//                   <div>
//                     <Label htmlFor="address">Address</Label>
//                     <Input id="address" required />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="city">City</Label>
//                       <Input id="city" required />
//                     </div>
//                     <div>
//                       <Label htmlFor="state">State</Label>
//                       <Select value={stateValue} onValueChange={setStateValue} required>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select state" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="ca">California</SelectItem>
//                           <SelectItem value="ny">New York</SelectItem>
//                           <SelectItem value="tx">Texas</SelectItem>
//                           <SelectItem value="fl">Florida</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>
//                   <div>
//                     <Label htmlFor="zipCode">ZIP Code</Label>
//                     <Input id="zipCode" required />
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Payment Information */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <CreditCard className="h-5 w-5 mr-2" />
//                     Payment Information
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div>
//                     <Label htmlFor="cardNumber">Card Number</Label>
//                     <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="expiry">Expiry Date</Label>
//                       <Input id="expiry" placeholder="MM/YY" required />
//                     </div>
//                     <div>
//                       <Label htmlFor="cvv">CVV</Label>
//                       <Input id="cvv" placeholder="123" required />
//                     </div>
//                   </div>
//                   <div>
//                     <Label htmlFor="cardName">Name on Card</Label>
//                     <Input id="cardName" required />
//                   </div>
//                   <div className="flex items-center space-x-2 text-sm text-gray-600">
//                     <Lock className="h-4 w-4" />
//                     <span>Your payment information is secure and encrypted</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Order Summary */}
//             <div>
//               <Card className="sticky top-4">
//                 <CardHeader>
//                   <CardTitle>Order Summary</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   {/* Order Items */}
//                   <div className="space-y-3">
//                     {items.map((item) => (
//                       <div key={item.product.id} className="flex justify-between items-center">
//                         <div className="flex-1">
//                           <h4 className="font-medium text-sm">{item.product.name}</h4>
//                           <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
//                         </div>
//                         <div className="text-sm font-medium">
//                           ${(item.product.price * item.quantity).toFixed(2)}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <Separator />

//                   {/* Totals */}
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span>Subtotal</span>
//                       <span>${subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span>Shipping</span>
//                       <span className="text-green-600">FREE</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span>Tax</span>
//                       <span>${tax.toFixed(2)}</span>
//                     </div>
//                     <Separator />
//                     <div className="flex justify-between text-lg font-semibold">
//                       <span>Total</span>
//                       <span>${total.toFixed(2)}</span>
//                     </div>
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full bg-blue-900 hover:bg-blue-800"
//                     size="lg"
//                     disabled={isProcessing}
//                   >
//                     {isProcessing ? (
//                       <>
//                         <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                         Processing...
//                       </>
//                     ) : (
//                       `Complete Order - $${total.toFixed(2)}`
//                     )}
//                   </Button>

//                   <div className="text-xs text-gray-600 space-y-1">
//                     <p>✓ Free shipping on all orders</p>
//                     <p>✓ 30-day return policy</p>
//                     <p>✓ 2-year warranty included</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



// 'use client';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Separator } from '@/components/ui/separator';
// import { Badge } from '@/components/ui/badge';
// import { useCart } from '@/contexts/CartContext';
// import { CreditCard, Lock, Truck, CheckCircle } from 'lucide-react';

// export default function CheckoutPage() {
//   const { items, getTotalPrice, clearCart } = useCart();
//   const router = useRouter();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [orderComplete, setOrderComplete] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);

//     // Simulate payment processing
//     await new Promise(resolve => setTimeout(resolve, 2000));

//     setIsProcessing(false);
//     setOrderComplete(true);
//     clearCart();

//     // Redirect to home after 3 seconds
//     setTimeout(() => {
//       router.push('/');
//     }, 3000);
//   };
// useEffect(() => {})
//   if (items.length === 0 && !orderComplete) {
//     router.push('/cart');
//     return null;
//   }

//   if (orderComplete) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <Card className="max-w-md mx-auto">
//           <CardContent className="p-8 text-center">
//             <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Complete!</h2>
//             <p className="text-gray-600 mb-4">
//               Thank you for your purchase. You'll receive a confirmation email shortly.
//             </p>
//             <p className="text-sm text-gray-500">
//               Redirecting to home page...
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   const subtotal = getTotalPrice();
//   const tax = subtotal * 0.08;
//   const total = subtotal + tax;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Checkout Form */}
//             <div className="space-y-6">
//               {/* Shipping Information */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <Truck className="h-5 w-5 mr-2" />
//                     Shipping Information
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="firstName">First Name</Label>
//                       <Input id="firstName" required />
//                     </div>
//                     <div>
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <Input id="lastName" required />
//                     </div>
//                   </div>
//                   <div>
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" type="email" required />
//                   </div>
//                   <div>
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input id="phone" type="tel" required />
//                   </div>
//                   <div>
//                     <Label htmlFor="address">Address</Label>
//                     <Input id="address" required />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="city">City</Label>
//                       <Input id="city" required />
//                     </div>
//                     <div>
//                       <Label htmlFor="state">State</Label>
//                       <Select required>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select state" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="ca">California</SelectItem>
//                           <SelectItem value="ny">New York</SelectItem>
//                           <SelectItem value="tx">Texas</SelectItem>
//                           <SelectItem value="fl">Florida</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>
//                   <div>
//                     <Label htmlFor="zipCode">ZIP Code</Label>
//                     <Input id="zipCode" required />
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Payment Information */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <CreditCard className="h-5 w-5 mr-2" />
//                     Payment Information
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div>
//                     <Label htmlFor="cardNumber">Card Number</Label>
//                     <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="expiry">Expiry Date</Label>
//                       <Input id="expiry" placeholder="MM/YY" required />
//                     </div>
//                     <div>
//                       <Label htmlFor="cvv">CVV</Label>
//                       <Input id="cvv" placeholder="123" required />
//                     </div>
//                   </div>
//                   <div>
//                     <Label htmlFor="cardName">Name on Card</Label>
//                     <Input id="cardName" required />
//                   </div>
//                   <div className="flex items-center space-x-2 text-sm text-gray-600">
//                     <Lock className="h-4 w-4" />
//                     <span>Your payment information is secure and encrypted</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Order Summary */}
//             <div>
//               <Card className="sticky top-4">
//                 <CardHeader>
//                   <CardTitle>Order Summary</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   {/* Order Items */}
//                   <div className="space-y-3">
//                     {items.map((item) => (
//                       <div key={item.product.id} className="flex justify-between items-center">
//                         <div className="flex-1">
//                           <h4 className="font-medium text-sm">{item.product.name}</h4>
//                           <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
//                         </div>
//                         <div className="text-sm font-medium">
//                           ${(item.product.price * item.quantity).toFixed(2)}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <Separator />

//                   {/* Totals */}
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span>Subtotal</span>
//                       <span>${subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span>Shipping</span>
//                       <span className="text-green-600">FREE</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span>Tax</span>
//                       <span>${tax.toFixed(2)}</span>
//                     </div>
//                     <Separator />
//                     <div className="flex justify-between text-lg font-semibold">
//                       <span>Total</span>
//                       <span>${total.toFixed(2)}</span>
//                     </div>
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full bg-blue-900 hover:bg-blue-800"
//                     size="lg"
//                     disabled={isProcessing}
//                   >
//                     {isProcessing ? (
//                       <>
//                         <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                         Processing...
//                       </>
//                     ) : (
//                       `Complete Order - $${total.toFixed(2)}`
//                     )}
//                   </Button>

//                   <div className="text-xs text-gray-600 space-y-1">
//                     <p>✓ Free shipping on all orders</p>
//                     <p>✓ 30-day return policy</p>
//                     <p>✓ 2-year warranty included</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
