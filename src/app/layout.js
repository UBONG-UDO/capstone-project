"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CartProvider } from "./contexts/cartContext";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "600"],
});

export const metaData = {
  //i changed d to D in metadata
  title: "UB Solar",
  description: "UB Solar| Home of quality Solar gadgets and materials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} antialiased`}>
        <CartProvider>
        <div>
        <hr className="size-1"></hr>
        <Header />
        <hr className="size-1"></hr>
        </div>
        {/* <Products /> */}
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
