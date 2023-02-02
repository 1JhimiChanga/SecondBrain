import React from "react";

import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import MainPage from "./Screens/main"
import RegisterPage from "./Screens/Register/register";
import Login from "./Screens/Login/Login"

// Components
import Footer from "../src/Components/Footer/footer"


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
