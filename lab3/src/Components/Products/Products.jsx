import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import { ProductsHook } from "../../Custom/ProductsHook";

export function Products() {
  let { loading, products, removeProduct } = ProductsHook();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-3 mt-3 mb-5  text-center">
      <h2 className="mb-5">Our Products</h2>
      <div className="container">
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quantity == "0" ? "No Products Available" : product.quantity}</td>
                <th>
                  <NavLink to={`/products/${product.id}`}>
                    <i className="bi bi-eye-fill p-1 text-warning"></i>
                  </NavLink>
                  <NavLink to={`/products/${product.id}/edit`}>
                    <i className="bi bi-pencil-square p-1 text-info"></i>
                  </NavLink>
                  <i
                    className="bi bi-trash3-fill p-1 text-danger"
                    onClick={() => removeProduct(product.id)}
                  ></i>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
