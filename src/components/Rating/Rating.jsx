import React from 'react';
import star from '../../assets/star.svg';
import PropTypes from 'prop-types';
import './Rating.scss';

function Rating({ rating }) {
  return (
    <div className="movies-rating-wrapper">
      <div className="movies-rating">
        <img src={star} alt="" />
        {rating}
      </div>
    </div>
  );
}
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
