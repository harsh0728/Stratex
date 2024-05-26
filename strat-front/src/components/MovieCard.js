import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/slices/favoritesSlice";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { redirect } from "react-router-dom";
import image from "../assets/TheGodFather.jpeg"

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.favorites.movies.find((fav) => fav.id === movie.id)
  );

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
      <p className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">{movie.movie}</p>
      <img className="h-[180px]" src={image}></img>
      <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-green-500 mr-0 mb-0">
        Rating: {movie.rating}
      </p>
      <button onClick={() => window.open(movie.imdb_url, "_blank")}
      className=" w-40  text-gray-800 font-medium text-[18px] line-clamp-3"
      >
        View on IMDB
      </button>
      <button
        onClick={handleFavoriteClick}
        className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-bold p-1 px-3 text-[20px] uppercase tracking-wide"
      >
        {isFavorite ? (
          <MdOutlineFavoriteBorder className=" text-yellow-500" />
        ) : (
          <MdOutlineFavoriteBorder className="size-6"/>
        )}
      </button>
    </div>
  );
};

export default MovieCard;
