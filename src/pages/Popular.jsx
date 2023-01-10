import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/MoviesSlice/MoviesSlice";

import AllMovies from "../components/organisms/AllMovies/AllMovies";

function Popular() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies("popular"));
	}, []);

	const movies = useSelector((state) => state.movies.movies);

	return <AllMovies movies={movies} />;
}

export default Popular;
