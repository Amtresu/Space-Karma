/* eslint-disable */

import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navigation">
      <Link to="/" className="rockets style">
        Rockets
      </Link>
      <Link to="Mission" className="mission style">
        Mission
      </Link>
      <Link to="MyProfile" className="my-profile style">
        My Profile
      </Link>
    </div>
  );
}
export default Nav;
