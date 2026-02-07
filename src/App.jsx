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
    const fetchAppData = async () => {
      const response = await api.get('/api/cart?expand=product')
      setCart(response.data);
    };

    fetchAppData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='/checkout' element={<CheckoutPage cart={cart}/>} />
      <Route path='/orders' element={<OrderPage cart={cart}/>} />
      <Route path='/tracking/:orderId/:productId' element={<TrackingPage cart={cart}/>} />
    </Routes>
  )
}

export default App
