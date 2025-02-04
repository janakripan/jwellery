import React, { useContext, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import CartCountForm from "./Shared/CartCountForm";
import CartContext from "../contexts/CartContext";

function CartItems({ item }) {
  const {
    removeFromCart,
    increaseItem,
    removeItem,
    cartItems,
    inputValue,
    setInputValue,
  } = useContext(CartContext);

  const [isActive, setIsActive] = useState(false);

  
  return (
    <div className="w-full h-fit">
      <li className="w-full shadow-md my-2  h-fit py-4 flex flex-row justify-between ">
        <div className="flex flex-col md:flex-row h-fit mr-16 md:mr-0 justify-between gap-4 items-center md:items-start">
          <div className=" w-24 aspect-auto  md:w-44 md:h-44  overflow-hidden">
            <img src={item.image} alt="" />
          </div>
          <div className="h-full flex flex-col  ">
            <span className="text-lg font-semibold text-gray-800 font-poppins">
              {item.title}
            </span>
            <span className="text-base font-medium text-gray-800">
              {item.price} {item.currency}
            </span>
          </div>
        </div>
        <div className=" w-48 flex flex-row h-10">
          <div className=" border-[1px] border-gray-300 flex-1 flex justify-between  ">
            <button
              onClick={() => removeItem(item.id)}
              className="text-gray-400 h-full flex items-center px-2"
            >
              -
            </button>

           
          <span
          onClick={() => setIsActive(true)}
          className=" h-full  text-base font-medium flex flex-row items-center  "
        >
          {
            isActive===true
            ?<CartCountForm
            isActive={isActive}
            item={item}
            setIsActive={setIsActive}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          : item.count
          }
        </span>
        
            <button
              onClick={() => increaseItem(item.id)}
              className="text-gray-400 h-full flex items-center px-2"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml- text-xl text-gray-500 h-full p-4 flex items-center "
          >
            <MdOutlineDelete />
          </button>
        </div>
        
        <div className=" font-medium font-poppins text-base w-36 flex justify-end ">
          {item.price * item.count}
          {""} {item.currency}
        </div>
      </li>
    </div>
  );
}

export default CartItems;
