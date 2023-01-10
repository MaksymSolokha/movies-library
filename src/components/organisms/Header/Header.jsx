import React from 'react';
import LinkItems from '../../LinkItems/LinkItems';
import Logo from '../../Logo/Logo';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <Logo />
      <LinkItems />
    </div>
  );
}

export default Header;
