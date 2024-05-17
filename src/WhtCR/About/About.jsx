import React from 'react'

const About = () => {
  return (
    <>
      <div className='bg-[#eff6ff] h-full '>


        <div className='pt-5 pb-14  px-10 '>
          <p className='text-center font-bold text-5xl text-gray-700 max-lg:text-3xl max-md:2xl'>
            About Us
          </p>
          <div className='text-gray-600 lg:pt-5 max-lg:pt-2  text-2xl  max-lg:text-[17px]'>
            <p className=' font-semibold  py-3'>
              Welcome to Online Digital Items, your number one source for all things Digital Product. with an emphasis on Instant Access. Founded in 2023 by Subhankar Patra,
            </p>
            <p className=' font-semibold   py-3'>
              Our sell Digital products are products that only exist in digital form and are created, sold, and purchased online. They can be anything from e-books, online courses, software, music, videos, to webinars, podcasts, and more.
            </p>
            <p className=' font-semibold   py-4'>
              We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us.
            </p>

          </div>
          <div  className='text-2xl  max-lg:text-[17px]'>
            <p className='font-semibold   py-1  cursor-pointer  text-gray-700' >
              Email :<span className='text-blue-400'> info.techquasarservices@gmail.com </span>

            </p>
            <p className='font-semibold   py-1 cursor-pointer text-gray-700' >
              Phone No :<span className='text-blue-400'> 9501433347</span>

            </p>
            <p className='font-semibold   py-1 cursor-pointer  text-gray-700' >
              Address :<span className='text-blue-400'> Arampur, Gosaba, South 24 Parganas, 743370 – West Bengal , India

              </span>

            </p>
          </div>
        </div>
      </div>
    </>

  )
}

export default About