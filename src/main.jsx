import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

import App from './App'
import Cart from './views/Cart'
import Checkout from './views/Checkout'
import Catalog from './views/Catalog'
import Product from './views/Product'
import Login from './views/Login'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './assets/tailwind.css'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="product" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);