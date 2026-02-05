import {  HomePage, 
          CheckoutPage, 
          OrderPage,
          TrackingPage } from './pages'

import { Routes, Route } from 'react-router'
import './App.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path='/checkout' element={<CheckoutPage />}></Route>
      <Route path='/orders' element={<OrderPage />}></Route>
      <Route path='/tracking' element={<TrackingPage />}></Route>
    </Routes>
  )
}

export default App
