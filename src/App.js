import React from "react";

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import MainPage from "./Screens/main"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
