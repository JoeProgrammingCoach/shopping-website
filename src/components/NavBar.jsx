 import { NavLink, BrowserRouter } from "react-router-dom"
 function NavBar({setUserSearch}) {
     

return (
   <nav>
<div><span>Jewelry</span> <span>Electronics</span> <span></span></div>
<input value={setUserSearch} placeholder="search for a product ..."
className="search-box" type="text"></input>
   </nav>

   /* get images to display as links in the NavBar */
   )

}
export default NavBar