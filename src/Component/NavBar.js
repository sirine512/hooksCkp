import '../style/style.css'
const NavBar = ({setText}) => {
    return (  
        <nav>
        <h1>Watch.NET</h1>
        <ul id='list'>
           <li><a href="">Home</a></li> 
           <li> <a href="">Movies</a></li>
           <li> <a href="">WatchList</a></li>
        </ul>
        <form id='search' >
        <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Search..."   />
      </form>
        </nav>
    );
}
 
export default NavBar;