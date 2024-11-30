import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ProductList from "./Product/ProductList";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import Register from "./Register/Register";
import Login from "./Login/Login";
import ProtectedRoute from "./Authantications/ProtectedRoute";

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
      
        <Route path="/" element={<ProtectedRoute><ProductList /> </ProtectedRoute>} /> 
        <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} /> 
        <Route path="/header" element={<Header/>} />
       

        <Route path="/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
