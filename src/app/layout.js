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
          <hr className="mt-0" />
          <Header />
          <hr className="mt-0" />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
