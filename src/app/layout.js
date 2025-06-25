import {Poppins} from 'next/font/google'
import "./globals.css";
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Products from '@/components/product';
// import backgroundImage from './images/Battery.png';




const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "600"]
})

export const metadata = {
  title: "UB Solar",
  description: "UB Solar| Home of quality Solar gadgets and materials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} antialiased`}
      >
        <Header />
        <div className="border-2"
        style={{
          backgroundImage: `url('./images/Battery.png')`,
        // backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }}
        >
        <Hero />
        </div>
        <Products /> 
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
