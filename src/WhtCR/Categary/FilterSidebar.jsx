import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Catagery1 from './Catagery1';
import One199 from '../SubCatagary/One199';
import NineNine from '../SubCatagary/NineNine';
import Only49 from '../SubCatagary/only49';
import Only21 from '../SubCatagary/Only21';
import Software from '../SubCatagary/Software';
import Plugin_Template from '../SubCatagary/Plugin_Template';
import Graphics from '../SubCatagary/Graphics';
import E_Book from '../SubCatagary/E_Book';
import Noramal_Reel from '../SubCatagary/Noramal_Reel';
import Courses from '../SubCatagary/Courses';
import Ai_Reel from '../SubCatagary/Ai_Reel';
import Reel_Bundle from '../SubCatagary/Reel_Bundle';
import Reseller from '../SubCatagary/Reseller';
import Tranding_Product from '../SubCatagary/Tranding_Product';
const FilterSidebar = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [sortCriteria, setSortCriteria] = useState('Latest');
    const [totalResults, setTotalResults] = useState(0);



    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleFilterClick = () => {
        setFilterOpen(!filterOpen);
    };

    const handleSortChange = (criteria) => {
        setSortCriteria(criteria);
        setFilterOpen(false);
    };

    const updateTotalResults = (count) => {
        setTotalResults(count);
    };
    const renderSelectedCategoryComponent = () => {
        switch (selectedCategory) {
            case '₹199 Store':
                return <One199 sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case '₹99 Store':
                return <NineNine sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case '₹49 Store':
                return <Only49 sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case '₹21 Store':
                return <Only21 sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case 'Software':
                return <Software sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case 'Plugins & Template':
                return <Plugin_Template sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case 'Graphics Bundle':
                return <Graphics sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case 'E-Book':
                return <E_Book sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case 'Courses':
                return <Courses sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case 'Normal Reels':
                return <Noramal_Reel sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case 'AI Real Bundle':
                return <Ai_Reel sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case 'Real Bundle':
                return <Reel_Bundle sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case 'Reseller Account':
                return <Reseller sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            case 'Trending Product':
                return <Tranding_Product sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} handleCardClick={handleCardClick} />;
            default:
                return <Catagery1 sortCriteria={sortCriteria} updateTotalResults={updateTotalResults} />;
        }
    };

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        console.log("Ajay:", card);
        navigate('/product-detail', { state: { selectedCard: card } });

    };
    return (
        <>
            <div className='bg-[#5ac670]'>
                <p className='text-5xl font-extrabold text-white text-center pb-4'>
                    Category: Shop
                </p>
            </div>
            <div className='flex lg:gap-10 mt-10 max-lg:flex-col pb-10'>
                <div className='px-10 bg-white shadow-lg'>
                    <p className='text-[20px] font-bold text-gray-800 text-nowrap'>
                        PRODUCT CATEGORIES
                    </p>
                    <ul className='flex flex-col gap-1 text-[16px] font-bold text-gray-800 mt-4 cursor-pointer'>
                        {[
                            'Trending Product',
                            'Reseller Account',
                            'Real Bundle',
                            'AI Real Bundle',
                            'Animation Reels',
                            'Normal Reels',
                            'Courses',
                            'E-Book',
                            'Graphics Bundle',
                            'Plugins & Template',
                            'Software',
                            '₹21 Store',
                            '₹49 Store',
                            '₹99 Store',
                            '₹199 Store',
                        ].map((category, index) => (
                            <li
                                key={index}
                                className={`hover:text-[#5ac670] border-b py-1 items-center  ${selectedCategory === category ? 'text-[#5ac670] ' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex-1 bg-white shadow-lg lg: max-lg:px-7 px-16 pb-10'>
                    <div className='flex justify-between pb-10'>
                        <p className='text-[18px] font-semibold text-gray-800'>
                            Showing {totalResults} results
                        </p>
                        <div className='relative cursor-pointer'>
                            <p className='text-[18px] font-semibold text-gray-800' onClick={handleFilterClick}>
                                Sort by {sortCriteria}
                            </p>
                            {filterOpen && (
                                <div className='absolute mt-1 top-full left-1/2 transform -translate-x-1/2 bg-white shadow-md w-60'>
                                    {['Popularity', 'Latest', 'Price: high to low', 'Price: low to high'].map((criteria, index) => (
                                        <p
                                            key={index}
                                            className='text-[15px] py-2 font-bold text-gray-800 hover:bg-blue-400 hover:text-white px-2'
                                            onClick={() => handleSortChange(criteria)}
                                        >
                                            Sort by {criteria}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {renderSelectedCategoryComponent()}
                </div>
            </div>
        </>
    );
};

export default FilterSidebar;
