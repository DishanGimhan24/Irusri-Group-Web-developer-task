import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ProductList from "./Product/ProductList";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import Register from "./Register/Register";
import Login from "./Login/Login";

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<ProductList />} /> 
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/header" element={<Header/>} />
        <Route path= "/register" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
