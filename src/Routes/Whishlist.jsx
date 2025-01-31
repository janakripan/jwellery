import React, { useContext } from 'react'
import WhishlistContext from '../contexts/Whishlistcontext'
import WhishlistCard from '../components/Shared/WhishlistCard'
import CartContext from '../contexts/CartContext'

function Whishlist() {
    const {addToCart} = useContext(CartContext)
    const {whishlist,togglWhishlist} = useContext(WhishlistContext)
    if(whishlist.length === 0){
        return(
            <div className=' w-full h-fit min-h-[75vh] flex items-center justify-center'>
                <h1 className='text-gray-800 text-4xl font-bold font-poppins'>
                    Add Products To Your Whishlist !!! 
                </h1>
            </div>
        )
    }
  return (
    <div className=' w-full h-fit min-h-[75vh] max-w-screen-xl mx-auto px-4 '>
        <h1 className='text-3xl text-gray-800  font-semibold font-poppins py-10'>Your Wishlist</h1>
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10'>
            {whishlist.map((item)=>(
                <li 
                key={item.id}
                className='w-full h-fit flex items-center justify-center shadow-lg '>
                   <WhishlistCard item={item} toggleWhishlist={togglWhishlist} addToCart={addToCart}/>

                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default Whishlist
