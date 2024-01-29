import React from "react";
import { NavLink } from "react-router-dom";
import "./SimpleNavbar.css";

const SimpleNavbar = () => {
  return (
    <div className="simple__navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeoffrequest" className={({ isActive }) => (isActive ? "active" : "")}>
              Timeoff Request
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dbentities" className={({ isActive }) => (isActive ? "active" : "")}>
              Db Entities
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SimpleNavbar;
