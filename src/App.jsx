import './App.css'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Components/Shop'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Product from './Components/Product'
import Footer from './Components/Footer/Footer'
import Seller from './Components/Seller/Seller'
import ShopCategory from './Components/Shopcategory'

function App() {
 
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory banner={men_banner} category ="men"/>}/>
      <Route path='/women' element={<ShopCategory banner={women_banner} category ="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner}  category ="kid"/>}/> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/product/:productId" element={<Product />} />
      <Route path='/seller/*' element={<Seller/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App
