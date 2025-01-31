import React from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function WhishlistCard({item,toggleWhishlist,addToCart}) {
  return (
    <div className=' w-full h-full bg-white rounded-lg p-2'>
   <div className='w-full aspect-square rounded-lg overflow-hidden'>
   <img src={item.image} className='object-contain' alt="" />
   </div>
   <div className='w-full h-fit mt-2  flex flex-col items-start'>
    <h4 className='text-base font-poppins font-semibold text-gray-800'>
        {item.title}
    </h4>
    <span className='text-amber-500 text-sm font-semibold'>
        {item.price} {item.currency}
    </span>

   </div>
    <div className='w-full h-fit flex justify-between items-center mt-2 mb-2'>
        <div>
            <button 
            onClick={()=>{addToCart(item),toggleWhishlist(item)}}
            className='text-white bg-amber-500 px-4 py-2 whitespace-nowrap text-xs rounded-md'>
                Add To Cart
            </button>
        </div>
        <button onClick={()=>toggleWhishlist(item)} className='text-red-500 p-0 text-3xl '>
        <AiFillHeart/>
        </button>
    </div>
</div>
  )
}

export default WhishlistCard
