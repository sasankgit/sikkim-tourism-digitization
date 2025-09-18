import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";

// Pages
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Viewer from "./pages/Viewer";
import SikkimMap from "./pages/SikkimMap"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Route → Dashboard */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/viewer" element={<Viewer />} />
        <Route path="/map" element={<SikkimMap />} /> 
      </Routes>
    </Router>
  );
}

export default App;
