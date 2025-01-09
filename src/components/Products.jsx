import React from 'react'
import { products } from '../constants/products'
import ProductCard from './Shared/ProductCard'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ShareIcon from '@mui/icons-material/Share';

function Products() {
  return (
    <div className='w-full max-w-screen-xl mx-auto flex flex-col items-center'>

        <h2 className='text-4xl text-gray-800 font-normal font-poppins mb-8 '>
        Our Products
        </h2>

        <ul className=' w-full h-fit grid grid-cols-4'>

            {products.map((item,index)=>(
               <li className='group relative hover:scale-105 transition-all duration-500 ' key={index}>
                <ProductCard
                image={item.image}
                badge={item.badge}
                title={item.title}
                description={item.Description}
                price={item.price}
                currency={item.currency}
                altPrice={item.altPrice}
                badgeType={item.badgeType}
                
                />
                <div className='  flex flex-col justify-center items-center absolute inset-0 rounded-lg group-hover:bg-black/60 opacity-0  group-hover:opacity-100 m-6 transition-all duration-300'>

                    <div className='w-full h-fit flex flex-col items-center '>

                        <button className='px-6 py-2 text-sm text-gray-950 bg-white font-bold '>
                            Add To Cart
                        </button>

                    </div>
                    <div className='w-full px-4 flex flex-row justify-between mt-3 '>
                        <button className='text-white text-sm font-poppins'>
                           <ShareIcon/> share
                        </button>

                        <button className='text-white text-sm font-poppins'>
                            <CompareArrowsIcon/> Compare
                        </button>

                        <button className='text-white text-sm font-poppins'>
                           <FavoriteBorderIcon/> Like
                        </button>

                    </div>

                   

                </div>
               </li>
            ))}

        </ul>

        <button className='px-24 py-3 bg-white border-black border-2 text-gray-800 font-bold  font-poppins mt-2 hover:scale-110 transition-all duration-300 mb-16 '>
                        Show More
        </button>

      
    </div>
  )
}

export default Products
