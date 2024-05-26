// // src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import moviesReducer from './slices/moviesSlice';
// import favoritesReducer from './slices/favoritesSlice';

// export const store = configureStore({
//   reducer: {
//     movies: moviesReducer,
//     favorites: favoritesReducer,
//   },
// });



// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import moviesReducer from './slices/moviesSlice';
import favoritesReducer from './slices/favoritesSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
