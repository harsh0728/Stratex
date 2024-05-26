// src/redux/slices/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    movies: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.movies.findIndex(movie => movie.id === action.payload.id);
      if (existingIndex >= 0) {
        state.movies.splice(existingIndex, 1);
      } else {
        state.movies.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
