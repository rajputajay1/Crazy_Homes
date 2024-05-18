import React from 'react'
import { FaTruck } from "react-icons/fa6";

const FooterPart1 = () => {
    return (
        <>
            <div className='grid grid-cols-4 max-lg:gap-5  border-2  max-lg:grid-cols-2  max-lg:px-2 '>



                <div className='flex justify-center flex-col items-center my-2 text-nowrap text-[#5fca6c]'>
                <img src="./pp3.jpeg" alt=""className='h-14 w-14' />
                    <p className='text-2xl font-bold  max-lg:text-[16px] '>FAST DELIVERY</p>
                    <p className='text-[18px] max-lg:text-[13px] font-semibold '>Delivery Within Minutes !
                    </p>
                    <p className="border-l-2 border-[#e23125]"></p>
                </div>

                <div className='flex justify-center flex-col items-center text-nowrap my-2 text-[#5fca6c]'>
                    <img src="./pp.svg" alt=""className='h-12 w-12' />
                    <p className='text-2xl font-bold  max-lg:text-[16px]'>SAFE PAYMENT</p>
                    <p className='text-[18px] max-lg:text-[13px] font-semibold '>100% Secure Payment
                    </p>
                </div>
                <div className='flex justify-center flex-col items-center text-nowrap my-2 text-[#5fca6c]'>
                    <img src="./payment.svg" alt="" className='h-12 w-12' />
                    <p className='text-2xl font-bold  max-lg:text-[16px]'>ONLINE DISCOUNT</p>
                    <p className='text-[18px] max-lg:text-[13px] font-semibold '>
                        Add Multi-Buy Discount
                    </p>
                </div>
                <div className='flex justify-center flex-col items-center text-nowrap my-2 text-[#5fca6c]'>
                <img src="./pp1.png" alt=""className='h-12 w-12' />
                    <p className='text-2xl font-bold  max-lg:text-[16px]'>HELP CENTER</p>
                    <p className='text-[20px] max-lg:text-[13px]  font-semibold '>
                        Dedicated 24/7 Support
                    </p>
                </div>
            </div>
        </>

    )
}

export default FooterPart1