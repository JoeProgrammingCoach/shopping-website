import { useState, useEffect } from 'react'
import Item from './components/Item'
import './App.css'

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
 
{data.map( 
  (data) =>
<Item className="description-container" picture={data.image} item={data.title} key = {crypto.randomUUID()}/>
)
}
    </>
  )
}

export default App
