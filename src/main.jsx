import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import PokeList from './components/PokeList';
import Recherche from './components/Recherche';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components/Home' element={<Home />} />
        <Route path='/components/PokeList' element={<PokeList />} />
        <Route path='/components/Recherche' element={<Recherche />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
