import React from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";

import "./AllMovies.scss";
import MoviesCard from "../../MoviesCard/MoviesCard";
import PropTypes from "prop-types";

function AllMovies({ movies }) {
	const loading = useSelector((state) => state.movies.loading);

	return (
		<div className="allmovies">
			<div className="allmovies-card">
				{loading ? (
					<Skeleton
						width={1440}
						height={1280}
						variant="rounded"
						animation="pulse"
					/>
				) : (
					movies.map((movie) => (
						<MoviesCard
							rating={movie.vote_average}
							key={movie.id}
							name={movie.original_title}
							poster={movie.poster_path}
							id={movie.id}
						/>
					))
				)}
			</div>
		</div>
	);
}

AllMovies.defaultProps = {
	movies: [],
};

AllMovies.propTypes = {
	movies: PropTypes.array.isRequired,
};

export default AllMovies;
