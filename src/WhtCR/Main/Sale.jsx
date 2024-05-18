import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import sale1 from '../../images/sale1.png';
import sale3 from '../../images/sale3.png';
import sale4 from '../../images/sale4.png';
import book from '../../images/book.png';

const Sale = () => {
    const saleItems = [
        {
            id: 1111,
            name: "Comprehensive Digital Marketing Video Course",
            img: sale1,
            current_price: "1999.00",
            original_price: "199.00",
        },
        {
            id: 1112,
            name: "WhatsApp Marketing Software Reseller Account",
            img: book,
            current_price: "1700.00",
            original_price: "200.00",
        },
        {
            id: 1113,
            name: "500+ Landing Pages Template",
            img: sale3,
            current_price: "1700.00",
            original_price: "200.00",
        },
        {
            id: 1114,
            name: "2000+ Cartoon Moral Story Bundle",
            img: sale4,
            current_price: "1700.00",
            original_price: "200.00",
        },
    ];

    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        navigate('/product-detail', { state: { selectedCard: card } });
    };

    const MoreClick = () => {
        navigate("/product-category-shop");
    };

    return (
        <>
            <div className='lg:flex gap-10 lg:px-16 justify-around'>
                <img src="./19.png" alt="Sale Banner" className='lg:h-[450px] max-lg:w-full max-lg:px-5' />
                <div className='grid grid-cols-4 justify-center gap-5 max-lg:grid-cols-2 max-lg:px-5 max-lg:mt-5'>
                    {saleItems.map((item) => (
                        <div 
                            key={item.id}
                            className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center cursor-pointer"
                            onClick={() => handleCardClick(item)}
                        >
                            <img className="rounded-t-lg" src={item.img} alt={item.name} />
                            <div className="pt-5">
                                <h5 className="mb-2 text-[20px] italic font-bold tracking-tight text-[#13008a] dark:text-white">
                                    {item.name}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                                <div className='flex justify-evenly'>
                                    <p className='text-[#f9847a] font-bold text-[18px]'>
                                        ₹{item.current_price}
                                    </p>
                                    <p className='text-[#04a21a] font-bold text-[18px] line-through'>
                                        ₹{item.original_price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='lg:px-16 mt-8 max-lg:px-5 pb-10'>
                <div className='flex gap-2 items-center justify-between bg-white lg:px-10 px-5 py-5'>
                    <p className='text-2xl max-lg:text-[18px] font-bold text-[#222222]'>
                        <span className='text-blue-500'>LATEST</span> PRODUCTS!
                    </p>
                    <p 
                        className='text-2xl max-lg:text-[18px] font-bold border-b-2 border-black cursor-pointer'
                        onClick={MoreClick}
                    >
                        View More
                    </p>
                </div>
            </div>
        </>
    );
};

export default Sale;
