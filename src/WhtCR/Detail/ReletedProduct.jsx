import React from 'react';

const RelatedProduct = () => {
    const RelatedProducts = [
        {
            Name: "1000+ Nature Reels Bundle",
            img: "./releted.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            Name: "4000+ Art & Craft Reel Bundle",
            img: "./releted1.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            Name: "600+ Hot Girls Reels Bundle",
            img: "./releted2.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        {
            Name: "500+ Cricket Reels Bundle",
            img: "./releted3.png",
            current_price: "499.00",
            original_price: "49.00",
        },
        
    ];
    return (
        <>
            <p  className='text-3xl font-bold  max-lg:text-2xl  text-blue-500 mb-5 lg:px-8 max-lg:px-8  pt-8 '>
                Releted Products
            </p>
            <div className='grid grid-cols-4 lg:gap-20 max-lg:gap-7  max-lg:px-8  max-lg:grid-cols-2  pb-10 lg:px-8 '>
                {RelatedProducts.map((card, index) => (
                    <div key={index} className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <a href="#">
                            <img className="rounded-t-lg" src={card.img} alt="" />
                        </a>
                        <div className="py-2">
                            <p className="text-[20px] font-bold text-[#13008a] dark:text-white text-center px-2 italic lg:text-nowrap">{card.Name}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">⭐⭐⭐⭐⭐</p>
                            <div className='flex justify-evenly items-center gap-2'>
                                <p className='text-[#f9847a] font-bold text-[16px]'>
                                    ₹ {card.current_price}
                                </p>
                                <p className='text-[#04a21a] font-bold text-[16px]'>
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

export default RelatedProduct;
