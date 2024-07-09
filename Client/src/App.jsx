import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/HomePage.jsx";
import { useState } from "react";
import SignInSignUp from "./pages/SignInSignUp.jsx";
import DineInPage from "./pages/DineInPage.jsx";
import DeliveryPage from "./pages/DeliveryPage.jsx"
import {Navigate} from 'react-router-dom';
import CartPage from "./pages/CartPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminOrders from "./pages/AdminOrders.jsx";

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token") ? true : false);
  const [cartItems, setCartItems] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);   

  return (
    <Router>
      <Navbar isLogged={isLogged} isAdmin={isAdmin}/>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignInLogin" element={<SignInSignUp setIsLogged={setIsLogged}/>} />
        <Route path="/DineIn" element={<DineInPage />} />
        <Route path="/Delivery" element={<DeliveryPage isLogged={isLogged} setIsLogged={setIsLogged} cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Admin" element={<AdminPage isLogged={isLogged} setIsAdmin={setIsAdmin} isAdmi={isAdmin}/>} />
        <Route path="/AdminLogin" element={<AdminLogin setIsLogged={setIsLogged} />} />
        <Route path="/Admin/Orders" element={<AdminOrders setIsAdmin={setIsAdmin}/>} />
      </Routes>
    </Router>
  );
}

export default App;
