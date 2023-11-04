import "./App.css";
import { Home, Footer, MyNav, NotFound, Cart } from "./Components";
import { Route, Routes } from "react-router-dom";
import { ProductForm, ProductsDetails, Products } from "./Components/Products/index";
import { CartProvider } from "./Context/CartProvider";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductsDetails />} />
        <Route path="products/:id/edit" element={<ProductForm />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
