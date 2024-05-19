

import React, { useState, useEffect } from 'react';

const Only49 = ({ sortCriteria, updateTotalResults, handleCardClick }) => {
    const All49= [
        {
          id: 60,
          Name: "Life Transforming Best Selling E-books",
          img: "/49.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 61,
          Name: "Email Writing Template ",
          img: "/49two.png",
          current_price: "1700.00",
          original_price: "49.00",
        },
        {
          id: 62,
          Name: "Mockup Box Making Software ",
          img: "/49three.jpg",
          current_price: "1999.00",
          original_price: "49.00",
        },
        {
          id: 63,
          Name: "50,000+ T-Shirt Design Package",
          img: "/49four.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 64,
          Name: "Spoken English Mastery Course ",
          img: "/49five.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 65,
          Name: "The Ultimate Graphic Design Video Course ",
          img: "/49six.jpg",
          current_price: "499.00",
          original_price: "49.00",
        },
     
        {
          id: 66,
          Name: "500+ AI Hindi Kahani Reels Bundle ",
          img: "/49seven.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 67,
          Name: " 1000+ Ai Anime Reels Bundle ",
          img: "/49eig.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 68,
          Name: " 1000+ Free Fire Reels Bundle ",
          img: "/49ni.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 69,
          Name: " 2500+ Tools Reels Bundle ",
          img: "/49ten.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 70,
          Name: " 2000+ Movie Clips Reels Bundle ",
          img: "/49ele.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 71,
          Name: " Chinese Funny Dub Reels Bundles ",
          img: "/49twe.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 72,
          Name: " 5000+ Hindi Motivational Reels Bundle ",
          img: "/49thriteen.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 73,
          Name: " 1200+ Space Reels Bundle ",
          img: "/49tone.png",
          current_price: "499.00",
          original_price: "49.00",
        },
 
        {
          id: 75,
          Name: " 500+ AI Hindu Sanatani Reels Bundle ",
          img: "/49sixteen.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 76,
          Name: " 4000+ Art & Craft Reel Bundle",
          img: "/49seventeen.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 77,
          Name: "500+ AI Islamic Reels Bundle ",
          img: "/49eighteen.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 78,
          Name: " 600+ Hot Girls Reels Bundle ",
          img: "/49t7.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 79,
          Name: " 500+ Cricket Reels Bundle ",
          img: "/49t2.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 80,
          Name: "1800+ AI Motivational Reels ",
          img: "/49t3.png",
          current_price: "499.00",
          original_price: "49.00",
        },
   
        {
          id: 82,
          Name: " 600+ AI Health Reels Bundle ",
          img: "/49t4.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 83,
          Name: " 2100+ GYM & Fitness Reels Bundle  ",
          img: "/49t5.png",
          current_price: "499.00",
          original_price: "49.00",
        },
        {
          id: 84,
          Name: " 500+ AI Fitness Reels Bundle ",
          img: "/49t6.png",
          current_price: "499.00",
          original_price: "49.00",
        },
     
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        updateTotalResults(All49.length);
    }, [All49.length, updateTotalResults]);

    const handleClick = (card) => {
        handleCardClick(card);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedItems = All49.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const totalPages = Math.ceil(All49.length / itemsPerPage);

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

export default Only49;
