import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet’s default marker issue with Webpack/Vite
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// ✅ District data (coordinates + info)
const districts = [
  {
    name: "East Sikkim",
    capital: "Gangtok",
    monasteries: 45,
    position: [27.33, 88.62], // approximate
    fact: "Home to Rumtek Monastery and the state capital.",
  },
  {
    name: "West Sikkim",
    capital: "Gyalshing",
    monasteries: 52,
    position: [27.25, 88.18],
    fact: "Known for Pemayangtse and Tashiding Monasteries.",
  },
  {
    name: "North Sikkim",
    capital: "Mangan",
    monasteries: 38,
    position: [27.67, 88.60],
    fact: "Famous for Gurudongmar Lake and Yumthang Valley.",
  },
  {
    name: "South Sikkim",
    capital: "Namchi",
    monasteries: 41,
    position: [27.17, 88.35],
    fact: "Renowned for Char Dham and Samdruptse Monastery.",
  },
];

const SikkimMap = () => {
  return (
    <div className="pt-20 flex justify-center">
      <div className="w-full max-w-5xl border rounded-xl shadow-lg bg-white p-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-900 text-center">
          Sikkim Tourism Map
        </h2>

        <MapContainer
          center={[27.5, 88.5]} // Center of Sikkim
          zoom={9}
          style={{ height: "600px", width: "100%", borderRadius: "12px" }}
        >
          {/* Base Map Layer */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* District markers */}
          {districts.map((district, idx) => (
            <Marker key={idx} position={district.position} icon={customIcon}>
              <Popup>
                <h3 className="font-bold text-lg text-blue-600">
                  {district.name}
                </h3>
                <p><strong>Capital:</strong> {district.capital}</p>
                <p><strong>Monasteries:</strong> {district.monasteries}</p>
                <p className="italic">{district.fact}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default SikkimMap;
