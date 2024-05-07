import React, { useState } from 'react';
import logo1 from "../images/logo1.jpg";
import room from "../images/room.jpg";
import room2 from "../images/room2.jpg";
import room4 from "../images/room4.jpg";
import room8 from "../images/room8.jpg";
import room10 from "../images/room10.jpg";
import room11 from "../images/room11.jpg";
import room12 from "../images/room12.jpg";


const Header = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };


    return (
        <div className='flex '>
            <img src={room} alt="" className='w-[15%] opacity-70' />
            <img src={room12} alt="" className='w-[14%] opacity-70' />
            <img src={room10} alt="" className='w-[14%] opacity-70' />
            <img src={room8} alt="" className='w-[14%] opacity-70' />
            <img src={room4} alt="" className='w-[14%] opacity-70' />
            <img src={room11} alt="" className='w-[14%] opacity-70' />
            <img src={room2} alt="" className='w-[15%] opacity-70' />
            <div className=' absolute left-0 right-0 top-0  flex justify-center items-center flex-col '>
                <div className=' border-b-4 border-yellow-400 pb-1' >
                    <img src={logo1} alt="" height={120} width={120} />
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <ul className='flex justify-center gap-12 font-bold text-[28px] text-white'>
                        <li
                            className={`cursor-pointer ${selectedItem === 0 ? 'text-yellow-500 underline underline-offset-8 ' : ''} hover:text-yellow-500 hover:underline underline-offset-8`}
                            onClick={() => handleItemClick(0)}
                        >
                            Home
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 1 ? 'text-yellow-500 underline underline-offset-8' : ''} hover:text-yellow-500 hover:underline underline-offset-8`}
                            onClick={() => handleItemClick(1)}
                        >
                            About Us
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 2 ? 'text-yellow-500 underline underline-offset-8' : ''} hover:text-yellow-500 hover:underline underline-offset-8`}
                            onClick={() => handleItemClick(2)}
                        >
                            Rooms
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 3 ? 'text-yellow-500 underline underline-offset-8' : ''} hover:text-yellow-500 hover:underline underline-offset-8`}
                            onClick={() => handleItemClick(3)}
                        >
                            Activities
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 4 ? 'text-yellow-500 underline underline-offset-8' : ''} hover:text-yellow-500 hover:underline underline-offset-8`}
                            onClick={() => handleItemClick(4)}
                        >
                            How to reach
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 5 ? 'text-yellow-500 underline underline-offset-8' : ''} hover:text-yellow-500 hover:underline underline-offset-8`}
                            onClick={() => handleItemClick(5)}
                        >
                            Gallery
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 6 ? 'text-yellow-500 underline underline-offset-8' : ''} hover:text-yellow-500 hover:underline underline-offset-8`}
                            onClick={() => handleItemClick(6)}
                        >
                            Contect Us
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-[26px]  text-white   mt-2 font-bold'>
                        Homestead to make you feel like your home.
                    </p>
                </div>

                <div className=' mt-3 text-[22px]  font-bold  flex justify-center items-center  bg-yellow-400 py-2 px-8 rounded-md  mb-2'>
                    <p className='border-b-2 text-white  '>
                        MAKE A QUERY
                    </p>
                </div>

            </div>


        </div>
    );
};

export default Header;
