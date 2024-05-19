import React from 'react'
import  { useState, useEffect } from 'react';

const Ai_Reel = ({ sortCriteria, updateTotalResults, handleCardClick }) => {
    const AiReels = [
        {
            id: 601,
            Name: "500+ AI Hindi Kahani Reels Bundle ",
            img: "/49seven.png",
            current_price: "499.00",
            original_price: "49.00",
          },
          {
            id: 602,
            Name: " 1000+ Ai Anime Reels Bundle ",
            img: "/49eig.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 603,
            Name: " 500+ AI Hindu Sanatani Reels Bundle ",
            img: "/49sixteen.png",
            current_price: "499.00",
            original_price: "49.00",
          },
     
          {
          id: 604,
            Name: "500+ AI Islamic Reels Bundle ",
            img: "/49eighteen.png",
            current_price: "499.00",
            original_price: "49.00",
          },
          {
            id: 605,
            Name: " 600+ Hot Girls Reels Bundle ",
            img: "/49t7.png",
            current_price: "499.00",
            original_price: "49.00",
          },
     
          {
            id: 606,
            Name: "1800+ AI Motivational Reels ",
            img: "/49t3.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 607,
            Name: " 600+ AI Health Reels Bundle ",
            img: "/49t4.png",
            current_price: "499.00",
            original_price: "49.00",
          },
          {
            id: 608,
            Name: " 2100+ GYM & Fitness Reels Bundle  ",
            img: "/49t5.png",
            current_price: "499.00",
            original_price: "49.00",
          },
    ]
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    useEffect(() => {
        updateTotalResults(AiReels.length);
    }, [AiReels.length, updateTotalResults]);
  
    const handleClick = (card) => {
        handleCardClick(card);
    };
  
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
  
    const paginatedItems = AiReels.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
    const totalPages = Math.ceil(AiReels.length / itemsPerPage);
  
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
                                <p className='text-[#f9847a] font-bold text-[18px] max-lg:text-[13px]'>
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
    );
  };
  
  export default Ai_Reel;
  