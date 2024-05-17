import React from 'react'

import payment from "../../images/payment1.png"
import pay from "../../images/pay1.png"
import { useLocation } from 'react-router-dom';

const Detail = () => {
    const location = useLocation();
    const selectedCard = location.state.selectedCard;
    return (
        <div class=" pb-8 ">
            <p className='text-center font-bold text-5xl text-yellow-500 max-lg:text-3xl  py-9'>{selectedCard.Name}</p>

            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row -mx-4">

                    <div class="md:flex-1 px-4">
                        <div class="h-[500px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img class="w-full h-full object-cover" src={selectedCard.img} alt="Product Image" />
                        </div>

                    </div>
                    <div class="md:flex-1 px-4">

                        <h2 class="text-3xl max-lg:text-2xl font-bold text-gray-800 dark:text-white mb-2">{selectedCard.Name}</h2>
                        <p class="text-gray-600 dark:text-gray-300 text-[18px] font-bold mb-4">

                            ⭐⭐⭐⭐⭐ (157 Customer reviews)
                        </p>
                        <p class="text-gray-600 dark:text-gray-300 text-[15px] mb-4">
                            These software tools offer a wide range of mockup templates for different products, including boxes, books, CDs, apparel, digital screens, and more
                        </p>
                        <div class="flex mb-4">
                            <div class="mr-4 text-[20px]  max-lg:text-[17px]">
                                <span class="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                <span class="text-gray-600 dark:text-gray-300">{selectedCard.original_price}</span>
                            </div>

                        </div>
                        <div class="bg-black mb-4">


                        </div>

                        <div class="mb-4 justify-center  flex flex-col  text-center items-center">
                            <img src={payment} alt="" className='h-40  w-60' />
                            <img src={pay} alt="" className='h-30 w-96' />
                            <span class="font-bold text-gray-700 dark:text-gray-300 text-2xl  text-center">Limted Offer</span>
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
            </div>


        </div>

    )
}

export default Detail