import { products } from "../.././src/models/ProductList";

let getProductList = () => {
  return products;
};

let getProductById = (productId) => {
  return products.find((product) => product.id == productId);
};

let addProduct = (product) => {
  let lastId = products[products.length - 1]?.id || 0;
  let newProduct = {
    id: lastId + 1,
    productName: product.productName,
    price: product.price,
    quantity: product.quantity,
  };

  return products.push(newProduct);
};

let removeProduct = (productId) => {
  return products.filter((product) => product.id != productId);
};

let updateProduct = (productId, product) => {
  let index = products.findIndex((product) => product.id == productId);
  if (index !== -1) {
    products[index] = product;
  }
};

export { getProductList, updateProduct, removeProduct, addProduct, getProductById };
