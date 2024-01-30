import React, { useState, useEffect } from 'react';
import { ReactNotifications } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import Oops from "./Pages/Oops/Oops"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Reports from "./Pages/Admin/Reports/Reports";
import Settings from "./Pages/Admin/Settings/Settings"; // Admin settings
import Employee from "./Pages/Admin/Employee/Employee";
import Categories from "./Pages/Admin/DbEntities/Categories/Categories";
import AddCategory from "./Pages/Admin/DbEntities/Categories/AddCategory";
import EditCategory from "./Pages/Admin/DbEntities/Categories/EditCategory";
import Analytics from "./Pages/Admin/Analytics/Analytics";
import Contact from "./Pages/Contact/Contact";
import OurStory from "./Pages/OurStory/OurStory";

import Dashboards from "./Pages/Admin/Dashboards/Dashboards";
import DbEntities from "./Pages/Admin/DbEntities/DbEntities";

import Users from "./Pages/Admin/Users/Users";


function App() {
  const [isLoading, setIsLoading] = useState(false);

  const HomeWithRedirect = () => {
    if (!localStorage.getItem("jwtToken")) {
      return <Navigate to="/login" />;
    }
    return <Home />;
  };

  return (
    <>
      <AppContext.Provider value={{ isLoading, setIsLoading }}>
        <ReactNotifications />
        <Router>
          <Routes>
            <Route path="/" element={<HomeWithRedirect />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Oops />} />
            <Route path="/admin/settings" element={<Settings />} exact />
            <Route path="/admin/employee" element={<Employee />} exact />
            <Route path="/admin/reports/" element={<Reports />} exact />
            <Route path="/admin/analytics" element={<Analytics />} exact />
            <Route path="/admin/dbentities" element={<DbEntities />} exact />
            <Route path="/admin/dbentities/categories" element={<Categories />} exact />
            <Route path="/admin/dbentities/addcategory" element={<AddCategory />} exact />
            <Route path="/admin/dbentities/editcategory/:id" element={<EditCategory />} />
            <Route path="/admin/dashboards" element={<Dashboards />} exact />
            <Route path="/admin/users" element={<Users />} exact />
            <Route path="/ourstory" element={<OurStory />} exact />
            <Route path="/contact" element={<Contact />} exact />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
