import React from 'react'
import SecondSlider from './Shared/SecondSlider'
import { motion } from "motion/react";

function GiftSet() {
  return (
   <div className='w-full  overflow-hidden bg-[#FCF8F3] py-10 px-4 '>
        <div className='w-full max-w-screen-xl mx-auto h-[60vh] lg:h-screen relative p-4 '>

          <div className='absolute translate-y-[25vh] lg:translate-y-[40vh]'>
            <motion.h3
            initial={{opacity:0 , x: -100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration: .5 , delay: 0}}
            viewport={{once:true , amount:.4}}
            className=' text-2xl md:text-4xl lg:text-5xl text-[#3A3A3A] font-poppins '>
            Gift sets
            </motion.h3>
            <motion.p
            initial={{opacity:0 , x: -100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration: .5 , delay: .2}}
            viewport={{once:true , amount:.4}}
            className='text-gray-500 w-40 md:w-60 lg:w-fit font-medium text-sm md:text-base font-poppins my-2' >
            Discover curated gift sets for your loved ones.
            </motion.p>

            <motion.button 
            initial={{opacity:0, scale: 0}}
            whileInView={{opacity:1 , scale:1}}
            transition={{duration:.7 , delay:0}}
            className='text-white shadow-lg text-sm md:text-base bg-[#22223B] rounded-lg px-8 mt-2 p-2 hover:scale-110 transition-all duration-300'>
            Explore More
            </motion.button>
          </div>

        < SecondSlider/>

        </div>
      
   </div>
  )
}

export default GiftSet
