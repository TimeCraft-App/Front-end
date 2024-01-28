
import React, { useState } from 'react';
import { ReactNotifications } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppContext } from "./AppContext";
import Oops from "./Pages/Oops/Oops"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";


function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <AppContext.Provider value={{ isLoading, setIsLoading }}>
        <ReactNotifications />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/register" element={<Register />} exact />
            <Route path="*" element={<Oops />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}
export default App;
