import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router";
import { MdOutlineDelete } from "react-icons/md";

function Cart() {
  const { removeFromCart, uniqueCartItems,removeItem,addToCart } = useContext(CartContext);

  console.log(uniqueCartItems);
  if (uniqueCartItems.length === 0) {
    return (
      <div className="min-h-[75vh] h-fit flex items-center justify-center ">
        <h3 className="text-5xl text-gray-800 font-bold">
          Your Cart Is Empty !!!
        </h3>
      </div>
    );
  }
  return (
    <div className="w-full max-w-screen-xl h-fit min-h-[75vh] mx-auto  ">
      <div className="w-full h-fit py-8  flex items-center justify-between px-4 ">
        <h1 className="text-5xl text-gray-800 font-bold font-poppins ">
          Your Cart
        </h1>
        <Link to={"/shop"}>
          <p className=" hidden md:flex font-medium text-xl  text-gray-800 ">
            Contunue Shopping
          </p>
          <div className=" w-full h-[1px] bg-gray-300 mt-1 "></div>
        </Link>
      </div>
      <div className="w-full h-fit px-4 ">
        <div className="w-full h-fit flex flex-row justify-between mb-2 items-center">
          <span className=" text-medium font-medium font-poppins  text-gray-500 ">
            Product
          </span>
          <span className=" text-medium font-medium font-poppins  text-gray-500 ">
            Quantity
          </span>
          <span className=" text-medium font-medium font-poppins  text-gray-500 ">
            Total
          </span>
        </div>

        <div className="h-[1px] w-full bg-gray-400 opacity-50 "></div>
      </div>
      <div className="w-full h-fit px-4  ">
        <ul className="w-full flex flex-col">
          {uniqueCartItems.map((item, index) => (
            <li
              key={index}
              className="w-full shadow-md my-2  h-fit py-4 flex flex-row justify-between "
            >
              <div className="flex flex-col md:flex-row h-fit mr-16 md:mr-0 justify-between gap-4 items-center md:items-start">
                <div className=" w-24 aspect-auto  md:w-44 md:h-44  overflow-hidden">
                  <img src={item.image} alt="" />
                </div>
                <div className="h-full flex flex-col  ">
                    <span className="text-lg font-semibold text-gray-800 font-poppins">
                        {item.title}
                    </span>
                    <span className="text-base font-medium text-gray-800">
                        {item.price}  {item.currency}
                    </span>

                </div>
              </div>
              <div className=" w-48 flex flex-row h-10">
                <div className=" border-[1px] border-gray-300 flex-1 flex justify-between  ">
                  <button
                  onClick={()=>removeItem(item.id)}
                   className="text-gray-400 h-full flex items-center px-2">
                    -
                  </button>
                  <span className=" h-full text-base font-medium flex flex-row items-center ">
                    {item.count}
                  </span>
                  <button
                  onClick={()=>addToCart(item)}
                   className="text-gray-400 h-full flex items-center px-2">
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
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;

// image={item.image}
//                 badge={item.badge}
//                 title={item.title}
//                 description={item.Description}
//                 price={item.price}
//                 currency={item.currency}
//                 altPrice={item.altPrice}
//                 badgeType={item.badgeType}
