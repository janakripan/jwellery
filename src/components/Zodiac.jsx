import React from 'react'
import { zodiac } from '../constants/zodiac'
import { Link } from 'react-router'

function Zodiac() {
  return (
    <div className='w-full max-w-screen-xl mx-auto h-fit flex flex-col items-center  mt-16 '>

        

        <h2 className=' font-poppins text-3xl tracking-tight text-gray-800 font-normal'>
        Check out our awesome selection of zodiac-based gem specials!
        </h2>
        <p className='text-lg text-gray-500 font-poppins font-normal mt-4 mb-16'>
        Embrace the Mystique of Oud: Timeless Luxury and Exotic Elegance Await
        </p>

        <ul className='w-full h-fit grid grid-cols-3'>

            {zodiac.map((item,index)=>(
            <Link key={index}>
            
             <li className='  '>

                <div className='flex flex-col items-center hover:scale-105 group transition-all duration-300 '>
                   <div className=' scale-90 rounded-lg w-fit h-fit bg-amber-300 overflow-hidden group-hover:-translate-y-5 transition-all duration-300 '>
                   <img src={item.image} alt=""  />
                   </div>

                    <h4 className='text-xl font-semibold font-poppins text-gray-800 my-8 '>
                        {item.title}
                    </h4>
                </div>
                    
             </li>
            
            </Link>

            ))}
        </ul>
      
    </div>
  )
}

export default Zodiac
