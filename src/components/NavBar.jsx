function NavBar({setUserSearch}) {
      

return (
   <nav>

<img src = "HomePage.png"/>
<img src="grid.png" />
<input value={setUserSearch}
className="search-box" type="text"></input>
   </nav>

   
   )

}
export default NavBar