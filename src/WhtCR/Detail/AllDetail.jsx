import React from 'react'

import Detail from "./Detail"
import DetailPart from './DetailPart'
import ReletedProduct from './ReletedProduct'
import FAQSection from './Faq'
const AllDetail = () => {

  return (
    <>
      <div className='bg-blue-50'>


        <Detail />
        <DetailPart />
        <ReletedProduct />
        <FAQSection />
      </div>

    </>
  )
}

export default AllDetail