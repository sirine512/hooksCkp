import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({x}) => {
  return (
    <Link to={`/movie/${x.id}`} style={{textDecoration: 'none'}} id='linkCard' >
    <div id="card">
      <img src={x.posterurl} alt={x.name} style={{width:'100%',height:'250px'}}/>
      <h3 style={{textAlign:'center'}}>{x.name}</h3>
      <p  style={{textAlign:'center'}}>Rating: {x.rating} /5 <img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" style={{width:'16px'}}></img></p>
    </div></Link>
  );
};

export default MovieCard;
