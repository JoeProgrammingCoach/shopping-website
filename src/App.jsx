import { useState, useEffect } from 'react'
import Item from './components/Item'
import Cart from "./components/Cart"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import  MensClothing from "./pages/MensClothing"
import  WomensClothing from "./pages/WomensClothing"
import Electronics from "./pages/Electronics"
import Jewelry from "./pages/Jewelry"

function App({info, category}) {
const [cart, setCart] = useState([])

const [userSearch, setUserSearch] = useState("")
const [ data, setData] = useState([])
const [ loading, setLoading] = useState(true)

function addNewCartItem({amount}) {
setCart( currentItems =>{
  return [...currentItems, {
  product: data.title, quanity : amount
  }]

})
}

useEffect(()=>{
  if (setLoading) return
const mensClothing = data.filter(
  (item) => {
  item.category == "Men's Clothing"
  }
)

},
 [data] )



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
  <Route path="/MensClothing" element={<MensClothing   info={info}data={data} />}/>
  <Route path="/WomensClothing" element={<WomensClothing  info={info}/>}/>
  <Route path ="/Electronics" element={<Electronics info={info}/>}/>
  <Route path ="/Jewelry" element={<Jewelry info={info}/>}/>
  {/*<Route path="*" element={<PageNotFound />} /> */}
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
