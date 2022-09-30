/* eslint-disable */

import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="navigation">
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? '#0000FF' : '#545e6f',
        })}
        to="/"
        className="style"
      >
        Rockets
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? '#0000FF' : '#545e6f',
        })}
        to="Mission"
        className="style"
      >
        Mission
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? '#0000FF' : '#545e6f',
        })}
        to="MyProfile"
        className="style"
      >
        My Profile
      </NavLink>
    </div>
  );
}
export default Nav;
