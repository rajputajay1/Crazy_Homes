import React, { useEffect } from 'react';

const One199 = ({ sortCriteria, updateTotalResults,handleCardClick }) => {
  const All199 = [
    {
      id: 40,
      Name: "875 GB+ Ultimate Graphic Designing Pack",
      img: "/199.png",
      current_price: "499.00",
      original_price: "199.00",
    },
    {
      id: 41,
      Name: "Comprehensive Digital Marketing Video Course",
      img: "/199two.png",
      current_price: "1700.00",
      original_price: "199.00",
    },
    {
      id: 42,
      Name: "500+ Landing Pages Template ",
      img: "/199three.png",
      current_price: "1999.00",
      original_price: "199.00",
    },
    {
      id: 43,
      Name: "2000+ Cartoon Moral Story Bundle ",
      img: "/199four.png",
      current_price: "499.00",
      original_price: "199.00",
    },
    {
      id: 44,
      Name: "WhatsApp Marketing Software ",
      img: "/199five.png",
      current_price: "499.00",
      original_price: "199.00",
    },
  ];

  useEffect(() => {
    updateTotalResults(All199.length);
  }, [All199.length, updateTotalResults]);

  const handleClick = (card) => {

    handleCardClick(card);

};
  return (
    <>
      <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-2'>
        {All199.map((card) => (
          <div key={card.id} className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center" onClick={() => handleClick(card)}>
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
  );
}

export default One199;
