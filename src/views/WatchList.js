import React, { useState } from 'react'
import MovieCard from '../Component/MovieCard'
import { movies } from '../data'

function WatchList() {
    const [movieList,setMovieList]=useState(movies)
    return (
       <><h1 id='page'>Watch Now</h1>
        <div className="cards">
  {movieList.map((movie,i)=>  <MovieCard x={movie}/>  )}</div>
       </> 
    )
}

export default WatchList
