import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import  {useNavigate} from  "react-router-dom"

const HeaderPart2 = () => {
    const navigate = useNavigate();
    const [browsDropdownOpen, setBrowsDropdownOpen] = useState(false);
    const [pagesDropdown, setPageDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');


    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    const handleBrowseClick = () => {
        setBrowsDropdownOpen(!browsDropdownOpen);
    };
    const handlePageClick = () => {
        setPageDropdown(!pagesDropdown);
    };

    const handleCloseDropdown = () => {
        setBrowsDropdownOpen(false);
    };

    const handleClosepage = () => {
        setPageDropdown(false);
    };

    const aboutclickpage = () => { 
        navigate("/about")
    }
    const contectclickpage = () => { 
        navigate("/contect")
    }
    const homeclickpage = () => { 
        navigate("/")
    }
    const Returnpage = () => { 
        navigate("/return-refund")
    }
    const Termpage = () => { 
        navigate("/term-condition")
    }
    const ShippingPage = () => { 
        navigate("/shipping-delivery")
    }
    const shopPage = () => { 
        navigate("/Product-category-shop")
    }
 
    return (
        <>
            <hr className='max-lg:hidden' />
            <div className='flex justify-around items-center mt-4 max-lg:hidden'>
                <div>
                    <ul className='font-semibold text-[18px] text-black flex gap-10'>
                        <div className='relative  cursor-pointer'>
                            <li
                                className={`cursor-pointer ${selectedItem === 0 ? 'text-yellow-500' : ''
                                    } hover:text-yellow-500 flex justify-center`}
                                onClick={handleBrowseClick}>
                                Browse All Category <IoMdArrowDropdown className='mt-1' />
                            </li>
                            {browsDropdownOpen && (
                                <div className='absolute cursor-pointer  mt-1 top-full left-1/2 transform -translate-x-1/2 bg-white shadow-md w-60 items-center text-center'>
                                    <p
                                        className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white'
                                        onClick={handleCloseDropdown}>
                                        Reel Bundle
                                    </p>
                                    <hr />
                                    <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white' onClick={handleCloseDropdown}>
                                        Courses{' '}
                                    </p>
                                    <hr />
                                    <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white' onClick={handleCloseDropdown}>
                                        Software{' '}
                                    </p>
                                    <hr />
                                    <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white' onClick={handleCloseDropdown}>
                                        Plugins & Template{' '}
                                    </p>
                                    <hr />
                                    <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white' onClick={handleCloseDropdown}>
                                        Graphics Bundle
                                    </p>
                                    <hr />
                                    <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white' onClick={handleCloseDropdown}>
                                        E-Book{' '}
                                    </p>
                                    <hr />
                                    <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white' onClick={handleCloseDropdown}>
                                        Free Product{' '}
                                    </p>
                                </div>
                            )}
                        </div>
                        <li
                            className={`cursor-pointer ${selectedItem === 1 ? 'text-yellow-500' : ''
                                } hover:text-yellow-500 `}
                            // onClick={() => handleItemClick(1)}
                            onClick={homeclickpage}
                        >
                            Home
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 2 ? 'text-yellow-500' : ''
                                } hover:text-yellow-500 `}
                            onClick={shopPage}>
                            Shop
                        </li>

                        <div className='relative'>
                            <li
                                className={`   cursor-pointer  ${selectedItem === 3 ? 'text-yellow-500' : ''
                                    } hover:text-yellow-500 flex  justify-center`}
                                onClick={handlePageClick}>
                                Pages <IoMdArrowDropdown className='mt-1'></IoMdArrowDropdown>
                            </li>
                            {pagesDropdown && (
                                <div className='absolute  cursor-pointer   mt-1   left-1/2 transform -translate-x-1/2 bg-white shadow-md w-60 items-center text-center'>
                                    <p
                                        className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white'
                                        onClick={Returnpage} >
                                        Return & Refund Policy
                                    </p>
                                    <hr />
                                    <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white' onClick={ShippingPage} >
                                        Shipping & Delivery Policy{' '}
                                    </p>
                                    <hr />
                                    <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white' onClick={Termpage} >
                                        Term & Condition{' '}
                                    </p>

                                </div>
                            )}
                        </div>
                        <li
                            className={`cursor-pointer ${selectedItem === 4 ? 'text-yellow-500' : ''
                                } hover:text-yellow-500 `}
                            // onClick={() => handleItemClick(4)}
                            onClick={aboutclickpage}
                        >
                            About Us
                        </li>
                        <li
                            className={`cursor-pointer ${selectedItem === 5 ? 'text-yellow-500' : ''
                                } hover:text-yellow-500 `}
                            // onClick={() => handleItemClick(5)}
                            onClick={contectclickpage}
                        >
                            Contact Us
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-[18px] font-semibold'>
                        Sale 50% Off Your First Order Use Promo "FIRST01"
                    </p>
                </div>
            </div>
            <hr className='mt-5' />
        </>
    );
};

export default HeaderPart2;
