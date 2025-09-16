import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Viewer from './pages/Viewer';
import Map from './pages/Map';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Route → Login Page */}
        <Route path="/" element={<Dashboard />} />
        
        <Route path = "/dashboard" element = {<Dashboard/>} />
        <Route path = "/viewer" element = {<Viewer/>} />
        <Route path = "/Map" element = {<Map/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App
