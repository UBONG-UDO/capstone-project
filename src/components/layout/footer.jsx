"use client";
import React from 'react'
import MaxWidthContainer from '../ui/max-width-container'
import Link from 'next/link'
import { Github, Linkedin, PhoneCall, Twitter, Mail, MapPin} from "lucide-react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faGithub, faLinkedin, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="py-4 lg:pl-45  text-white border-t mt-8 bg-gray-800">
      <MaxWidthContainer>
        <div className='grid lg:grid-cols-3 lg:gap-4 lg:p-4'>
          {/* SOCIAL COLUMN */}
          <div className='text-left ml-8'>
            <p className="flex gap-1 pb-1 sm:py-3 py-3 text-4xl font-bold text-white">UB <span className="text-[20px] mt-3.5">Solar</span> </p>
            <div className='pt-4'><p className='text-sm text-white text-left'>
              Leading provider of high-quality solar <br /> equipment and solutions. Powering a <br />
            sustainable future with cutting-edge <br /> technology.</p></div>
      <ul className="text-sm font-light py-3 flex space-x-15 mt-10">
        <li>
        <Link href="https://www.linkedin.com/in/ubong-udo-304089150/"><span className='flex'><FontAwesomeIcon icon={faLinkedin} /></span></Link>
        </li>
        <li>
        <Link href="https://github.com/UBONG-UDO/UBONG-UDO"><span className='flex'><FontAwesomeIcon icon={faGithub} /></span></Link>
        </li>
        <li>
        <Link href="https://wa.me/+2348168155901"><span><FontAwesomeIcon icon={faWhatsapp} /></span></Link>
        </li>
        <li>
        <Link href="https://x.com/udoubong123"><span><FontAwesomeIcon icon={faXTwitter} /></span></Link>
        </li>
			</ul>
        <div className='py-8 text-sm text-left'>
      &copy; {new Date().getFullYear()} UB Solar. All rights reserved.
        </div>
          </div>
           {/* QUICK LINKS COLUMN */}
          <div>
 <ul className="text-left ml-8 text-sm font-light space-y-2.5 ">
  <p className='text-2xl font-semibold sm:py-4 mb-8'>Quick Links</p>
        <li>
        <Link href="/"><span className='flex'>Home</span></Link>
        </li>
         <li>
        <Link href="/auth"><span className='flex'>Login/Register</span></Link>
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
           {/* CONTACT COLUMN */}
          <div>
 <ul className="text-left text-sm ml-8  font-light space-y-4">
  {/* <p className='text-base font-black sm:py-3'>Contact</p> */}
  <p className='text-2xl text-left font-black sm:py-3 mb-8 mt-7'>Contact</p>
        <li>
        <span className='flex'><FontAwesomeIcon icon={faPhone} />&nbsp; +2348168155901</span>
        </li>
        <li>
       <span className='flex'><FontAwesomeIcon icon={faEnvelope} />&nbsp; udoubong123@gmail.com</span>
        </li>
        <li>
        <span className='flex'><FontAwesomeIcon icon={faLocationDot} />&nbsp; 59 Ogudu Road, Ojota, Lagos</span>
        </li>
			</ul>
          </div>
        </div>
       </MaxWidthContainer>
    </footer>
  )
}
