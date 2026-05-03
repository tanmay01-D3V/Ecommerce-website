import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Collection from './Pages/Collection'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import About from './Pages/About'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/collection' element={<Collection />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/placeorder' element={<PlaceOrder/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>
  )
}

export default App