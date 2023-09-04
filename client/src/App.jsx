import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} /> // used redirect here
        </Routes>
      </Router>
    </>
  );
}
