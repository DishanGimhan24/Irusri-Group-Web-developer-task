import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ProductList from "./Product/ProductList";

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<ProductList />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
