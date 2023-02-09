import { useState } from 'react';
import '../style/style.css'
const AddMovie = ({setShowModal,setMovieList,movieList}) => {
    const [newMovie,setNewMovie]=useState({})
    const handleChange=(e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
        e.preventDefault();
    }
    return ( <div className="add">
    <button id='close' onClick={()=>setShowModal(false)}>X</button>
    <h1>Add Movie</h1>
    <div className='form'>
    <input onChange={handleChange} type="text" name="name" placeholder='Movie Name' />
    <input onChange={handleChange} type="text" name="posterurl" placeholder='Poster URL'/>
    <input onChange={handleChange} type="Number" max={5} min={0} name="rating" style={{width:'5vw'}} placeholder='Rating'/>
    <input onChange={handleChange} type="text" name="description"placeholder='Description...'/>
    <button onClick={()=>{setMovieList([...movieList,newMovie]); setShowModal(false)}}>ADD</button>
</div>
    </div> );
}
 
export default AddMovie;