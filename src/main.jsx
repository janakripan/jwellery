import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import About from './Routes/About.jsx';
import Login from './Routes/Login.jsx';
import Register from './Routes/Register.jsx';
import AuthLayout from './Routes/AuthLayout.jsx';
import Home from './Routes/Home.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from './Routes/Cart.jsx';
import CartProvider from './contexts/CartProvider.jsx';
import Shop from './Routes/Shop.jsx';


createRoot(document.getElementById('root')).render(

  <CartProvider>
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="shop" element={<Shop/>} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
  </CartProvider>,
)
