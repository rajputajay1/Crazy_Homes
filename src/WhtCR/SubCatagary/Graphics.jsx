import React from 'react'
import  { useState, useEffect } from 'react';

const Graphics = ({ sortCriteria, updateTotalResults, handleCardClick }) => {
    const Graphics = [
        {
            id: 160,
            Name: "50,000+ T-Shirt Design Package",
            img: "/49four.png",
            current_price: "499.00",
            original_price: "49.00",
          },
        {
            id: 161,
            Name: "875 GB+ Ultimate Graphic Designing Pack ",
            img: "/graphics.png",
            current_price: "499.00",
            original_price: "99.00",
          },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        updateTotalResults(Graphics.length);
    }, [Graphics.length, updateTotalResults]);

    const handleClick = (card) => {
        handleCardClick(card);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedItems = Graphics.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const totalPages = Math.ceil(Graphics.length / itemsPerPage);

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

export default Graphics