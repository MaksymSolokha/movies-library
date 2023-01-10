import React from 'react';
import { Link } from 'react-router-dom';
import './LinkItems.scss';

function LinkItems() {
  return (
    <div className="linkitems">
      <Link className="link" to="/popular">
        Popular
      </Link>
      <Link className="link" to="/now_playing">
        Now Playing
      </Link>
      <Link className="link" to="/upcoming">
        Up Coming
      </Link>
    </div>
  );
}

export default LinkItems;
