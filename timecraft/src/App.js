import React, { useState, useEffect } from 'react';
import { ReactNotifications } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import Oops from "./Pages/Oops/Oops"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      setIsLoading(true);
    }
  }, []);

  const HomeWithRedirect = () => {
    if (!isLoggedIn) {
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
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
