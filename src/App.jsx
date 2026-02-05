import {  HomePage, 
          CheckoutPage, 
          OrderPage,
          TrackingPage } from './pages'

import { Routes, Route } from 'react-router'
import './App.css'


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/orders' element={<OrderPage />} />
      <Route path='/tracking' element={<TrackingPage />} />
    </Routes>
  )
}

export default App
