import React from 'react'
import snap from '../assets/Images_9.png'

function Snap() {
  return (
    <div className='w-full h-fit flex flex-col items-center py-16 '>

        <p className='text-gray-500 text-xs md:text-base lg:text-lg mb-4 font-poppins font-medium'>
        Share your Snap with
        </p>

        <h2 className=' text-xl md:text-3xl lg:text-4xl text-gray-800 font-poppins font-bold'>
        #ZodiacTemples
        </h2>
        <img src={snap} className='min-w-full' alt="" />
      
    </div>
  )
}

export default Snap
