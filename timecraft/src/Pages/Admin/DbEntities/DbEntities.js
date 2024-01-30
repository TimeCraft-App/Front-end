import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./DbEntities.css";
import { showWarningNotification } from "../../../Utils/NotificationUtils";

const DbEntities = () => {
  var navigate = useNavigate();
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) {
      showWarningNotification("You must be admin to view this page", "You'll be redirected", 2000)
      navigate("/login")
    }
  }, [])
  return (
    <div className="db__entities">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/timeoffrequest">Timeoff Request</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/admin/dbentities">Db Entities</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <h1>Entities</h1>
        <div className="container">
          <div className="card">
            <h4>Users</h4>
            <p>Dashboard for users</p>
            <NavLink to="/admin/users">View Users</NavLink>
          </div>

          <div className="card">
            <h4>Employee</h4>
            <p>Dashboard for Employees of TimeCraft</p>
            <NavLink to="/admin/employee">View Employees</NavLink>
          </div>

          <div className="card">
            <h4>-</h4>
            <p>Dashboard for ??</p>
            <NavLink to="/admin/dbentities/Employee">View ??</NavLink>
          </div>

          <div className="card">
            <h4>-</h4>
            <p>Dashboard for ??</p>
            <NavLink to="/admin/dbentities/Employee">View ??</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DbEntities;
