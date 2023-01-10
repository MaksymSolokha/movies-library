import React from 'react';
import PropTypes from 'prop-types';
import './Info.scss';

function Info({ title }) {
  return (
    <div className="info">
      <div className="info-title">{title}</div>
      <div className="info-subtitle">
        List of movies and TV Shows, I, Pramod Poudel have watched till date.
        <br />
        Explore what I have watched and also feel free to make a suggestion. 😉
      </div>
    </div>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Info;
