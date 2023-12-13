import { useState, useEffect } from 'react'
import Item from './components/Item'
import Cart from "./components/Cart"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import  MensClothing from "./pages/MensClothing"
import  WomensClothing from "./pages/WomensClothing"
import Electronics from "./pages/Electronics"
import Jewelry from "./pages/Jewelry"

function App() {
const [cart, setCart] = useState([])
const [userSearch, setUserSearch] = useState("")
const [ data, setData] = useState([])
const [ loading, setLoading] = useState(true)

useEffect(
  ()=> {
    
setLoading(true)
  fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(setData)
.finally(()=> { 
  setLoading(false)}
 
  )

  }, []
  )




  return (
    <>
 <div className='store-name'>Joe's online store</div>
 <NavBar value={userSearch} />


{/*data.map(  // mapping products to the main page was causing the page to constantly reload
  (data) =>  
<Item price={data.price} className="description-container" picture={data.image} item={data.title} key = {crypto.randomUUID()}
description={data.description} category={data.category}
/>
)
 */}


<BrowserRouter>
    <Routes>
  <Route path="/MensClothing" element={<MensClothing category = {category} data={data} />}/>
  <Route path="/WomensClothing" element={<WomensClothing/>}/>
  <Route path ="/Electronics" element={<Electronics/>}/>
  <Route path ="/Jewelry" element={<Jewelry/>}/>
  {/*<Route path="*" element={<PageNotFound />} /> */}
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
