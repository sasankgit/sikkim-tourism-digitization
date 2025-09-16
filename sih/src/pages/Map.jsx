import React, { useState, useEffect } from 'react';

const Map = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate floating leaves
    const newLeaves = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      rotation: Math.random() * 360
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating Leaves */}
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className="absolute text-green-500 opacity-60"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            animation: `float ${leaf.duration}s ease-in-out infinite`,
            animationDelay: `${leaf.delay}s`,
            transform: `rotate(${leaf.rotation}deg)`
          }}
        >
          🍃
        </div>
      ))}

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Physical Map of Sikkim
          </h1>
          
          {/* Map Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
            <img 
              src="http://maps.maphill.com/india/sikkim/maps/physical-map/cropped-outside/free-fancy-physical-map-of-sikkim-cropped-outside.jpg" 
              alt="Physical Map of Sikkim, cropped outside"
              className="max-w-full h-auto rounded"
              width="423" 
              height="538"
            />
            
            <div className="mt-4 text-sm text-gray-600">
              <a 
                href="http://www.maphill.com/india/sikkim/maps/physical-map/cropped-outside/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-800 transition-colors"
              >
                Source: Maphill.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-3deg);
          }
          75% {
            transform: translateY(-20px) rotate(8deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Map;