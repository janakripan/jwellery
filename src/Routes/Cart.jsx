import React, { useContext } from 'react'
import CartContext from '../contexts/CartContext'


function Cart() {
    const { removeFromCart, uniqueCartItems} = useContext(CartContext)
    

   
    console.log(uniqueCartItems)
  return (
    <div className='w-full max-w-screen-xl h-fit min-h-screen mx-auto bg-red-200'>
       <div className="w-full h-fit p-4  ">
       <ul className="w-full">
       {uniqueCartItems.map((item,index)=>(
            <li
            key={index} 
             className='w-full bg-amber-200 h-fit py-4 flex flex-row '>
                <div className='flex flex-col items-center'>
                    <img src={item.image} alt="" />
                    <span>{item.count}</span>
                </div>
                <div className="flex flex-col ">
                    <h3>
                        {item.title}
                    </h3>
                    <p>
                        {item.Description}
                    </p>
                    <p>
                        {item.price}{""}{item.currency}
                    </p>
                    <button
                    onClick={()=>removeFromCart(item.id)}
                     className=' p-2 bg-blue-400 text-white  '>
                        remove
                    </button>
                </div>


            </li>
        ))}
       </ul>

       </div>
      
    </div>
  )
}

export default Cart

// image={item.image}
//                 badge={item.badge}
//                 title={item.title}
//                 description={item.Description}
//                 price={item.price}
//                 currency={item.currency}
//                 altPrice={item.altPrice}
//                 badgeType={item.badgeType}
