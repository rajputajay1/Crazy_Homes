import React from 'react'
import { BsStopwatch } from "react-icons/bs";

const Deal = () => {
    return (
        <>
            <div className='lg:px-16 mt-8 max-lg:px-4 pb-10'>


                <div className='flex items-center justify-around bg-white py-5 max-lg:flex-col max-lg:text-center'>
                    <div className='flex gap-2 items-center'>
                        <BsStopwatch className='size-5' style={{ color: "gray" }}></BsStopwatch>
                        <p className='text-2xl   font-bold text-[#222222]'> <span className='text-blue-500'>HOT DEALS!</span> GET OUR BEST PRICES</p>
                    </div>
                    <div className='lg:flex  gap-5 items-center max-lg:mt-2  '>

                        <p className='text-2xl   font-bold text-[#222222] '>Hurry up! Offer ends in :</p>
                        <div className='gap-5 flex mt-3 flex-wrap justify-center' >


                            <div className='bg-[#ff0000] inline-block px-5 rounded-md  w-24   items-center justify-center    text-center'>
                                <p className='text-white  font-bold  text-2xl'>30</p>
                                <p className='text-white  font-bold  text-[14px]'>Days</p>

                            </div>
                            <div className='bg-[#ff0000] inline-block px-5 rounded-md   w-24  items-center justify-center  text-center'>
                                <p className='text-white  font-bold  text-2xl'>07</p>
                                <p className='text-white  font-bold  text-[14px]'>Hours</p>

                            </div>
                            <div className='bg-[#ff0000] inline-block px-5 rounded-md w-24 items-center justify-center  text-center'>
                                <p className='text-white  font-bold  text-2xl'>32</p>
                                <p className='text-white  font-bold  text-[14px]'>Minutes</p>

                            </div>
                            <div className='bg-[#ff0000] inline-block px-5 rounded-md w-24  items-center justify-center  text-center'>
                                <p className='text-white  font-bold  text-2xl'>56</p>
                                <p className='text-white  font-bold  text-[14px]'>Seconds</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default Deal