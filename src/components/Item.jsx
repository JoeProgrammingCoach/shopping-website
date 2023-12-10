import { useState } from 'react'

function Item({item, picture}) {

  
  return (
    <>
<div><span className='item-description'>{item}</span>
<br></br>
<img src={picture}/>




</div>

      
    </>
  )
}

export default Item