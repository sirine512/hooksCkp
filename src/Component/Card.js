import React, { useState } from 'react'
import { movies } from '../data'

function Card({movie}) {
    const[showTrailer,setShowTrailer]=useState(false)
    return (
        <div className='cardHome'>
  <img src={movie.imgurl} style={{width:'60vw',height:'30vw'}}></img>
  <div className='descripHome'><h1>{movie.name}</h1>
      <p style={{}}>Rating: {movie.rating} /5 <img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" style={{width:'16px'}}></img></p>
      <p style={{}}>{movie.description}</p>
      <button id='trailer' onClick={()=> setShowTrailer(true)}>Trailer</button>
      {showTrailer && <div className='show-trailer'> 
      <button id='close' onClick={()=>setShowTrailer(false)}>X</button>
      <iframe src={movie.trailer}  id="video"  width="727" height="409"> </iframe></div>}
      </div>
     </div>
    )
}

export default Card
