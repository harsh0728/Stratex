import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 h-20 items-center text-slate-100 font-bold text-2xl flex justify-around p-4">
      <div className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
        <Link to="/">Movies</Link>
      </div>
      <div className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
        <Link to="/favorites">Favourites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
