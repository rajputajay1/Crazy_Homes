import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../images/logo.png";
import Login from '../User/Login';
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';


const HeaderPart = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [SignInPopupOpen, setSignInPopupOpen] = useState(false);

    const handleLoginClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleloginClick = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    const handleSignUpClick = () => {
        setSignInPopupOpen(!SignInPopupOpen);

    }
    const closeSignUpPopup = () => {
        setSignInPopupOpen(false);
    };

    const { carts } = useSelector((state) => state.allcart)
    console.log("pinu", carts);
    return (
        <>
            <div className='flex items-center flex-col lg:flex-row lg:gap-20 w-full justify-between max-lg:px-3 lg:px-20'>
                <div className='flex items-center max:lg:justify-start py-5'>
                    <img src="./mainlogo.jpg" alt="" className='h-32 w-40' />
                    <FaShoppingCart className='size-10 text-[#5ac670] lg:hidden'></FaShoppingCart>
                </div>
                {/* <div className="lg:w-[600px] w-full">
                    <div className="shadow-md rounded-full border-2 border-[#ed5a69] w-full">
                        <div className="relative w-full">
                            <input type="text" className="w-full py-2 px-4 bg-[#fdeebe] rounded-full focus:outline-none pr-8" placeholder="Search..." />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='flex gap-20'>
                    <div className='relative max-lg:hidden cursor-pointer flex flex-col items-center justify-center text-center' onClick={handleLoginClick}>

                        <CgProfile className='size-7 text-[#5ac670]'></CgProfile>

                        <p className='text-[#5ac670] text-[18px] font-bold'>
                            Login
                        </p>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg w-40 items-center  text-center " onClick={handleLoginClick}>
                                <p className='text-[19px] py-2 font-semibold text-[#5ac670]  hover:bg-[#5ac670]  hover:text-white' onClick={handleloginClick}>Login</p>
                                <hr />
                                <p className='text-[19px] py-2 font-semibold text-[#5ac670] hover:bg-[#5ac670]  hover:text-white' onClick={handleSignUpClick}>Sign Up</p>
                            </div>
                        )}
                    </div>
                    {isPopupOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="  rounded-lg w-full">

                                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                                    <div className="hidden lg:block lg:w-1/2 bg-cover"
                                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" }}>
                                    </div>

                                    <div className="w-full p-8 lg:w-1/2">

                                        <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                                        <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                                            <div className="px-4 py-3">
                                                <svg className="h-6 w-6" viewBox="0 0 40 40">
                                                    <path
                                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                        fill="#FFC107" />
                                                    <path
                                                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                                        fill="#FF3D00" />
                                                    <path
                                                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                                        fill="#4CAF50" />
                                                    <path
                                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                        fill="#1976D2" />
                                                </svg>
                                            </div>
                                            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                                        </a>

                                        <div className="mt-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                                        </div>
                                        <div className="mt-4">
                                            <div className="flex justify-between">
                                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                                <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                                            </div>
                                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                                        </div>
                                        <div className="mt-8">
                                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="border-b w-1/5 md:w-1/4"></span>
                                            <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                                            <span className="border-b w-1/5 md:w-1/4"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={closePopup} className="p-2 bg-white text-black rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-100">
                                            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M2.646 2.646a.5.5 0 01.708 0L10 9.293l6.646-6.647a.5.5 0 01.708.708L10.707 10l6.647 6.646a.5.5 0 01-.708.708L10 10.707l-6.646 6.647a.5.5 0 01-.708-.708L9.293 10 2.646 3.354a.5.5 0 010-.708z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {SignInPopupOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ">
                            <div className="  rounded-lg w-full">

                                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                                    <div>
                                        <button onClick={closeSignUpPopup} className="p-2 bg-white text-black rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-100">
                                            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M2.646 2.646a.5.5 0 01.708 0L10 9.293l6.646-6.647a.5.5 0 01.708.708L10.707 10l6.647 6.646a.5.5 0 01-.708.708L10 10.707l-6.646 6.647a.5.5 0 01-.708-.708L9.293 10 2.646 3.354a.5.5 0 010-.708z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="w-full p-8 lg:w-1/2">

                                        <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                                        <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                                            <div className="px-4 py-3">
                                                <svg className="h-6 w-6" viewBox="0 0 40 40">
                                                    <path
                                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                        fill="#FFC107" />
                                                    <path
                                                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                                        fill="#FF3D00" />
                                                    <path
                                                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                                        fill="#4CAF50" />
                                                    <path
                                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                        fill="#1976D2" />
                                                </svg>
                                            </div>
                                            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                                        </a>

                                        <div className="mt-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                                        </div>
                                        <div className="mt-4">
                                            <div className="flex justify-between">
                                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                            </div>
                                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                                        </div>
                                        <div className="mt-4">
                                            <div className="flex justify-between">
                                                <label className="block text-gray-700 text-sm font-bold mb-2"> Confirm Password</label>
                                            </div>
                                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                                        </div>
                                        <div className="mt-8">
                                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Sign Up</button>
                                        </div>

                                    </div>
                                    <div className="hidden lg:block lg:w-1/2 bg-cover"
                                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" }}>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                    <div className='flex flex-col items-center justify-center text-center max-lg:hidden'>
                        <FaHeart className='size-7 text-[#5ac670]' />
                        <p className='text-[18px] font-bold text-[#5ac670]'>Washlist</p>
                    </div>

                    <div className='max-lg:hidden relative inline-block'>
                        <FaShoppingCart className="size-7 text-[#5ac670]" />
                        <p className='text-[18px] font-bold text-[#5ac670]'>Cart</p>
                        <p className="absolute top-[-14px] right-0 text-red-400 text-[20px] font-bold flex items-center justify-center">
                            {carts.length}
                        </p>
                    </div>


                    <div className="relative inline-block">

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderPart;
