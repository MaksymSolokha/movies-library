import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import './Input.scss';
import searchImg from '../../assets/search-normal.svg';
import { useDispatch } from 'react-redux';
import {
  clearMovies,
  fetchSearchMovies,
} from '../../store/SearchMoviesSilce/SearchMoviesSlice';

function Input({ placeholder }) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (text === '') {
      dispatch(clearMovies());
    }
    dispatch(fetchSearchMovies(text));
  }, [text]);

  return (
    <div className="input">
      <img src={searchImg} alt="" />
      <input
        onChange={(e) => setText(e.target.value)}
        id="input"
        name="input"
        type="text"
        placeholder="eg. Avenger"
        value={text}
      />
      <label htmlFor="input" className={text ? 'label-nonempty' : ''}>
        {placeholder}
      </label>
    </div>
  );
}
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
export default Input;
