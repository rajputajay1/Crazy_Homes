import React from 'react'
import FilterSidebar from './FilterSidebar'
import Catagery1 from './Catagery1'
const AllCatagary = () => {
    return (
        <>
            <div className='bg-[#5ac670]'>
                <p className='text-5xl font-extrabold text-white text-center pb-4'>
                    Category: Shop
                </p>

            </div>
            <div className='flex gap-10 mt-10'>
                <FilterSidebar className="" />
                <Catagery1 />
            </div>


        </>
    )
}

export default AllCatagary