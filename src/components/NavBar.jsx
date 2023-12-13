function NavBar({setUserSearch}) {
      

return (
   <nav>

<img src = "HomePage.png"/>
<img src="grid.png" />

<input value={setUserSearch} placeholder="search for a product ..."
className="search-box" type="text"></input>
   </nav>

   /* get images to display as links in the NavBar */
   )

}
export default NavBar