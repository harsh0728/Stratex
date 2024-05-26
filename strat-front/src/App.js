import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import FavoriteList from './pages/FavoriteList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar  />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<FavoriteList />} />
      </Routes>
    </div>
  );
}

export default App;
