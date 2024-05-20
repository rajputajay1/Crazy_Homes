import React from 'react'
import { useState, useEffect } from 'react';
import sale1 from '../../images/sale1.png';


const Courses = ({ sortCriteria, updateTotalResults, handleCardClick }) => {
    const course = [
        {
            id: 264,
            Name: "Spoken English Mastery Course ",
            img: "/49five.png",
            current_price: "499.00",
            original_price: "49.00",
          },
          {
            id: 265,
            Name: "The Ultimate Graphic Design Video Course ",
            img: "/49six.jpg",
            current_price: "499.00",
            original_price: "49.00",
          },
          {
            id: 265,
            Name: "Comprehensive Digital Marketing Video Course ",
            img: sale1,
            current_price: "499.00",
            original_price: "249.00",
          },
    ]
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        updateTotalResults(course.length);
    }, [course.length, updateTotalResults]);

    const handleClick = (card) => {
        handleCardClick(card);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedItems = course.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const totalPages = Math.ceil(course.length / itemsPerPage);

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
                                <p className='text-[#f9847a] font-bold text-[18px] max-lg:text-[13px]  line-through'>
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

export default Courses