import React, { useState } from 'react'
import { movies } from '../data'
import { useParams } from 'react-router-dom'
function Details() {
    const {id}=useParams()
    const[showTrailer,setShowTrailer]=useState(false)
    return (
       <> 
       {movies.filter(movie=>movie.id==parseInt(id)).map(movie=><div>
       <img src={movie.imgurl} alt={movie.name} style={{width:'100%',height:'42vw'}}/>
       <div className='details'>
       <img src={movie.posterurl} alt={movie.name} style={{height:'250px'}}/>
       <div className='descrip'><h1>{movie.name}</h1>
      <p style={{}}>Rating: {movie.rating} /5 <img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" style={{width:'16px'}}></img></p>
      <p style={{}}>{movie.description}</p>
      <button id='trailer' onClick={()=> setShowTrailer(true)}>Trailer</button>
      {showTrailer && <div className='show-trailer'> 
      <button id='close' onClick={()=>setShowTrailer(false)}>X</button>
      <iframe src={movie.trailer}  id="video"  width="727" height="409"> </iframe></div>}
      </div>
      </div>
       </div>)}
       </> 
    )
}

export default Details
