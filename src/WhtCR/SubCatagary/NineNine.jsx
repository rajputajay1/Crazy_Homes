import React from 'react'
import { useEffect } from 'react';

const NineNine = ({ sortCriteria, updateTotalResults }) => {
  const All99 = [
    {
        id: 45,
        Name: "All Software Pack 2023",
        img: "./99one.png",
        current_price: "499.00",
        original_price: "99.00",
    },
    {
        id: 46,
        Name: "50+ WordPress Plugins",
        img: "./99two.png",
        current_price: "1700.00",
        original_price: "99.00",
    },
    {
        id: 47,
        Name: "Power Point Customizable Template ",
        img: "./99three.png",
        current_price: "999.00",
        original_price: "99.00",
    },
    {
        id: 48,
        Name: "1000+ Excel Customizable Template",
        img: "./99four.png",
        current_price: "499.00",
        original_price: "99.00",
    },
 
 
  ];

  useEffect(() => {
    updateTotalResults(All99.length);
  }, [All99.length, updateTotalResults]);
  return (
    <>
    <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-2'>
      {All99.map((card) => (
        <div key={card.id} className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <img className="rounded-lg" src={card.img} alt={card.Name} />
          <div className="py-2">
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
  )
}

export default NineNine