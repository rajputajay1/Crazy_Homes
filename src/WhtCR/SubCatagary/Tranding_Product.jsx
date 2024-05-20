import React from 'react'
import sale1 from '../../images/sale1.png'
import sale3 from '../../images/sale3.png'
import sale4 from '../../images/sale4.png'
import book from '../../images/book.png'
import { useState, useEffect } from 'react';

const Tranding_Product = ({ sortCriteria, updateTotalResults, handleCardClick }) => {
    const Tranding = [
        {
            id: 901,
            Name: "Comprehensive Digital Marketing Video Course  ",
            img: sale1,
            current_price: "1999.00",
            original_price: "199.00",
          },
        {
            id: 902,
            Name: "WhatsApp Marketing Software Reseller Account   ",
            img: book,
            current_price: "1999.00",
            original_price: "199.00",
          },
        {
            id: 903,
            Name: "500+ Landing Pages Template ",
            img: sale3,
            current_price: "1999.00",
            original_price: "199.00",
          },
        {
            id: 904,
            Name: "2000+ Cartoon Moral Story Bundle ",
            img: sale4,
            current_price: "1999.00",
            original_price: "199.00",
          },
        
    ]
    
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
      updateTotalResults(Tranding.length);
  }, [Tranding.length, updateTotalResults]);

  const handleClick = (card) => {
      handleCardClick(card);
  };

  const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

  const paginatedItems = Tranding.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(Tranding.length / itemsPerPage);

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
  );
};

export default Tranding_Product;
