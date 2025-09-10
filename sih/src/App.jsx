import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Viewer from './pages/Viewer';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Route → Login Page */}
        <Route path="/" element={<Login />} />
        <Route path= "/Login" element={<Login />} />

        <Route path= "/Signup" element={<Signup />} />
        <Route path = "/dashboard" element = {<Dashboard/>} />
        <Route path = "/viewer" element = {<Viewer/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App
