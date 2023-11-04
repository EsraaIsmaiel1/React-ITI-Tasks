import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function MyNav() {
  let value = useContext(CartContext);
  let { count, increase, decrease, cartItems, removeItemFromCart } = value;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <nav className="navbar navbar-expand-lg ms-auto" style={{ backgroundColor: "#f6f9fc" }}>
        <div className="container ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav gap-5">
              <li className="nav-item ">
                <NavLink className="nav-link" aria-current="page" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/products"}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/products/0/edit"}>
                  Add a product
                </NavLink>
              </li>
            </ul>
          </div>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-info" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
        <div className="navbar-nav mx-5">
          <NavLink className="nav-link">
            <i className="bi bi-cart h5" onClick={handleShow}>
              {count}
            </i>
          </NavLink>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose} className="p-5 modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h1>Your Cart ({count})</h1>

            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cartItems.map((product) => (
                  <li key={product.id}>
                    <span>
                      {product.productName} - ${product.price}
                    </span>
                    <i class="bi bi-plus-square-fill p-5 h5" onClick={() => increase()}></i>
                    <i class="bi bi-dash-square-fill p-5 h5" onClick={() => decrease()}></i>
                    <button
                      className="btn btn-outline-danger mb-1"
                      onClick={() => removeItemFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
