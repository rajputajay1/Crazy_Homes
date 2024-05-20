import React, { useState } from 'react'
import FilterSidebar from './FilterSidebar'
import { useEffect } from 'react';


const Catagery1 = ({sortCriteria, updateTotalResults}) => {
   
    const Allcards = [
        {
            id: 0,
            Name: "Email Writing Template",
            img: "/email.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 1,
            Name: "Mockup Box Making Software",
            img: "/latest1.jpg",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 2,
            Name: "Printable Worksheets for Preschoolers",
            img: "/latest2.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 3,
            Name: "All in One Data Extractor Reseller Account",
            img: "/latest3.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 4,
            Name: "All in One Data Extractor Software",
            img: "/latest3.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 5,
            Name: "WhatsApp CRM Software",
            img: "/latest4.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 6,
            Name: "WhatsApp BotMaster Software",
            img: "/latest5.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 7,
            Name: "Email Blaster Reseller Plan",
            img: "/latest6.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 8,
            Name: "Email Blaster for Email Marketing",
            img: "/latest7.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 9,
            Name: "MS 365 + 1TB Cloud Storage",
            img: "/latest8.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 10,
            Name: "All Software Pack 2023",
            img: "/latest9.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 11,
            Name: "50 + WordPress Plugins",
            img: "/latest10.png",
            current_price: "499.00",
            original_price: "49.00",
        },
    ];
    useEffect(() => {
        updateTotalResults(Allcards.length);
      }, [Allcards.length, updateTotalResults]);
    return (
        <>

            <div className=' '>
                <div className='grid grid-cols-5 gap-5  max-lg:grid-cols-2 '>
                    {Allcards.map((card, index) => (
                        <div key={card.id} className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center" onClick={() => handleCardClick(card)}>

                            <img className="rounded-t-lg" src={card.img} alt="" />

                            <div className="py-2 ">
                                <p className=" text-[20px] font-bold  text-[#13008a] dark:text-white text-center px-2 italic">{card.Name}</p>
                                <p className=" font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                                <div className='flex justify-evenly items-center '>
                                    <p className='text-[#f9847a] font-bold text-[18px]  line-through'>
                                        ₹ {card.current_price}
                                    </p>
                                    <p className='text-[#04a21a] font-bold text-[18px]'>
                                        ₹ {card.original_price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Catagery1