import React from 'react'
import { Link } from 'react-router'
import { range } from '../constants/range'

function Range() {
  return (
    <div className='w-full h-fit max-w-screen-xl mx-auto flex flex-col items-center mt-16 mb-10 p-4'>

        <h2  className=' font-poppins text-lg md:text-2xl lg:text-3xl tracking-tight text-gray-800 font-normal' >
        Browse The Range
        </h2>

        <p  className=' text-sm md:text-lg lg:text-xl text-gray-500 font-poppins font-normal mt-4 mb-8' >
        Discover our wide selection of Gems
        </p>

        <ul className=' w-full h-fit grid grid-cols-3 gap-2 '>
           {range.map((item, index)=>(
             <Link to={item.path} key={index}>
             <li >
             <div className='flex flex-col items-center justify-center group hover:scale-105 transition-all duration-300'>
                 <div className='rounded-lg overflow-hidden group-hover:-translate-y-5 transition-all duration-300'>
                     <img src={item.image} alt="" />
                 </div>
                 <h3 className='font-semibold text-sm md:text-lg lg:text-xl text-center font-poppins my-10 '>
                    {item.title}
                 </h3>
             </div>
             </li>
             </Link>
           ))}
        </ul>
      
    </div>
  )
}

export default Range
