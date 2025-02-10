import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import CartContext from "../../contexts/CartContext";

function CartCard({ items }) {
  const [quantity, setQuantity] = useState(items.count);

  useEffect(() => {
    setQuantity(items.count);
  }, [items.count]);

  const { removeFromCart, increaseItem, updateQuantity, removeItem } =
    useContext(CartContext);

  const handleChange = (e) => {
    setQuantity();
    const newQuantity = Number(e.target.value);
    console.log(newQuantity);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      updateQuantity(items, newQuantity);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-fit px-1 ">
      <li className="w-full shadow-md  h-fit flex flex-row justify-between rounded-lg ">
        <div className="flex  flex-row h-fit justify-between gap-4 items-center md:items-start">
          <div className="w-24 pb-2 px-1 ">
            <div className="w-full aspect-auto   mb-3 overflow-hidden">
              <img src={items.image} alt="" />
            </div>
            <div className="w-full flex flex-row h-6">
              <div className="  flex-1 flex justify-between  ">
                <button
                  onClick={() => removeItem(items.id)}
                  className="text-gray-400 h-full flex items-center border-[1px] border-gray-300 rounded-full px-2"
                >
                  -
                </button>

                <div className=" h-full  w-full text-base font-medium flex flex-row items-center justify-center">
                  <div className="w-full  h-full flex flex-col justify-center items-center">
                    <form
                      action=""
                      onSubmit={(e) => handleSubmit(e)}
                      className=" w-full h-full flex flex-col items-center justify-center"
                    >
                      <input
                        type="number"
                        placeholder={items.count}
                        value={quantity}
                        onChange={(e) => handleChange(e)}
                        min=""
                        className=" h-full w-full appearance-none placeholder:text-gray-500 flex justify-center text-center no-spinner focus:outline-none"
                      />
                    </form>
                  </div>
                </div>

                <button
                  onClick={() => increaseItem(items.id)}
                  className="text-gray-400 border-[1px] border-gray-300 rounded-full h-full flex items-center px-1.5"
                >
                  +
                </button>
              </div>
             
            </div>
          </div>

          <div className="h-full flex flex-col  ">
            <span className="text-base font-semibold text-gray-800 font-poppins">
              {items.title}
            </span>
            <span className="text-base text-gray-600 font-poppins font-medium ">
              {items.Description}
            </span>
            <span className="text-base font-medium text-gray-800">
              {items.price} {items.currency}
            </span>
          </div>
        </div>

        <div className="flex justify-end ">
        <button
                onClick={() => removeFromCart(items.id)}
                className="ml- text-xl text-gray-500 h-full p-4 flex items-center "
              >
                <MdOutlineDelete />
              </button>
        </div>
      </li>
    </div>
  );
}

export default CartCard;
