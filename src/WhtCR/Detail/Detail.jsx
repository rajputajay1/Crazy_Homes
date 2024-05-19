import React from 'react';
import payment from "../../images/payment1.png";
import pay from "../../images/pay1.png";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Features/CardSlice';

const Detail = () => {
    const location = useLocation();
    const selectedCard = location.state.selectedCard;

    const dispatch =useDispatch()
   
    const send = (e) => {
        dispatch(addToCart(e))
    
    }
    return (
        <div className="pb-8">
            <p className='text-center font-bold text-5xl text-[#5ac670] max-lg:text-3xl py-9'>{selectedCard.Name}</p>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[500px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 bg-cover">
                            <img className="w-full h-full object-cover" src={selectedCard.img} alt="Product Image" />
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                                onClick={()=>send(selectedCard)}
                                >Add to Cart</button>
                            </div>
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                            </div>
                        </div>
                       
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-3xl max-lg:text-2xl font-bold text-gray-800 dark:text-white mb-2">{selectedCard.Name}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-[18px] font-bold mb-4">
                            ⭐⭐⭐⭐⭐ (157 Customer reviews)
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-[15px] mb-4">
                            These software tools offer a wide range of mockup templates for different products, including boxes, books, CDs, apparel, digital screens, and more
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4 text-[20px] max-lg:text-[17px]">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                <span className="text-gray-600 dark:text-gray-300">{selectedCard.original_price}</span>
                            </div>
                        </div>
                        <div className="bg-black mb-4"></div>
                        <div className="mb-4 justify-center flex flex-col text-center items-center">
                            <img src={payment} alt="" className='h-40 w-60' />
                            <img src={pay} alt="" className='h-30 w-96' />
                            <span className="font-bold text-gray-700 dark:text-gray-300 text-2xl text-center">Limited Offer</span>
                            <div className='gap-5 flex mt-3 flex-wrap justify-center'>
                                <div className='bg-[#ff0000] inline-block px-5 rounded-md w-24 items-center justify-center text-center'>
                                    <p className='text-white font-bold text-2xl'>30</p>
                                    <p className='text-white font-bold text-[14px]'>Days</p>
                                </div>
                                <div className='bg-[#ff0000] inline-block px-5 rounded-md w-24 items-center justify-center text-center'>
                                    <p className='text-white font-bold text-2xl'>07</p>
                                    <p className='text-white font-bold text-[14px]'>Hours</p>
                                </div>
                                <div className='bg-[#ff0000] inline-block px-5 rounded-md w-24 items-center justify-center text-center'>
                                    <p className='text-white font-bold text-2xl'>32</p>
                                    <p className='text-white font-bold text-[14px]'>Minutes</p>
                                </div>
                                <div className='bg-[#ff0000] inline-block px-5 rounded-md w-24 items-center justify-center text-center'>
                                    <p className='text-white font-bold text-2xl'>56</p>
                                    <p className='text-white font-bold text-[14px]'>Seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
