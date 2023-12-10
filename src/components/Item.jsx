import { useState } from 'react'

function Item({item, picture}) {

  
  return (
    <>
<div><span>{item}</span>
<img src={picture}/>
<br></br>



</div>

      
    </>
  )
}

export default Item