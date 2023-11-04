import React, { useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getProductById } from "../../API/ProductsAPI";
import { CartContext } from "../../Context/CartContext";

export function ProductsDetails() {
  let value = useContext(CartContext);
  let { increase, addItemToCart, removeItemFromCart } = value;
  let [product, setProduct] = useState({});
  let { id } = useParams();
  useEffect(() => {
    setProduct(getProductById(id));
  }, []);
  return (
    <div className="container p-5 d-flex justify-content-center bg-light">
      <div className="col-md-6 col-sm-4">
        <p className="fs-3 lead mt-3"> Product Details: {product.id}</p>
        <p className="fs-3 lead mt-3"> Name : {product.productName}</p>
        <p>
          Nulla est enim, lobortis sit amet feugiat vel, tempor vel velit. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer placerat,
          mi eget posuere tempus, eros dolor fermentum justo, eget sollicitudin nunc tortor id nibh.
          Mauris posuere diam vel commodo pharetra.
        </p>
        <p className="price"> Price: {product.price} $</p>
        <p> Q : {product.quantity == "0" ? "No Products Available" : product.quantity}</p>
        <p className="m-0">
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
        </p>
        <div id="add-to-cart">
          <div className="cart-buttons">
            <button
              disabled={product.quantity == "0"}
              onClick={() => {
                addItemToCart(product);
                increase();
              }}
              className="btn btn-outline-info text-dark m-3 "
              type="submit"
            >
              <span className="hidden-sm">
                {product.quantity == "0" ? "Sold Out" : "Add to Cart"}
              </span>
            </button>
            <NavLink to={"/products"}>
              <button className="btn btn-outline-info text-dark" type="submit">
                Back to Products
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
