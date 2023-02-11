import MovieCard from "../Component/MovieCard";
import '../style/style.css';
import { movies } from "../data.js";
import { useState } from "react";
import AddMovie from "../Component/AddMovie";
const MovieList = ({text}) => {
  const[showModal,setShowModal]=useState(false)
  const [movieList,setMovieList]=useState(movies)
  return (  <>
  <h1 id='page'> Movies </h1>
  <div className="cards">
  {movieList.filter((movie)=> movie.name.toUpperCase().includes(text.toUpperCase()) ).map((movie)=> ( <MovieCard x={movie}/>
  ))}
    <button id="addBtn" onClick={()=> setShowModal(true)}> <img src="https://cdn2.iconfinder.com/data/icons/interactive-shadow-pack/100/_-5-512.png" style={{width:'100%'}}></img></button>
    {showModal && <AddMovie movieList={movieList} setMovieList={setMovieList} setShowModal={setShowModal}/>}
 
  </div></>);
}
 
export default MovieList;