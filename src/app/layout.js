"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import Products from "@/components/product/product";


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
        <div>
        <hr className="size-1"></hr>
        <Header />
        <hr className="size-1"></hr>
        </div>
          {/* <Hero /> */}
        {/* <Products /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
