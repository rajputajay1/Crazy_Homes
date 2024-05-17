import React from 'react'
import down from "../../images/down.svg"
import lock from "../../images/lock.svg"
import support from "../../images/support.svg"
import { useState } from 'react'
import Review from './Review'
import Discription from './Discription'
const DetailPart = () => {
    const [activeTab, setActiveTab] = useState('description');
  
    return (
        <>
            <div>
            <div className="flex items-center justify-center gap-5 mt-6 md:flex-row">
                    <a
                        onClick={() => setActiveTab('description')}
                        className={`text-center lg:w-40 max-lg:w-28 lg:px-6 py-4 max-lg:py-2 text-white text-[20px] max-lg:text-[17px] font-bold transition-all rounded-md bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b ${activeTab === 'description' ? '' : 'opacity-50'}`}
                    >
                        Description
                    </a>
                    <a
                        onClick={() => setActiveTab('review')}
                        className={`text-center lg:w-40 max-lg:w-28 max-lg:px-2 lg:px-6 lg:py-4 max-lg:py-2 text-white transition-all max-lg:text-[17px] text-[20px] bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md hover:bg-gray-900 hover:text-white ${activeTab === 'review' ? '' : 'opacity-50'}`}
                    >
                        Review
                    </a>
                </div>
                <div className="pt-5 ">
                    {activeTab === 'description' && <Discription />}
                    {activeTab === 'review' && <Review  />}
                </div>
                <div class=" pt-12 px-8">
                    <div class="grid gap-14 md:grid-cols-3 md:gap-5 max-lg:grid-cols-1 max-lg:gap-10">
                        <div class="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div
                                class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full  shadow-sm">
                             <img src={down} alt="" />
                            </div>
                            <h1 class=" mb-3 text-3xl font-bold lg:px-14 italic max-lg:text-2xl text-gray-800">Instant Download</h1>
                            <p class="px-4 text-gray-500  text-[20px] font-semibold max-lg:text-[16px]">Instant Download: Download your digital content right away with only one click and no waiting.</p>
                        </div>
                        <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div
                                class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full  ">
                            <img src={lock} alt="" />
                            </div>
                            <h1 class="text-darken mb-3 text-3xl  max-lg:text-2xl font-medium lg:px-14 italic text-gray-800">Secure Payment</h1>
                            <p class="px-4 text-gray-500 text-[20px] font-semibold max-lg:text-[16px]">We provide secure payment options to provide worry-free transactions and peace of mind.</p>
                        </div>
                        <div data-aos-delay="300" class="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div
                                class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full  ">
                             <img src={support} alt="" />
                            </div>
                            <h1 class="text-darken mb-3 text-3xl  max-lg:text-2xl font-medium lg:px-14 italic text-gray-800 lg:text-nowrap">Swift Support Solutions</h1>
                            <p class="px-4 text-gray-500 text-[20px] font-semibold max-lg:text-[16px]">Our committed staff responds to your problems quickly and expertly, providing efficient solutions.</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default DetailPart