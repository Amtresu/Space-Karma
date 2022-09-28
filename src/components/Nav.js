/* eslint-disable */

import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

function Nav() {
  return (
    <div className="navigation">
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? '#0000FF' : '#545e6f',
        })}
        to="Rockets"
        className="style"
      >
        Rockets
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? '#0000FF' : '#545e6f',
        })}
        to="Missions"
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
