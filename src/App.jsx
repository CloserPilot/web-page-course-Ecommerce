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



function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get('/api/cart?expand=product')
      .then((response) => {
        setCart(response.data);
      })
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='/checkout' element={<CheckoutPage cart={cart}/>} />
      <Route path='/orders' element={<OrderPage />} />
      <Route path='/tracking' element={<TrackingPage />} />
    </Routes>
  )
}

export default App
