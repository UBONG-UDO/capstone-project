"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/app/contexts/cartContext";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} antialiased`}>
        <CartProvider>
          <Header />
          <hr className="mt-0 fixed top-0 left-0 right-0 z-50" />
          <hr className="mt-18 fixed top-0 left-0 right-0 z-50 shadow-md" />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
