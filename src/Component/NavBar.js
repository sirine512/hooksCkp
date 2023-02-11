import { Link } from 'react-router-dom'
import '../style/style.css'
const NavBar = ({setText}) => {
    return (  
        <nav>
        <Link to={'/'} style={{textDecoration: 'none'}}> <h1>Watch.NET</h1></Link>
        <div id='list'>
           <Link to={'/'} id='comp'> Home </Link>
           <Link to={'/movies'}  id='comp'>Movies</Link>
           <Link to={'/watchlist'}  id='comp'>WatchList</Link>
        </div>
        <form id='search' >
        <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Search..."   />
      </form>
        </nav>
    );
}
 
export default NavBar;