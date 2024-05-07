
import React, { useState } from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const WhyUs = () => {
    const [dropdownOpen, setDropdownOpen] = useState(Array(10).fill(false));

    const toggleDropdown = (index) => {
        const newDropdownOpen = [...dropdownOpen];
        newDropdownOpen[index] = !newDropdownOpen[index];
        setDropdownOpen(newDropdownOpen);
    };

    // Define your list data
    const reasons = [
        "You get the entire property to yourself.",
        "Complete privacy and offbeat location",
        "Lip-smacking homely cooked food",
        "Our Hospitality is one of a kind",
        "Adjoining river",
        "Large spacious area with ample sitting space",
        "Owner personally looks after every service",
        "Kitchen to cook type ",
        "Doctor on call",
        "Pet friendly"
    ];

    return (
        <>
            <div className='text-center mt-8'>
                <p className='text-5xl font-extrabold text-gray-700'>Why Us</p>
                <p className='text-2xl font-bold text-gray-600 mt-3'>Reasons To Choose Our Resort</p>
            </div>
            <div className='grid grid-cols-2 gap-10 my-9 px-10 text-[24px] '>
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className={`relative `}
                    >
                        <div
                            className='px-5 font-bold flex items-center gap-5 justify-between shadow-md py-2'
                            style={{ color: "#686868" }}
                        >
                            <div className='flex items-center gap-7'>
                                <p>{index + 1}.</p>
                                <IoArrowForwardCircleOutline className='size-6' />
                                <p>{reason}</p>
                            </div>
                            <IoMdArrowDropdown onClick={() => toggleDropdown(index)} />
                        </div>
                        <div className={`   left-0 mt-1  text-[18px] font-semibold text-gray-700 bg-white shadow-md rounded-md p-4 ${dropdownOpen[index] ? '' : 'hidden'}`}>

                            To display each list item separately with its own dropdown, you can store each item's data separately and manage its dropdown state individually. Here's how you can modify your code to achieve this:.
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default WhyUs;
