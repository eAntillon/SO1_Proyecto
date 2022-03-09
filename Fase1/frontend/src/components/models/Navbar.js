import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark animate__animated animate__fadeInDown">
      <Link
        className="navbar-brand"
        to="/"
      >
        Home
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            activeclassname="active"
            className="nav-item nav-link"
            exact="true"
            to="/ramscreen"
          >
            Ram
          </NavLink>

          <NavLink
            activeclassname="active"
            className="nav-item nav-link"
            exact="true"
            to="/processscreen"
          >
            Procesos
          </NavLink>

          <NavLink
            activeclassname="active"
            className="nav-item nav-link"
            exact="true"
            to="/apireports"
          >
            Reportes
          </NavLink>
        </div>
      </div>
    </nav>
  )
}