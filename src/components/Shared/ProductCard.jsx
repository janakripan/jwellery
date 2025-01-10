import React from 'react'

function ProductCard({
    image,
    badge,
    title,
    description,
    price,
    currency,
    altPrice,
    badgeType

}) {

    const badgecolor = (type) =>{
        switch (type){
            case 'discount':
                return 'bg-[#E97171]';
        
            case 'new':
                return 'bg-[#2EC1AC]';
            
        }
    }



  return (
    <div className={ `w-full lg:w-fit lg:m-6 bg-white rounded-lg`}>
        <div className='w-full h-fit relative rounded-lg '>
            <img src={image} className='w-full h-full' alt="" />
            <div className={`rounded-full aspect-square w-12 bg-[] absolute top-4 right-12 flex items-center justify-center
                 text-white ${badgecolor(badgeType)} `}>
                {badge}
            </div>
        </div>
        <div className='px-3 mt-2 flex flex-col '>
            <h4 className='font-poppins font-semibold text-lg md:text-xl text-gray-800'>
                {title}
            </h4>
            <p className='text-gray-500 font-poppins font-normal text-xs md:text-sm my-2'>
                {description}
            </p>
           <div className='flex flex-col md:flex-row w-fit gap-2 md:gap-4 justify-between mb-6'>
            <p className='text-gray-800 font-poppins font-semibold text-sm md:text-base '>
                {currency} {price}
            </p>
            <span className=' text-gray-400 line-through text-xs md:text-sm'>
                {currency} {altPrice}
            </span>
           </div>
        </div>
      
    </div>
  )
}

export default ProductCard
