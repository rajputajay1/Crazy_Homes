import React from 'react'
import img1 from "../../images/room.jpg"
import img2 from "../../images/room1.jpg"
import img3 from "../../images/room2.jpg"
import free from "../../images/free.png"

const ImagesPart = () => {
  return (
    <>
      <div >
        <div className='flex justify-evenly items-center max-lg:flex-col gap-5 lg:pt-10 '>
          <div className=' '>
            <img src='./18.png' alt="" className='lg:h-[620px] lg:w-[800px] max-lg:h-[300px] max-lg:w-[450px] ' />
          </div>
          <div className=' flex flex-col gap-5'>
            <img src={img2} alt="" className=' lg:h-[300px] lg:w-[500px] max-lg:h-[300px] max-lg:w-[450px]' />
            <img src={img3} alt="" className='lg:h-[300px] lg:w-[500px] max-lg:h-[300px] max-lg:w-[450px]' />
          </div>
        </div>
        <div className='px-16  max-lg:hidden'>
          <div className='flex justify-around  mt-6  bg-white py-5  '>
            <div className='flex flex-col justify-center  mt-2 items-center'>
              <div className="border-2 rounded-full shadow-md">
                <img src='./cir.png' alt="" height={130} width={130} />
              </div>
              <p className='text-[18px] font-bold'>JOIN WHATSAPP</p>
              <p className='text-[12px] font-semibold'>For Free Products</p>
            </div>
            <div className='flex flex-col justify-center  mt-2 items-center'>
              <div className="border-2 rounded-full shadow-md">
                <img src='./cir.png' alt="" height={130} width={130} />
              </div>
              <p className='text-[18px] font-bold'>AI REELS</p>
              <p className='text-[12px] font-semibold'>
                Products (25)
              </p>
            </div>
            <div className='flex flex-col justify-center  mt-2 items-center'>
              <div className="border-2 rounded-full shadow-md">
                <img src='./cir.png' alt="" height={130} width={130} />
              </div>
              <p className='text-[18px] font-bold'>MEGA BUNDLE</p>
              <p className='text-[12px] font-semibold'>
                Products (9)</p>
            </div>
            <div className='flex flex-col justify-center  mt-2 items-center'>
              <div className="border-2 rounded-full shadow-md">
                <img src='./cir.png' alt="" height={130} width={130} />
              </div>
              <p className='text-[18px] font-bold'>₹ 49 STORE</p>
              <p className='text-[12px] font-semibold'>
                Products (90)</p>
            </div>
            <div className='flex flex-col justify-center  mt-2 items-center'>
              <div className="border-2 rounded-full shadow-md">
                <img src='./cir.png' alt="" height={130} width={130} />
              </div>
              <p className='text-[18px] font-bold'>₹ 99 STORE
              </p>
              <p className='text-[12px] font-semibold'>Products (75)</p>
            </div>
            <div className='flex flex-col justify-center  mt-2 items-center'>
              <div className="border-2 rounded-full shadow-md">
                <img src='./cir.png' alt="" height={130} width={130} />
              </div>
              <p className='text-[18px] font-bold'>₹ 149 STORE
              </p>
              <p className='text-[12px] font-semibold'>Products (15)</p>
            </div>
            <div className='flex flex-col justify-center  mt-2 items-center'>
              <div className="border-2 rounded-full shadow-md">
                <img src='./cir.png' alt="" height={130} width={130} />
              </div>
              <p className='text-[18px] font-bold'>₹ 199 STORE
              </p>
              <p className='text-[12px] font-semibold'>Products (50)</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ImagesPart