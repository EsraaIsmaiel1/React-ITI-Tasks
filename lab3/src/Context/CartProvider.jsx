import React, { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider(props) {
  let [cartItems, setCartItems] = useState([]);

  let addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  let removeItemFromCart = (productId) => {
    let updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };
  let [count, setCount] = useState(0);

  let increase = () => {
    setCount(count + 1);
  };

  let decrease = () => {
    setCount(count - 1);
  };
  let data = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    count,
    increase,
    decrease,
  };
  return <CartContext.Provider value={data}>{props.children}</CartContext.Provider>;
}
