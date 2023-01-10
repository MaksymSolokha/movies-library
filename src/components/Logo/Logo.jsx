import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="" />
    </Link>
  );
}

export default Logo;
