import './App.css';
import MovieList from './views/MovieList';
import NavBar from './Component/NavBar';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import WatchList from './views/WatchList';
import Details from './views/Details';

function App() {
 
const [text, setText]=useState("");
  return (<>
     <NavBar setText={setText}/>
     <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<MovieList text={text}/>}/>
      <Route path='/watchlist' element={<WatchList/>}/>
      <Route path='/movie/:id' element={<Details/>}/>
      <Route path='*' element={<h1 id='not'>Not Found</h1>}/>
     </Routes>

    </>
  );
}

export default App;
