import React from 'react';
import { useLocation } from 'react-router-dom';

const Review = () => {
    const location = useLocation();
    const selectedCard = location.state.selectedCard;
    const AllReview = [
        { name: 'Jackson', date: 'April 5, 2024', rating: 5, comment: 'Very fast delivery.' },
        { name: 'Michal', date: 'April 15, 2024', rating: 5, comment: 'Very well worth the money.' },
        { name: 'Bryan', date: 'April 25, 2024', rating: 5, comment: 'The product is firmly packed.' },
        { name: 'Owen', date: 'May 1, 2024', rating: 5, comment: 'Very well worth the money.' },
        { name: 'David', date: 'May 10, 2024', rating: 5, comment: 'Very fast delivery.' }
    ];

    return (
     
        <>
            <div    className='px-8'>
                <p className='text-5xl font-semibold text-gray-800 max-lg:text-3xl max-md:text-2xl px-10 max-lg:text-center'>
                    5 reviews for {selectedCard.Name}
                </p>
                {AllReview.map((review, index) => (
                    <div key={index} className='border-2 shadow-md lg:mx-auto mt-10'>
                        <div className='flex gap-3 items-center justify-between lg:px-10 max-lg:px-5'>
                            <div className='flex gap-3 text-[16px] items-center py-3'>
                                
                                <div className="w-7 h-7 text-center items-center justify-center  rounded-full bg-gray-500 text-white font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <span className='text-gray-700 font-bold italic'>{review.name}</span>
                                <span className='font-semibold text-gray-700'>{review.date}</span>
                            </div>
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <div className='lg:px-10 max-lg:px-5 pb-5'>
                            <p className='text-[20px] font-bold text-gray-700'>{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Review;
