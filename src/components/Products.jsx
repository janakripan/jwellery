import React, { useContext, useState} from 'react'
import { products } from '../constants/products'
import ProductCard from './Shared/ProductCard'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ShareIcon from '@mui/icons-material/Share';
import CartContext from '../contexts/CartContext';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import WhishlistContext from '../contexts/Whishlistcontext';
import { motion } from "motion/react";

function Products() {
 
    const { addToCart, cartItems } = useContext(CartContext)
    const {whishlist,togglWhishlist} = useContext(WhishlistContext)


  

   
  return (
    <div className='w-full max-w-screen-xl mx-auto flex flex-col items-center p-4'>

        <h2 className='text-xl  md:text-3xl lg:text-4xl text-gray-800 font-normal font-poppins mb-8 '>
        Our Products
        </h2>

        <ul className=' w-full h-fit grid grid-cols-2  lg:grid-cols-4 gap-4 md:gap-8'>

            {products.map((item,index)=>(
               <motion.li
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: .5, delay: 0.2*index, ease: 'easeInOut' }}
               viewport={{ once: true, amount: 0.2 }}
     
                className='group relative hover:scale-105 transition-all duration-500  flex items-center justify-center ' key={index}>
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
                <div className='  flex flex-col justify-center items-center absolute inset-0 rounded-lg group-hover:bg-black/60 opacity-0  group-hover:opacity-100 lg:m-6 transition-all duration-300'>

                    <div className='w-full h-fit flex flex-col items-center '>

                        <button
                        onClick={()=>addToCart(item)}
                        className='px-6 py-2 text-xs md:text-sm hover:scale-105 active:scale-95 transition-all duration-200 text-gray-950 bg-white font-bold '>
                            {
                              cartItems.some((previtems)=>previtems.id === item.id)
                              ? " Item Added "
                              : "Add To Cart"
                              
                            }
                        </button>

                    </div>
                    <div className='w-full px-4 flex flex-row justify-between items-center mt-3 '>
                        <button className='text-white text-xs md:text-sm font-poppins flex flex-col items-center'>
                           <ShareIcon/> share
                        </button>

                        <button
                       
                         className='text-white text-xs md:text-sm font-poppins flex flex-col items-center '>
                            <CompareArrowsIcon/> Compare
                        </button>

                        <button
                         onClick={()=>togglWhishlist(item)}
                         className='text-white text-xs md:text-sm font-poppins flex flex-col items-center'>
                           
                           { whishlist.some((wishlistItem) => wishlistItem.id === item.id) ? (
                               <AiFillHeart className="text-red-500 text-xl" />
                             ) : (
                               <AiOutlineHeart className="text-white text-xl hover:text-red-500" />
                             )} Like
                        </button>

                    </div>

                   

                </div>
               </motion.li>
            ))}

        </ul>

        <motion.button 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ y: 0 , opacity: 1,}}
         transition={{ duration: .5, delay: 0.2, ease: 'easeInOut' }}
         viewport={{ once: true, amount: 0.2 }}

        className='px-24 py-3 bg-white border-black border-2 text-gray-800 font-bold  font-poppins mt-6 lg:mt-2 hover:scale-110 transition-all duration-300 mb-16 '>
                        Show More
        </motion.button>

      
    </div>
  )
}

export default Products
