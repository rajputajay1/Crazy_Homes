import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Icons from './Icons';
const Navbar = () => {
  return (
    <nav className=''>
      <div className='bg-[#5ac670] flex justify-between items-center h-14 px-20 max-md:hidden max-lg:px-6   '>
        <div className='flex gap-10'>
          <p className='text-white text-[20px] font-bold'>9501433347</p>
          <p className='text-white text-[20px] font-bold'>info.techquasarservices@gmail.com</p>
        </div>
        <Icons></Icons>
        {/* <div className='flex gap-3'>
          <FaWhatsapp className='font-bold size-7' style={{ color: "#3ad165" }} />
          <FaFacebookF className='font-bold size-7' style={{ color: "#4e6392" }} />
          <FaYoutube className='font-bold size-7' style={{ color: "#d23025" }} />
          <FaTwitter className='font-bold size-7' style={{ color: "#33a4e3" }} />
          <FaInstagramSquare className='font-bold size-7' style={{ color: "#f13c32" }} />
        </div> */}

      </div>

    </nav>
  )
}

export default Navbar