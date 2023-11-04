import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export function Cart() {
  let value = useContext(CartContext);
  let { cartItems } = value;
  return (
    <div className="bg-light p-5 text-center">
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((product) => (
              <li key={product.id}>
                <span>
                  {product.productName} - ${product.price}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
