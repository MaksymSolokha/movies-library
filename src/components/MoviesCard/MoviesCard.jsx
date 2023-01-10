import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MoviesCard.scss';
import Rating from '../Rating/Rating';

function MoviesCard({ name, poster, id, rating }) {
  return (
    <Link to={`/movie/${id}`} className="movies-card">
      <div className="movies-card-wrapper">
        <div className="movies-poster-wrapper">
          <img
            className="movies-poster"
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={name}
          />
        </div>
        <div className="movies-name">{name}</div>
      </div>
      <Rating rating={rating} />
    </Link>
  );
}
MoviesCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MoviesCard;
