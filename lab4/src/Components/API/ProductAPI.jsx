import axios from "axios";

const URL = "http://localhost:3000/products";

const getAllProducts = () => axios.get(URL);
const getProductById = (productId) => axios.get(`${URL}/${productId}`);
const addProduct = (product) => axios.post(URL, product);
const editProduct = (productId, product) => axios.put(`${URL}/${productId}`, product);
const deleteProduct = (productId) => axios.delete(`${URL}/${productId}`);

export { getAllProducts, getProductById, addProduct, editProduct, deleteProduct };
