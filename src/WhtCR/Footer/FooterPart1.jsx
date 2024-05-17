import React from 'react'
import { FaTruck } from "react-icons/fa6";

const FooterPart1 = () => {
    return (
        <>
            <div className='grid grid-cols-4 max-lg:gap-5 bg-[#f9e0e2] border-2 border-[#e23125] max-lg:grid-cols-2  max-lg:px-2 '>



                <div className='flex justify-center flex-col items-center my-2 text-nowrap '>
                    <FaTruck className='size-14 max-lg:size-10 ' style={{ color: "#01a601" }}></FaTruck>
                    <p className='text-2xl font-bold text-[#e23125] max-lg:text-[16px] '>FAST DELIVERY</p>
                    <p className='text-[18px] max-lg:text-[13px] font-semibold text-[#e23125]'>Delivery Within Minutes !
                    </p>
                    <p className="border-l-2 border-[#e23125]"></p>
                </div>

                <div className='flex justify-center flex-col items-center text-nowrap my-2'>
                    <FaTruck className='size-14 max-lg:size-10 ' style={{ color: "#01a601" }}></FaTruck>
                    <p className='text-2xl font-bold text-[#e23125] max-lg:text-[16px]'>SAFE PAYMENT</p>
                    <p className='text-[18px] max-lg:text-[13px] font-semibold text-[#e23125]'>100% Secure Payment
                    </p>
                </div>
                <div className='flex justify-center flex-col items-center text-nowrap my-2'>
                    <FaTruck className='size-14 max-lg:size-10 ' style={{ color: "#01a601" }}></FaTruck>
                    <p className='text-2xl font-bold text-[#e23125] max-lg:text-[16px]'>ONLINE DISCOUNT</p>
                    <p className='text-[18px] max-lg:text-[13px] font-semibold text-[#e23125]'>
                        Add Multi-Buy Discount
                    </p>
                </div>
                <div className='flex justify-center flex-col items-center text-nowrap my-2'>
                    <FaTruck className='size-14 max-lg:size-10 ' style={{ color: "#01a601" }}></FaTruck>
                    <p className='text-2xl font-bold text-[#e23125] max-lg:text-[16px]'>HELP CENTER</p>
                    <p className='text-[20px] max-lg:text-[13px]  font-semibold text-[#e23125]'>
                        Dedicated 24/7 Support
                    </p>
                </div>
            </div>
        </>

    )
}

export default FooterPart1