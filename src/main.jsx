import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

import App from './App'
import Cart from './Cart'
import Checkout from './Checkout'
import Catalog from './Catalog'
import Product from './Product'

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
    </Routes>
    <Footer />
  </BrowserRouter>
);