// src/components/Navbar.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Home, Map, Box, Mountain } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Home, color: "from-green-600 to-blue-600", path: "/dashboard" },
    { id: "map", label: "Map Explorer", icon: Map, color: "from-blue-600 to-green-600", path: "/map" },
    { id: "3d", label: "3D Viewer", icon: Box, color: "from-orange-500 to-green-600", path: "/viewer" }
  ];

  const pathname = location.pathname.toLowerCase();
  const activeTab = pathname.startsWith("/viewer") ? "3d" : pathname.startsWith("/map") ? "map" : "dashboard";

  const onTabChange = (tab) => {
    const target = tabs.find(t => t.id === tab);
    if (target) navigate(target.path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2">
              <Mountain className="w-8 h-8 text-green-600" />
              <div>
                <h1 className="text-xl text-gray-800">Sikkim Explorer</h1>
                <p className="text-xs text-gray-500">Sacred Heritage Discovery</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 bg-gray-50 p-1 rounded-2xl border border-gray-200"
          >
            {tabs.map((tab, index) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
            <Button
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative px-6 py-2 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg hover:shadow-xl`
                      : 'text-gray-600 hover:text-gray-800 hover:bg-white'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
            </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
              Educational
            </Badge>
            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
              Cultural
            </Badge>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
