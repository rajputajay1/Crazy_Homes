import React from 'react'
import logo from '../../images/logo.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import pay from "../../images/pay1.png"
const FooterPart2 = () => {

    return (
        <>

            <div className='flex justify-evenly py-10 lg:gap-10 bg-[#fff4f4] max-lg:flex-col  max-lg:gap-10  px-10 max-lg:px-2'>


                <div className='flex justify-center flex-col max-lg:text-center max-lg:items-center  '>
                    <img src="./mainlogo.jpg" alt="" className='h-48 w-48' />
                    <p className='text-[18px] mt-2 font-semibold text-[#e23125]'>Got Question? Call us 24/7</p>
                    <p className='text-2xl font-bold text-[#e23125]'>9501433347</p>
                    <p className='text-[18px] font-semibold text-[#e23125]'>E -260 B (A) , Industrial Area phase 8 Mohali, Punjab 160055</p>
                    <p className='text-[18px] font-semibold text-[#e23125]'>info.techquasarservices@gmail.com</p>
                </div>
                <div className='max-lg:text-center items-start'>
                    <p className='text-2xl font-bold text-[#e23125] '>Quick Links</p>
                    <ul className='text-[18px] font-semibold text-[#e23125] mt-2 '>
                        <li className='hover:text-yellow-400 cursor-pointer'>Terms and Conditions</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Privacy Policy</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Return & Refund Policy</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Shipping & Delivery Policy</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Disclaimer</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>About Us</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Contect Us</li>
                    </ul>
                </div>
                <div className='max-lg:text-center'>
                    <p className='text-3xl font-bold text-[#e23125] '>Join Our Website</p>
                    <p className='text-[18px] font-semibold text-[#e23125] mt-2'>Sign up for our Website to enjoy free marketing tips, inspirations, and more.</p>
                    <div className='flex lg:gap-10 max-lg:gap-5 mt-2 max-lg:justify-center max-md:flex-col '>
                        <input
                            className=" shadow-sm rounded-md text-[#e23125]  border py-2 px-1 bg-[#f9e0e2] placeholder:text-[#e23125] "
                            type="text"
                            placeholder=" Emial Address"

                        />
                        <button className=" border-2 hover:bg-[#f9e0e2] text-[#e23125] border-[#e23125] font-bold py-2 px-4 rounded-full">
                            Sign Me Up
                        </button>
                    </div>
                    <div className='flex gap-5 mt-5 max-lg:justify-center '>
                        <FaWhatsapp className='font-bold size-7' style={{ color: "#3ad165" }} />
                        <FaFacebookF className='font-bold size-7' style={{ color: "#4e6392" }} />
                        <FaYoutube className='font-bold size-7' style={{ color: "#d23025" }} />
                        <FaTwitter className='font-bold size-7' style={{ color: "#33a4e3" }} />
                        <FaInstagramSquare className='font-bold size-7' style={{ color: "#f13c32" }} />



                    </div>
                </div>
            </div>
            <div className='flex justify-around bg-[#f9e0e2] py-5 border-2 border-[#e23125] max-lg:flex-col max-lg:text-center '>
                <p className='text-[18px] font-semibold text-[#e23125]'>
                    © Copyright all rights reserved by <span className='text-[#fc972b]'>Your Digital Bajaar</span>
                </p>
                <div className='flex max-lg:justify-center mt-2'>

                    <p className='text-[18px] font-semibold text-[#e23125]'>Payment Method:</p>
                </div>
            </div>
        </>

    )
}

export default FooterPart2