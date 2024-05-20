import React from 'react'
import ImagesPart from './ImagesPart'
import Deal from './Deal'
import Sale from './Sale'
import AllCards from './AllCards'
const AllMain = () => {
  return (
    <>
      <div className='bg-[#eff6ff] max-lg:py-10'>
        <ImagesPart />
        <Deal />
        <Sale />
        <AllCards />


      </div>

    </>
  )
}

export default AllMain