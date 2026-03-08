import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import About from './Pages/About'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div className='px-4vw sm:px-5vw md:px-7vw lg:px-9vw'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/placeorder' element={<PlaceOrder/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
  )
}

export default App