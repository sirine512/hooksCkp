import './App.css';
import MovieList from './Component/MovieList';
import NavBar from './Component/NavBar';
import { useState } from 'react';

function App() {
 
const [text, setText]=useState("");
  return (<>
     <NavBar setText={setText}/>
     <MovieList text={text}/>
    </>
  );
}

export default App;
