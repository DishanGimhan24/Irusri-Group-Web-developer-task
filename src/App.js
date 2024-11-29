import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ProductList from "./Product/ProductList";
import Cart from "./Cart/Cart";

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<ProductList />} /> 
        <Route path="/cart" element={<Cart/>} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
