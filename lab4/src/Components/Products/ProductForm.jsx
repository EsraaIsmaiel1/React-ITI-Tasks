import React, { useState, useEffect } from "react";
import { getProductById, addProduct, editProduct } from "../API/ProductAPI";
import { useParams, useNavigate } from "react-router-dom";

export function ProductForm() {
  let navigate = useNavigate();
  let { id } = useParams();
  let [productValues, setProductValues] = useState({
    productName: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (id !== "0") {
      const fetchData = async () => {
        try {
          const response = await getProductById(id);
          setProductValues(response.data);
        } catch (error) {}
      };
      fetchData();
    } else {
      setProductValues({
        productName: "",
        price: "",
        quantity: "",
      });
    }
  }, [id]);

  let getInputValue = (e) => {
    setProductValues({
      ...productValues,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (id === "0") {
      addProduct(productValues).then(() => {
        setProductValues({
          ...productValues,
          [e.target.name]: e.target.value,
        });
        navigate("/products");
      });
    } else {
      editProduct(id, productValues).then(() => {
        navigate("/products");
      });
    }
  };

  return (
    <div className="">
      <div className="container g-3 p-5">
        <form className="row " onSubmit={handleSubmit}>
          <h1>{id !== "0" ? "Edit Product" : "Add New Product"}</h1>
          <div className="col-9 p-3">
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter Product Name"
              onChange={getInputValue}
              value={productValues.productName}
              name="productName"
            />
          </div>
          <div className="col-9 p-3">
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="Enter Product Price"
              onChange={getInputValue}
              value={productValues.price}
              name="price"
            />
          </div>
          <div className="col-9 p-3">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Product Quantity"
              onChange={getInputValue}
              value={productValues.quantity}
              name="quantity"
            />
          </div>
          <div className="col-12 p-4">
            <button type="submit" className="btn btn-info">
              {id !== "0" ? "Edit Product" : "Add New Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
