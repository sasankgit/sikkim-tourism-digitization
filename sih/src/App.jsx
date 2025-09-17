import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";

// Pages
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Viewer from "./pages/Viewer";
import SikkimMap from "./pages/SikkimMap";
import PrayerWheelPage from "./pages/PrayerWheelPage"; 

function App() {
  return (
    <Router>
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div style={{ height: 72 }} />
      <Routes>
        {/* Default Route → Dashboard */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/viewer" element={<Viewer />} />
        <Route path="/map" element={<SikkimMap />} />
        <Route path="/prayer-wheel" element={<PrayerWheelPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
