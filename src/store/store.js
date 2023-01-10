import { configureStore } from '@reduxjs/toolkit';
import MovieSlice from './MoviesSlice/MoviesSlice';
import SearchMoviesSlice from './SearchMoviesSilce/SearchMoviesSlice';
import SingleMovieSlice from './SingleMovieSlice/SingleMovieSlice';

export const store = configureStore({
  reducer: {
    movies: MovieSlice,
    movie: SingleMovieSlice,
    searchMovies: SearchMoviesSlice,
  },
});
