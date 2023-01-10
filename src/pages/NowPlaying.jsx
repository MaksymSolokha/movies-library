import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/MoviesSlice/MoviesSlice';
import AllMovies from '../components/organisms/AllMovies/AllMovies';

function NowPlaying() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies('now_playing'));
  }, []);

  const movies = useSelector((state) => state.movies.movies);

  return <AllMovies movies={movies} />;
}

export default NowPlaying;
