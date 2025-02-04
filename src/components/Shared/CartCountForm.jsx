import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext'


function CartCountForm({setIsActive,item,inputValue,setInputValue,isActive}) {
    
    const { addToCart} = useContext(CartContext)
    const handleChange = (e)=>{
     e.preventDefault()
     
     setInputValue(e.target.value)
     }

    const handleKeyPress = (e) => {
     if (e.key === "Enter") {
       e.preventDefault();
       addToCart(item); 
       setIsActive(!isActive)
      
     }
   };
   
  return (
    <div className='flex-1 bg-amber-200 h-fit flex flex-col justify-center items-center'>
        <form action=""  className='bg-red-200 flex flex-col items-center justify-between'>
        <input 
                  type="number"
                  name="count"
                  placeholder={item.count}
                  value={inputValue}
                  onChange={(e)=>handleChange(e,item)}
                  onKeyDown={handleKeyPress} 
                  className='bg-blue-300 w-16 flex justify-center text-center focus:outline-none'
                   /> 
                   {/* <div className="w-full h-fit mt-4 gap-2 flex flex-row justify-between items-center">
                   <button 
                   onClick={()=>{setIsActive(false),setInputValue("")}}
                   className='px-3 py-2 border-2 border-[#22223B] rounded-md text-[#22223B] text-base font-poppins font-medium  ' >
                        Cancel
                   </button>
                   <button
                   type='submit' className='px-3 py-2  bg-[#22223B] rounded-md text-white text-base font-poppins font-medium  '>
                        Confirm

                   </button>
                   </div> */}
        </form>
      
    </div>
  )
}

export default CartCountForm
