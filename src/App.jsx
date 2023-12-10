import { useState, useEffect } from 'react'
import Item from './components/Item'
import './App.css'
import Cart from "./components/Cart"
import NavBar from "./components/NavBar"

function App() {
const [cart, setCart] = useState([])
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
 <NavBar />

{data.map( 
  (data) => /* should always be defined in the App component, not child component */
<Item price={data.price} className="description-container" picture={data.image} item={data.title} key = {crypto.randomUUID()}
description={data.description}
/>
)
}
    </>
  )
}

export default App
