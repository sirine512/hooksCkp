import React, { useState } from 'react'
import { movies } from '../data'
import Card from '../Component/Card'
import WatchList from './WatchList'
function Home() {
    const [movieList,setMovieList]=useState(movies)
    return (<>
    <h1 id='page'>Most Popular</h1>
        <div className="cardsH">
  {movieList.slice(5).map((movie)=> <Card movie={movie}/>
      )}
  </div>
  <div style={{marginTop:'29vw'}}><WatchList/></div>
  </>
  )
}

export default Home
