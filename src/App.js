import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import './App.css';

import React from 'react';
import MoviesList from  './components/movieList'

function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>      
        <Route path="" element={<MoviesList/>} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
