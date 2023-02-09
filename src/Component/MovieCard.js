import React from "react";

const MovieCard = ({x}) => {
  return (
    <div id="card">
      
      <img src={x.posterurl} alt={x.name} style={{width:'100%',height:'150px'}}/>
      <h2 style={{textAlign:'center'}}>{x.name}</h2>
      <p  style={{marginLeft:'20px'}}>Rating: {x.rating} /5 <img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" style={{width:'16px'}}></img></p>
      <p style={{padding:'10px',fontSize:'0.9em'}}>{x.description}</p>
    </div>
  );
};

export default MovieCard;
