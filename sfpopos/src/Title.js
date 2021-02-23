// src/Title.js
import { NavLink } from 'react-router-dom'
import React from 'react'
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <header>
        <p> 
          <h1>SFPOPOS</h1>
          <h3 className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</h3>

          <div>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              exact
              to="/">List</NavLink>

<NavLink
  className="nav-link"
  activeClassName="nav-link-active"
  to="/about">About</NavLink>
          </div>

        </p>
      </header>
    </div>
  )
}

export default Title