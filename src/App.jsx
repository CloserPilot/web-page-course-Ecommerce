import {
  HomePage,
  CheckoutPage,
  OrderPage,
  TrackingPage
} from './pages'

import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react';
import { api } from './api'
import './App.css'

//Hace accesible api desde la consola del browser
window.api = api;


function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await api.get('/api/cart?expand=product')
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path='/checkout' element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path='/orders' element={<OrderPage cart={cart} loadCart={loadCart}/>} />
      <Route path='/tracking/:orderId/:productId' element={<TrackingPage cart={cart} />} />
    </Routes>
  )
}

export default App
