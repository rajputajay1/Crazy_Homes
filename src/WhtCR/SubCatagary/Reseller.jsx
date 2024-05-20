import React from 'react'
import  { useState, useEffect } from 'react';

const Reseller = ({ sortCriteria, updateTotalResults, handleCardClick }) => {
    const Reseller_Account = [
        {
            id: 801,
            Name: "All in One Data Extractor Reseller Account",
            img: "/latest3.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 802,
            Name: "Email Blaster Reseller Plan",
            img: "/latest6.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 803,
            Name: "WhatsApp Marketing Software Reseller Account ",
            img: "/199five.png",
            current_price: "499.00",
            original_price: "199.00",
          },
    ]
    
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        updateTotalResults(Reseller_Account.length);
    }, [Reseller_Account .length, updateTotalResults]);

    const handleClick = (card) => {
        handleCardClick(card);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedItems = Reseller_Account .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const totalPages = Math.ceil(Reseller_Account .length / itemsPerPage);
    return (
        <>
               <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-2'>
                {paginatedItems.map((card) => (
                    <div key={card.id} className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center" onClick={() => handleClick(card)}>
                        <img className="rounded-lg" src={card.img} alt={card.Name} />
                        <div className="py-2">
                            <p>{card.id}</p>
                            <p className="text-[20px] font-bold text-[#13008a] dark:text-white text-center px-2 italic max-lg:text-[16px]">{card.Name}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                            <div className='flex justify-evenly items-center'>
                                <p className='text-[#f9847a] font-bold text-[18px] max-lg:text-[13px] line-through'>
                                    ₹ {card.current_price}
                                </p>
                                <p className='text-[#04a21a] font-bold text-[18px] max-lg:text-[13px]'>
                                    ₹ {card.original_price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        
        </>

  )
}

export default Reseller