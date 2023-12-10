import { useState } from 'react'

function Item({item, picture, description, price}) {

  
  return (
    <>
<div><span className='item-description'>{item}</span><span className='item-price'>${price}</span>
<button>Add to cart</button>
<br></br>
<img src={picture}/>
<h3>About this item:</h3>
<p>{description}</p>




</div>

      
    </>
  )
}

export default Item