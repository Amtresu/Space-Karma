/* eslint-disable */
import planet from '../images/planet.png';
import './Header.css';
import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <div className="header">
      <div className="header-photo">
        <img alt="logo" src={planet} />
        <h1 className="header-text">Space Karma Page</h1>
      </div>
      <Nav />
    </div>
  );
}

export default Header;
