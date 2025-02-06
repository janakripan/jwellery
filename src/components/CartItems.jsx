import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import CartContext from "../contexts/CartContext";

function CartItems({ items, image, title, price, currency, itemId, count }) {
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
    <div className="w-full h-fit">
      <li className="w-full shadow-md my-2  h-fit py-4 flex flex-row justify-between ">
        <div className="flex flex-col md:flex-row h-fit mr-16 md:mr-0 justify-between gap-4 items-center md:items-start">
          <div className=" w-24 aspect-auto  md:w-44 md:h-44  overflow-hidden">
            <img src={image} alt="" />
          </div>
          <div className="h-full flex flex-col  ">
            <span className="text-lg font-semibold text-gray-800 font-poppins">
              {title}
            </span>
            <span className="text-base font-medium text-gray-800">
              {price} {currency}
            </span>
          </div>
        </div>
        <div className=" w-48 flex flex-row h-10">
          <div className=" border-[1px] border-gray-300 flex-1 flex justify-between  ">
            <button
              onClick={() => removeItem(itemId)}
              className="text-gray-400 h-full flex items-center px-2"
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
                    placeholder={count}
                    value={quantity}
                    onChange={(e) => handleChange(e)}
                    min=""
                    className=" h-full w-full appearance-none placeholder:text-gray-500 flex justify-center text-center no-spinner focus:outline-none"
                  />
                </form>
              </div>
            </div>

            <button
              onClick={() => increaseItem(itemId)}
              className="text-gray-400 h-full flex items-center px-2"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(itemId)}
            className="ml- text-xl text-gray-500 h-full p-4 flex items-center "
          >
            <MdOutlineDelete />
          </button>
        </div>

        <div className=" font-medium font-poppins text-base w-36 flex justify-end ">
          {price * count}
          {""} {currency}
        </div>
      </li>
    </div>
  );
}

export default CartItems;
