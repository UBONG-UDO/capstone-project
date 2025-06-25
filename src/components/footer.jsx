import React from 'react'
import MaxWidthContainer from './max-width-container'
import Link from 'next/link'
import { Github, Linkedin, MessageCircleReply, Twitter} from "lucide-react";


export default function Footer() {
  return (
    <footer className="py-4 text-center text-white border-t mt-8 bg-gray-800">
      <MaxWidthContainer>
      <ul className="text-left ml-32  font-light space-y-2.5 ">
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
      {/* <div className="border  w-fit cursor-pointer relative"> */}
          <p className="justify-center flex gap-1 py-4 text-4xl font-bold text-white">UB <span className="text-[20px] mt-3.5">Solar</span> </p>
        {/* </div> */}
      &copy; {new Date().getFullYear()} UB Solar. All rights reserved.
      </MaxWidthContainer>
    </footer>
  )
}
