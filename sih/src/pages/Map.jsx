import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

// GeoJSON file for Sikkim districts
const geoUrl =
  "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/sikkim.geojson";

const Map = () => {
  const [hoveredDistrict, setHoveredDistrict] = useState("");

  return (
    <div className="w-full flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Sikkim Tourism Map</h1>

      {/* Show hovered district */}
      {hoveredDistrict && (
        <p className="mb-4 text-lg font-semibold text-blue-600">
          {hoveredDistrict}
        </p>
      )}

      {/* Interactive Map */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 8000,
          center: [88.5, 27.5], // Approx center of Sikkim
        }}
        style={{ width: "100%", height: "600px" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => setHoveredDistrict(geo.properties.name)}
                onMouseLeave={() => setHoveredDistrict("")}
                style={{
                  default: { fill: "#D6D6DA", stroke: "#000" },
                  hover: { fill: "#00BFFF", stroke: "#000" },
                  pressed: { fill: "#FF5722", stroke: "#000" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Map;
