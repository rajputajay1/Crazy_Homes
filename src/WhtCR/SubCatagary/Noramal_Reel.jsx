import React from 'react'
import  { useState, useEffect } from 'react';

const Noramal_Reel = ({ sortCriteria, updateTotalResults, handleCardClick }) => {
  const Normal = [
    {
      id: 301,
      Name: "Kapil Sharma Show Reels Bundle",
      img: "/reels1.png",
      current_price: "499.00",
      original_price: "49.00",
  },
  {
      id: 302,
      Name: "500 + Satisfying Reel Bundle",
      img: "/reels2.png",
      current_price: "499.00",
      original_price: "49.00",
  },
  {
      id: 303,
      Name: "1000 + Useful Gadgets Reels Bundle",
      img: "/reels3.png",
      current_price: "499.00",
      original_price: "49.00",
  },
  {
      id: 304,
      Name: "1000 + Woodwork Reels Bundle ",
      img: "/reels4.png",
      current_price: "499.00",
      original_price: "49.00",
  },
  {
      id: 305,
      Name: "500 + AI Hindi Kahani Reels Bundle",
      img: "/reels5.png",
      current_price: "499.00",
      original_price: "49.00",
  },
  {
      id: 306,
      Name: "1000 + Ai Anime Reels Bundle",
      img: "/reels6.png",
      current_price: "499.00",
      original_price: "49.00",
  },
  {
      id: 307,
      Name: "1000 + Free Fire Reels Bundle",
      img: "/reels7.png",
      current_price: "499.00",
      original_price: "49.00",
  },
  {
      id: 308,
      Name: "2500 + Tools Reels Bundle  ",
      img: "/reels8.png",
      current_price: "499.00",
      original_price: "49.00",
  },
  {
      id: 309,
      Name: "2000 + Movie Clips Reels Bundle",
      img: "/reels9.png",
      current_price: "499.00",
      original_price: "49.00",
  },
  {
      id: 310,
      Name: "Chinese Funny Dub Reels Bundles",
      img: "/reels10.png",
      current_price: "499.00",
      original_price: "49.00",
  },
  {
      id: 311,
      Name: "5000 + Hindi Motivational Reels Bundle",
      img: "/reels11.png",
      current_price: "499.00",
      original_price: "49.00",
    },
    {
      id: 312,
      Name: " 1200+ Space Reels Bundle ",
      img: "/49tone.png",
      current_price: "499.00",
      original_price: "49.00",
    },

    {
      id: 313,
      Name: " 500+ AI Hindu Sanatani Reels Bundle ",
      img: "/49sixteen.png",
      current_price: "499.00",
      original_price: "49.00",
    },
    {
      id: 314,
      Name: " 4000+ Art & Craft Reel Bundle",
      img: "/49seventeen.png",
      current_price: "499.00",
      original_price: "49.00",
    },
    {
      id: 315,
      Name: "500+ AI Islamic Reels Bundle ",
      img: "/49eighteen.png",
      current_price: "499.00",
      original_price: "49.00",
    },
    {
      id: 316,
      Name: " 600+ Hot Girls Reels Bundle ",
      img: "/49t7.png",
      current_price: "499.00",
      original_price: "49.00",
    },
    {
      id: 317,
      Name: " 500+ Cricket Reels Bundle ",
      img: "/49t2.png",
      current_price: "499.00",
      original_price: "49.00",
    },
    {
      id: 318,
      Name: " 2100+ GYM & Fitness Reels Bundle  ",
      img: "/49t5.png",
      current_price: "499.00",
      original_price: "49.00",
    },
  ]
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
      updateTotalResults(Normal.length);
  }, [Normal.length, updateTotalResults]);

  const handleClick = (card) => {
    handleCardClick(card)
  };

  const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

  const paginatedItems = Normal.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(Normal.length / itemsPerPage);

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
          <div className='flex justify-center mt-4'>
              {[...Array(totalPages).keys()].map((pageNumber) => (
                  <button
                      key={pageNumber + 1}
                      onClick={() => handlePageChange(pageNumber + 1)}
                      className={`mx-1 px-3 py-1 border ${currentPage === pageNumber + 1 ? 'bg-[#5ac670] text-white' : 'bg-white text-black'}`}
                  >
                      {pageNumber + 1}
                  </button>
              ))}
          </div>
      </>
  );
};

export default Noramal_Reel;
