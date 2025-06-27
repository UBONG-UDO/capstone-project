"use client";
import React from 'react'
import MaxWidthContainer from '../ui/max-width-container'
import Link from 'next/link'
import { Github, Linkedin, MessageCircleReply, PhoneCall, Twitter, Mail, MapPin} from "lucide-react";


export default function Footer() {
  return (
    <footer className="py-4 text-center text-white border-t mt-8 bg-gray-800">
      <MaxWidthContainer>
        <div className='grid lg:grid-cols-4 lg:gap-4 lg:p-4'>
          {/* SOCIAL COLUMN */}
          <div>
      <ul className="text-left ml-32 text-sm font-light space-y-2.5 ">
        <p className='text-base font-black sm:py-3'>Social</p>
        <li>
        <Link href="https://www.linkedin.com/in/ubong-udo-304089150/"><span className='flex'><Linkedin />&nbsp; Linkedin</span></Link>
        </li>
        <li>
        <Link href="https://github.com/UBONG-UDO/UBONG-UDO"><span className='flex'><Github />&nbsp;Github</span></Link>
        </li>
        <li>
        <Link href="https://wa.me/+2348168155901"><span className='flex'><MessageCircleReply />&nbsp;Whatsapp</span></Link>
        </li>
        <li>
        <Link href="https://x.com/udoubong123"><span className='flex'><Twitter />&nbsp;Twitter</span></Link>
        </li>
			</ul>
          </div>
           {/* QUICK LINKS COLUMN */}
          <div>
 <ul className="text-left ml-32 text-sm font-light space-y-2.5 ">
  <p className='text-base font-black sm:py-3'>Quick Links</p>
        <li>
        <Link href="/"><span className='flex'>Home</span></Link>
        </li>
        <li>
        <Link href="/aboutUs"><span className='flex'>About Us</span></Link>
        </li>
        <li>
        <Link href="/shop"><span className='flex'>Shop</span></Link>
        </li>
        <li>
        <Link href="/pastProjects"><span className='flex'>Past Projects</span></Link>
        </li>
         <li>
        <Link href="/contactUs"><span className='flex'>Contact Us</span></Link>
        </li>
			</ul>
          </div>
           {/* PRODUCTS COLUMN */}
          <div>
 <ul className="text-left ml-32 text-sm font-light space-y-2.5 ">
  <p className='text-base font-black sm:py-3'>Products</p>
        <li>
        <Link href="https://www.linkedin.com/in/ubong-udo-304089150/"><span className='flex'>Inverter</span></Link>
        </li>
        <li>
        <Link href="https://github.com/UBONG-UDO/UBONG-UDO"><span className='flex'>Battery</span></Link>
        </li>
        <li>
        <Link href="https://wa.me/+2348168155901"><span className='flex'>Solar Panel</span></Link>
        </li>
        <li>
        <Link href="https://x.com/udoubong123"><span className='flex'>Charge Controller</span></Link>
        </li>
			</ul>
          </div>
           {/* CONTACT COLUMN */}
          <div>
 <ul className="text-left text-sm ml-32  font-light space-y-2.5 ">
  <p className='text-base font-black sm:py-3'>Contact</p>
        <li>
        <span className='flex'><PhoneCall />&nbsp; +2348168155901</span>
        </li>
        <li>
       <span className='flex'><Mail />&nbsp; udoubong123@gmail.com</span>
        </li>
        <li>
        <span className='flex'><MapPin />&nbsp; 59 Ogudu Road, Ojota, Lagos</span>
        </li>
			</ul>
          </div>
        </div>
      {/* <div className="border  w-fit cursor-pointer relative"> */}
          <p className="justify-center flex gap-1 pb-1 text-4xl font-bold text-white">UB <span className="text-[20px] mt-3.5">Solar</span> </p>
           <hr></hr>
          <div className='pt-[2.5px]'><marquee direction='left'><p className='py-2 text-sm'>Leading provider of high-quality solar equipment and solutions. Powering a 
            sustainable future with cutting-edge technology.</p></marquee></div>
        {/* </div> */}
        <hr></hr>
        <div className='py-4 text-sm'>
      &copy; {new Date().getFullYear()} UB Solar. All rights reserved.
        </div>
      </MaxWidthContainer>
    </footer>
  )
}
