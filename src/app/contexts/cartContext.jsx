"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const CartContext = createContext();

// Hook
export const useCart = () => useContext(CartContext);

// Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};





// "use client";
// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product, quantity = 1) => {
//     setCartItems((prevItems) => {
//       const existing = prevItems.find((item) => item.id === product.id);
//       if (existing) {
//         return prevItems.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
//         );
//       }
//       return [...prevItems, { ...product, quantity }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
//   };

//   const updateQuantity = (productId, quantity) => {
//     if (quantity <= 0) return removeFromCart(productId);
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }
