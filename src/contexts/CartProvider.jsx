import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartitems] = useState([]);

  const addToCart = (item) => {
    setCartitems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartitems((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const removeItem = (id) => {
    setCartitems((prevCart) => {
      const indexToRemove = prevCart.findIndex((item) => item.id === id);
      if (indexToRemove !== -1) {
        return prevCart.filter((_, index) => index !== indexToRemove);
      }
      return prevCart;
    });
  };

  
    const displayItems= cartItems.reduce((acc,item)=>{
      if (acc[item?.id]) {
          acc[item.id].count += 1;
        } else {
          acc[item.id] = { ...item, count: 1 };
        }
        return acc; 
  },{})
  console.log(displayItems)
  


  const uniqueCartItems = Object.values(displayItems)

 

  
    


  
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,uniqueCartItems,removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
