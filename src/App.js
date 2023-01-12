import React from "react";

import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import MainPage from "./Screens/main"
import RegisterPage from "./Screens/Register/register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
