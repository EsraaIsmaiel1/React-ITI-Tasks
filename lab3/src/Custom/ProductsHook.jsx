import React, { useEffect, useState } from "react";
import { products as productsData } from "../models/ProductList"; // Rename the imported variable

export function ProductsHook() {
  const [products, setProducts] = useState([]); // Rename the state variable
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  const removeProduct = (productId) => {
    const updatedList = products.filter((product) => product.id !== productId);
    setProducts(updatedList);
  };

  return {
    loading,
    products,
    removeProduct,
  };
}
