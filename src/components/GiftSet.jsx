import React from 'react'
import SecondSlider from './Shared/SecondSlider'

function GiftSet() {
  return (
   <div className='w-full  overflow-hidden bg-[#FCF8F3] py-10 px-4 '>
        <div className='w-full max-w-screen-xl mx-auto h-[60vh] lg:h-screen relative p-4 '>

          <div className='absolute translate-y-[25vh] lg:translate-y-[40vh]'>
            <h3 className=' text-2xl md:text-4xl lg:text-5xl text-[#3A3A3A] font-poppins '>
            Gift sets
            </h3>
            <p className='text-gray-500 w-40 md:w-60 lg:w-fit font-medium text-sm md:text-base font-poppins my-2' >
            Discover curated gift sets for your loved ones.
            </p>

            <button className='text-white shadow-lg text-sm md:text-base bg-[#22223B] rounded-lg px-8 mt-2 p-2 hover:scale-110 transition-all duration-300'>
            Explore More
            </button>
          </div>

        < SecondSlider/>

        </div>
      
   </div>
  )
}

export default GiftSet
