import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoriteList = () => {
  const favoriteMovies = useSelector(state => state.favorites.movies);

  return (
    <div className="min-h-[80vh] grid sm:grid-cols-2 
    md:grid-cols-3 space-x-5 
    space-y-10 lg:grid-cols-4 max-w-7xl
     mx-auto p-3 ">
      {favoriteMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteList;
