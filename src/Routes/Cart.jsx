import React, { useContext, useState} from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router";

import CartItems from "../components/CartItems";

function Cart() {
  
  const {  cartItems  } =
    useContext(CartContext);


  if (cartItems.length === 0) {
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
          {cartItems.map((items, index) => (
            <CartItems 
            key={index} 
            image={items.image}
            title={items.title}
            price={items.price}
            currency={items.currency}
            itemId={items.id}
            items={items}
            count={items.count}
             />
            
          ))}
          
        </ul>
      </div>
      <div className="w-full h-fit py-16  md:hidden flex flex-row items-center justify-center ">
        <Link to={"/shop"}>
          <p className=" font-medium text-xl  text-white py-2 px-4 bg-[#22223B] rounded-md ">
            Contunue Shopping
          </p>
          {/* <div className=" w-full h-[1px] bg-gray-300 mt-1 "></div> */}
        </Link>
      </div>
      <div className="w-full my-12 flex justify-end px-4">
      <button 
        onClick={()=>console.log(cartItems)}
        className="bg-gray-200 p-3 border-2 border-gray-700 rounded-lg h-fit w-fit">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
