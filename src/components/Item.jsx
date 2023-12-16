import { useState } from 'react'

function Item({item, picture, description, price, category}) {


  
  return (
    <>
<div><span className='item-description'>{item}</span><span className='item-price'>${price}</span>
<button className="addToCartBTN" >Add to cart</button>
<br></br>
<img src={picture}/>
<h3>About this item:</h3>
<h4>{category}</h4>
<p>{description}</p>




</div>

      
    </>
  )
}

export default Item