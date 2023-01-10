import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleMovie } from "../../../store/SingleMovieSlice/SingleMovieSlice";
import { Skeleton } from "@mui/material";

import star from "../../../assets/star.svg";
import "./Movie.scss";

function Movie() {
	const { id, movie } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSingleMovie(id));
	}, [id]);

	const movieItem = useSelector((state) => state.movie.movie);
	const genres = useSelector((state) => state.movie.movie.genres);
	const loading = useSelector((state) => state.movie.loading);

	return (
		<div className="movie">
			<div className="movie-image">
				{loading ? (
					<Skeleton
						animation="wave"
						variant="rounded"
						width={1280}
						height={720}
					/>
				) : (
					<img
						src={`https://image.tmdb.org/t/p/w1280${movieItem.backdrop_path}`}
						alt={movieItem.original_title}
					/>
				)}
				<div className="movie-name">
					<h3 className="movie-name-original">{movieItem.original_title}</h3>
				</div>
			</div>
			<div className="movie-info-container">
				<div className="movie-poster">
					{loading ? (
						<Skeleton
							animation="wave"
							variant="rounded"
							width={500}
							height={750}
						/>
					) : (
						<img
							src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
							alt={movieItem.original_title}
						/>
					)}
				</div>
				<div className="movie-info">
					<h3 className="movie-info-tagline">{movieItem.tagline}</h3>
					<div className="movie-info-overview">{movieItem.overview}</div>
					<div className="movie-info-rating-wrapper">
						<div className="movie-info-rating">
							<img src={star} alt="" />
							{movieItem.vote_average}
						</div>
					</div>
					<div className="movie-info-type wrapper">
						<div className="movie-info-type-title title">Type</div>
						<div className="movie-info-type-text text">{movie}</div>
					</div>
					<div className="movie-info-data wrapper">
						<div className="movie-info-data-title title">Release Date:</div>
						<div className="movie-info-type-text text">
							{movieItem.release_date}
						</div>
					</div>
					<div className="movie-info-time wrapper">
						<div className="movie-info-time-title title">Run time</div>
						<div className="movie-info-time-text text">{`${movieItem.runtime} minutes`}</div>
					</div>
					<div className="movie-info-genres wrapper">
						<div className="movie-info-genres-title title">Genres</div>
						{genres === undefined
							? null
							: genres.map((item) => (
									<div key={item.id} className="movie-info-genres-text text">
										{item.name}
									</div>
							  ))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Movie;
