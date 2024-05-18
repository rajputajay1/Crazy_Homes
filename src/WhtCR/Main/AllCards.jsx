


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllCards = () => {
    const navigate = useNavigate();

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        console.log("Ajay:", card);
        navigate('/product-detail', { state: { selectedCard: card } });

    };

    const Allcards = [
        {
            id: 0,
            Name: "Email Writing Template",
            img: "./email.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 1,
            Name: "Mockup Box Making Software",
            img: "./latest1.jpg",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 2,
            Name: "Printable Worksheets for Preschoolers",
            img: "./latest2.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 3,
            Name: "All in One Data Extractor Reseller Account",
            img: "./latest3.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 4,
            Name: "All in One Data Extractor Software",
            img: "./latest3.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 5,
            Name: "WhatsApp CRM Software",
            img: "./latest4.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 6,
            Name: "WhatsApp BotMaster Software",
            img: "./latest5.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 7,
            Name: "Email Blaster Reseller Plan",
            img: "./latest6.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 8,
            Name: "Email Blaster for Email Marketing",
            img: "./latest7.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 9,
            Name: "MS 365 + 1TB Cloud Storage",
            img: "./latest8.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 10,
            Name: "All Software Pack 2023",
            img: "./latest9.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 11,
            Name: "50 + WordPress Plugins",
            img: "./latest10.png",
            current_price: "499.00",
            original_price: "49.00",
        },
    ];


    const AllCards2 = [
        {
            id: 1000,
            Name: "Kapil Sharma Show Reels Bundle",
            img: "./reels1.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 12,
            Name: "500 + Satisfying Reel Bundle",
            img: "./reels2.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 13,
            Name: "1000 + Useful Gadgets Reels Bundle",
            img: "./reels3.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 14,
            Name: "1000 + Woodwork Reels Bundle ",
            img: "./reels4.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 15,
            Name: "500 + AI Hindi Kahani Reels Bundle",
            img: "./reels5.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 16,
            Name: "1000 + Ai Anime Reels Bundle",
            img: "./reels6.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 17,
            Name: "1000 + Free Fire Reels Bundle",
            img: "./reels7.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 18,
            Name: "2500 + Tools Reels Bundle  ",
            img: "./reels8.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 19,
            Name: "2000 + Movie Clips Reels Bundle",
            img: "./reels9.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 20,
            Name: "Chinese Funny Dub Reels Bundles",
            img: "./reels10.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 21,
            Name: "5000 + Hindi Motivational Reels Bundle",
            img: "./reels11.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            id: 22,
            Name: "2000 + Cartoon Moral Story Bundle  ",
            img: "./reels12.png",
            current_price: "499.00",
            original_price: "49.00",
        },
    ];

    const AllCards3 = [
        {
            id: 1001,
            Name: "2000 + Cartoon Moral Story Bundle ",
            img: "./top1.jpg",
            current_price: "1999.00",
            original_price: "49.00",
        },
        {
            id: 1002,
            Name: "Digital Marketing Video Course",
            img: "./top2.png",
            current_price: "1999.00",
            original_price: "49.00",
        },
        {
            id: 1003,
            Name: "Whatsapp Markting Software ",
            img: "./top3.png",
            current_price: "1999.00",
            original_price: "49.00",
        },
        {
            id: 1004,
            Name: "Printable Worksheets for Preschoolers ",
            img: "./top4.png",
            current_price: "1999.00",
            original_price: "49.00",
        },
        {
            id: 1005,
            Name: "30000 + Viral Reels Bundle ",
            img: "./top5.png",
            current_price: "1999.00",
            original_price: "49.00",
        },
        {
            id: 1006,
            Name: "50000 Digital Products ",
            img: "./top6.png",
            current_price: "1999.00",
            original_price: "49.00",
        },
    ];

    return (
        <>
            <div className='grid grid-cols-6 gap-5 lg:px-16 max-lg:px-5  max-lg:grid-cols-2'>
                {Allcards.map((card, index) => (
                    <div key={card.id} className=" cursor-pointer max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center" onClick={() => handleCardClick(card)}>

                        <img className="rounded-t-lg" src={card.img} alt="" />

                        <div className="py-2 ">
                            <p className=" text-[20px] font-bold  text-[#13008a] dark:text-white text-center px-2 italic">{card.Name}</p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                            <div className='flex justify-evenly items-center '>
                                <p className='text-[#f9847a] font-bold text-[18px]'>
                                    ₹ {card.current_price}
                                </p>
                                <p className='text-[#04a21a] font-bold text-[18px]'>
                                    ₹ {card.original_price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='lg:px-16 mt-8  max-lg:px-5'>
                <div className='flex gap-2 items-center  justify-between bg-white lg:px-10 px-5  py-5'>
                    <p className='text-2xl max-lg:text-[18px]   font-bold text-[#222222]'> <span className='text-blue-500'>REELS</span> BUNDLE

                    </p>
                    <p className='text-2xl max-lg:text-[18px] font-bold border-b-2  border-black'>
                        View More
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-6 gap-5 lg:px-16 max-lg:px-5  max-lg:grid-cols-2 mt-10'>
                {AllCards2.map((card, index) => (
                    <div key={card.id} className=" cursor-pointer max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center" onClick={() => handleCardClick(card)}>

                        <img className="rounded-t-lg" src={card.img} alt="" />

                        <div className="py-2 ">
                            <p className=" text-[20px] font-bold  text-[#13008a] dark:text-white text-center px-2 italic">{card.Name}</p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                            <div className='flex justify-evenly items-center '>
                                <p className='text-[#f9847a] font-bold text-[18px]'>
                                    ₹ {card.current_price}
                                </p>
                                <p className='text-[#04a21a] font-bold text-[18px]'>
                                    ₹ {card.original_price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='lg:px-16 mt-8  max-lg:px-5'>
                <div className='flex gap-2 items-center  justify-between bg-white lg:px-10 px-5  py-5'>
                    <p className='text-2xl max-lg:text-[18px]   font-bold text-[#222222]'> <span className='text-blue-500'>TOP SELLING </span> PRODUCTS

                    </p>
                    <p className='text-2xl max-lg:text-[18px] font-bold border-b-2  border-black'>
                        View More
                    </p>
                </div>
            </div>
            <div className='mt-8 py-14 grid grid-cols-3 gap-5 lg:px-16 max-lg:grid-cols-2  max-lg:px-5'>
                {AllCards3.map((card, index) => (

                    <div className="flex flex-col  cursor-pointer bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" onClick={() => handleCardClick(card)}>
                        <img className="object-cover w-full rounded-t-lg   md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={card.img} alt="" />
                        <div className="flex flex-col gap-3 px-5 py-2  max-md:text-center">
                            <h5 className=" text-[20px] italic font-bold tracking-tight text-gray-900 dark:text-white">{card.Name}</h5>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                            <div className='flex gap-5 items-center  max-md:justify-center '>
                                <p className='text-[#f9847a] font-bold text-[18px]'>
                                    ₹ {card.current_price}
                                </p>
                                <p className='text-[#04a21a] font-bold text-[18px]'>
                                    ₹ {card.original_price}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}

            </div>

            {/* Other card sections... */}
        </>
    );
};

export default AllCards;

