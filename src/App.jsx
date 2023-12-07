import { useState, useEffect } from 'react'
import Item from './components/Item'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
const [ data, setData] = useState()
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
<div>{JSON.stringify(data)}</div>

<Item item="shirt"/>
<Item item="pants" />
      
    </>
  )
}

export default App
