'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { CreditCard, Lock, Truck, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Controlled state for the Select component (State)
  const [stateValue, setStateValue] = useState('');

  useEffect(() => {
    if (items.length === 0 && !orderComplete) {
      router.push('/cart');
    }
  }, [items.length, orderComplete, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();

    // Redirect to home after 3 seconds
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  // If redirecting, don't render anything to avoid flicker
  if (items.length === 0 && !orderComplete) {
    return null;
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Complete!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for your purchase. You'll receive a confirmation email shortly.
            </p>
            <p className="text-sm text-gray-500">
              Redirecting to home page...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-6">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select value={stateValue} onValueChange={setStateValue} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input id="zipCode" required />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" required />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Lock className="h-4 w-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex justify-between items-center">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.product.name}</h4>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-sm font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span className="text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800"
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      `Complete Order - $${total.toFixed(2)}`
                    )}
                  </Button>

                  <div className="text-xs text-gray-600 space-y-1">
                    <p>✓ Free shipping on all orders</p>
                    <p>✓ 30-day return policy</p>
                    <p>✓ 2-year warranty included</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}



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