import React from 'react'
import  { useState, useEffect } from 'react';

const Plugin_Template = ({ sortCriteria, updateTotalResults, handleCardClick }) => {

    const Temmplate = [
        {
            id: 140,
            Name: "Email Writing Template",
            img: "/email.png",
            current_price: "499.00",
            original_price: "49.00",
        },

        {
            id: 141,
            Name: "Printable Worksheets for Preschoolers",
            img: "/latest2.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 142,
            Name: "All in One Data Extractor Reseller Account",
            img: "/latest3.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 143,
            Name: "All in One Data Extractor Software",
            img: "/latest3.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 144,
            Name: "WhatsApp CRM Software",
            img: "/latest4.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 145,
            Name: "WhatsApp BotMaster Software",
            img: "/latest5.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 146,
            Name: "Email Blaster Reseller Plan",
            img: "/latest6.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 147,
            Name: "Email Blaster for Email Marketing",
            img: "/latest7.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 148,
            Name: "MS 365 + 1TB Cloud Storage",
            img: "/latest8.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 149,
            Name: "All Software Pack 2023",
            img: "/latest9.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 150,
            Name: "50 + WordPress Plugins",
            img: "/latest10.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 151,
            Name: "500+ Landing Pages Template   ",
            img: "/software1.png",
            current_price: "499.00",
            original_price: "199.00",
        },
        {
            id: 152,
            Name: "500+ Premium Shopify Themes & Templates ",
            img: "/template1.png",
            current_price: "499.00",
            original_price: "199.00",
        },
        {
            id: 153,
            Name: "Power Point Customizable Template ",
            img: "/99three.png",
            current_price: "999.00",
            original_price: "99.00",
        },
        {
            id: 154,
            Name: "1000+ Excel Customizable Template",
            img: "/99four.png",
            current_price: "499.00",
            original_price: "99.00",
        },

    ]
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        updateTotalResults(Temmplate.length);
    }, [Temmplate.length, updateTotalResults]);

    const handleClick = (card) => {
        handleCardClick(card);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedItems = Temmplate.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const totalPages = Math.ceil(Temmplate.length / itemsPerPage);
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
    )
}

export default Plugin_Template