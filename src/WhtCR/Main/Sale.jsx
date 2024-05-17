import React from 'react'
import sale from "../../images/sale.png"
import sale1 from '../../images/sale1.png'
import sale3 from '../../images/sale3.png'
import sale4 from '../../images/sale4.png'
import book from '../../images/book.png'
const Sale = () => {
    return (
        <>
            <div className='lg:flex gap-10 lg:px-16  justify-around'>


                <img src={sale} alt="" className='lg:h-[450px] max-lg:w-full  max-lg:px-5 max' />


                <div className='grid grid-cols-4 justify-center gap-5 max-lg:grid-cols-2 max-lg:px-5 max-lg:mt-5 '>


                    <div className="max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <a href="#">
                            <img className="rounded-t-lg" src={sale1} alt="" />
                        </a>
                        <div className="pt-5">
                            <h5 className="mb-2 text-[20px] italic font-bold tracking-tight text-[#13008a] dark:text-white">Comprehensive Digital Marketing Video Course
</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                            <div className='flex justify-evenly'>
                                <p className='text-[#f9847a] font-bold text-[18px]'>
                                    ₹1700.00
                                </p>
                                <p className='text-[#04a21a] font-bold text-[18px]'>
                                    ₹200.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <a href="#">
                            <img className="rounded-t-lg" src={book} alt="" />
                        </a>
                        <div className="py-5">
                            <h5 className="mb-2 text-[20px] italic font-bold tracking-tight text-[#13008a] dark:text-white">WhatsApp Marketing Software Reseller Account
</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                            <div className='flex justify-evenly'>
                                <p className='text-[#f9847a] font-bold text-[18px]'>
                                    ₹1700.00
                                </p>
                                <p className='text-[#04a21a] font-bold text-[18px]'>
                                    ₹200.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <a href="#">
                            <img className="rounded-t-lg" src={sale3} alt="" />
                        </a>
                        <div className="py-5">
                            <h5 className="mb-2 text-[20px] italic font-bold tracking-tight text-[#13008a] dark:text-white">500+ Landing Pages Template</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                            <div className='flex justify-evenly'>
                                <p className='text-[#f9847a] font-bold text-[18px]'>
                                    ₹1700.00
                                </p>
                                <p className='text-[#04a21a] font-bold text-[18px]'>
                                    ₹200.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <a href="#">
                            <img className="rounded-t-lg" src={sale4} alt="" />
                        </a>
                        <div className="py-5">
                            <h5 className="mb-2 text-[20px] italic font-bold tracking-tight text-[#13008a] dark:text-white">2000+ Cartoon Moral Story Bundle
</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                            <div className='flex justify-evenly'>
                                <p className='text-[#f9847a] font-bold text-[18px]'>
                                    ₹1700.00
                                </p>
                                <p className='text-[#04a21a] font-bold text-[18px]'>
                                    ₹200.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:px-16 mt-8 max-lg:px-5  pb-10'>



                <div className='flex gap-2 items-center  justify-between bg-white lg:px-10 px-5  py-5'>
                    <p className='text-2xl max-lg:text-[18px]   font-bold text-[#222222]'> <span className='text-blue-500'>LATEST</span> PRODUCTS !</p>
                    <p className='text-2xl max-lg:text-[18px] font-bold border-b-2  border-black'>
                        View More
                    </p>
                </div>
            </div>

        </>
    )
}

export default Sale