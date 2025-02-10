import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartitems] = useState([]);

  const addToCart = (item) => {
    setCartitems((prev) => {
      const existingItem = prev.find((prevItem) => prevItem.id === item.id);

      if (existingItem) {
        alert("Item Is Already Added")
        return prev;
      }
      else
     { return [...prev, { ...item, count: 1 }];}
    });
  };
  const updateQuantity = (item, newQuantity) => {
    setCartitems((prev) => {
      return prev.map((singleItem) =>
        singleItem.id === item.id
          ? { ...singleItem, count: newQuantity }
          : singleItem
      );
    });
  };

  const increaseItem = (id) => {
    setCartitems((prev) => {
      const toAdd = prev.find((item) => item.id === id);
      if (toAdd) {
        return prev.map((singleItem) =>
          singleItem.id === id
            ? { ...singleItem, count: singleItem.count + 1 }
            : singleItem
        );
      }
      return prev;
    });
  };
  const totalPrice = cartItems.reduce((acc, item) => acc + item.count * item.price, 0);

  const removeFromCart = (id) => {
    setCartitems((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const removeItem = (id) => {
    setCartitems((prevCart) => {
      const ToRemove = prevCart.find((item) => item.id === id);
      if (ToRemove.count > 1) {
        return prevCart.map((prevItem) =>
          prevItem.id === id
            ? { ...prevItem, count: prevItem.count - 1 }
            : prevItem
        );
      }
      alert("There is only one item in the cart");
      return prevCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
        removeItem,
        updateQuantity,
        increaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
