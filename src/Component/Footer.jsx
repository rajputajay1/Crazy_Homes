import React, { useState } from 'react';
import logo from "../images/logo1.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <>
        <footer>
            <div className='flex flex-col justify-center items-center' style={{backgroundColor:"#fbf3f0"}}>
                <div className=''>
                    <img src={logo} alt="" width={300} height={200} />
                    
                </div>
                <div className='mt-10'>
                    <ul className='flex justify-center gap-12 font-bold text-[30px] ' style={{ color: "#686868" }}>
                        <li
                            className={`cursor-pointer ${selectedItem === 0 ? 'text-yellow-500' : ''}`}
                            onClick={() => handleItemClick(0)}
                            onMouseEnter={() => setSelectedItem(0)}
                            onMouseLeave={() => setSelectedItem(null)}
                        >
                            Home
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 1 ? 'text-yellow-500' : ''}`}
                            onClick={() => handleItemClick(1)}
                            onMouseEnter={() => setSelectedItem(1)}
                            onMouseLeave={() => setSelectedItem(null)}
                        >
                            About Us
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 2 ? 'text-yellow-500' : ''}`}
                            onClick={() => handleItemClick(2)}
                            onMouseEnter={() => setSelectedItem(2)}
                            onMouseLeave={() => setSelectedItem(null)}
                        >
                            Rooms
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 3 ? 'text-yellow-500' : ''}`}
                            onClick={() => handleItemClick(3)}
                            onMouseEnter={() => setSelectedItem(3)}
                            onMouseLeave={() => setSelectedItem(null)}
                        >
                            Activities
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 4 ? 'text-yellow-500' : ''}`}
                            onClick={() => handleItemClick(4)}
                            onMouseEnter={() => setSelectedItem(4)}
                            onMouseLeave={() => setSelectedItem(null)}
                        >
                            How to reach
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 5 ? 'text-yellow-500' : ''}`}
                            onClick={() => handleItemClick(5)}
                            onMouseEnter={() => setSelectedItem(5)}
                            onMouseLeave={() => setSelectedItem(null)}
                        >
                            Gallery
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 6 ? 'text-yellow-500' : ''}`}
                            onClick={() => handleItemClick(6)}
                            onMouseEnter={() => setSelectedItem(6)}
                            onMouseLeave={() => setSelectedItem(null)}
                        >
                            Contact Us
                        </li>
                    </ul>
                </div>
                <div className='flex gap-6 mt-5'>
                    <div className='rounded-full bg-yellow-500 h-12 w-12 flex items-center justify-center '>
                        <FaFacebookF className='size-6 text-white' />
                    </div>
                    <div className='rounded-full bg-yellow-500 h-12 w-12 flex items-center justify-center '>
                        <FaYoutube className='size-6 text-white' />
                    </div>
                    <div className='rounded-full bg-yellow-500 h-12 w-12 flex items-center justify-center '>
                        <FaInstagram className='size-6 text-white' />
                    </div>

                </div>
                <p className='text-[18px] font-semibold mt-5' style={{ color: "#686868" }}>Village Marora, Maldevta-Kadukhal Road, Dehradun, Uttarakhand</p>
                <p className='text-[16px] font-semibold mt-5 mb-2' style={{ color: "#686868" }}>Copyright © 2024 Vama Homestead | Designed by Tangled Frames</p>
                </div>
                </footer>
        </>
    );
}

export default Footer;
