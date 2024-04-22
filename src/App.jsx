import './App.css'
import Cart from './Components/Cart'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Components/Shop'
import Footer from './Components/Footer'
import Men from './Components/Men'
import Women from './Components/Women'
import Kids from './Components/Kids'
// import Shopcategory from './Components/Shopcategory'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'



function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<Men banner={men_banner} category ="men"/>}/>
      <Route path='/women' element={<Women banner={women_banner} category ="women"/>}/>
      <Route path='/kids' element={<Kids banner={kid_banner}  category ="kids"/>}/> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login />}/>

    </Routes>
    <Footer/>  
    </BrowserRouter>
    </>
  )
}

export default App
