import MovieCard from "./MovieCard";
import '../style/style.css';
import { movies } from "../data.js";
import { useState } from "react";
import AddMovie from "./AddMovie";
const MovieList = ({text}) => {
  const[showModal,setShowModal]=useState(false)
  const [movieList,setMovieList]=useState(movies)
  return (  <>
  <h1 style={{color:'whitesmoke', margin:'30px 0 0 50px'}}> Movies </h1>
  <div className="cards">
  {movieList.filter((movie)=> movie.name.toUpperCase().includes(text.toUpperCase()) ).map((movie)=> ( <MovieCard x={movie}/>
  ))}
    <button id="card" onClick={()=> setShowModal(true)}> <img src="https://cdn2.iconfinder.com/data/icons/interactive-shadow-pack/100/_-5-512.png" style={{width:'100%'}}></img></button>
    {showModal && <AddMovie movieList={movieList} setMovieList={setMovieList} setShowModal={setShowModal}/>}
 
  </div></>);
}
 
export default MovieList;