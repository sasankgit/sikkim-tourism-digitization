import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route → Login Page */}
        <Route path="/" element={<Login />} />

        <Route path= "/Signup" element={<Signup />} />
        
      </Routes>
    </Router>
  );
}

export default App
