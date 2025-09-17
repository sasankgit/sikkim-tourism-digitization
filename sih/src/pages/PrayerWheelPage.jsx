import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Heart,
  Info,
  RotateCcw,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PrayerWheel from "../components/PrayerWheel";

const PrayerWheelPage = () => {
  const [spinCount, setSpinCount] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        opacity: Math.random() * 0.6 + 0.2,
        duration: Math.random() * 10 + 10,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const handleSpin = () => {
    setSpinCount((prev) => prev + 1);
  };

  const resetCount = () => {
    setSpinCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [p.opacity, 0.1, p.opacity],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-56 h-56 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-rose-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/dashboard"
              className="flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Dashboard
            </Link>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <Info className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              About Prayer Wheels
            </button>
          </div>

          {/* Hero Section */}
          <div className="text-center text-white mb-16">
            <div className="relative inline-block mb-6">
              <Sparkles className="absolute -top-4 -left-4 w-8 h-8 text-amber-400 animate-pulse" />
              <Star
                className="absolute -top-2 -right-6 w-6 h-6 text-blue-400 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent"
                style={{
                  fontFamily: "Playfair Display, serif",
                  textShadow: "0 0 30px rgba(255,255,255,0.3)",
                }}
              >
                Digital Prayer Wheel
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Experience the spiritual practice of spinning prayer wheels, a
              sacred Buddhist tradition that sends blessings and positive energy
              into the world.
            </motion.p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Info Panel */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <h3
                    className="text-3xl font-semibold text-white"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    About Prayer Wheels
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/90">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">
                          Spiritual Significance
                        </h4>
                        <p className="text-sm leading-relaxed">
                          Prayer wheels contain sacred mantras and prayers. Each
                          spin is believed to send blessings to all beings and
                          accumulate positive karma.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">
                          Traditional Practice
                        </h4>
                        <p className="text-sm leading-relaxed">
                          In Tibetan Buddhism, spinning prayer wheels clockwise
                          is a form of meditation and devotion, connecting
                          practitioners to the teachings of compassion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Prayer Wheel Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent blur-3xl"></div>

            <div className="text-center mb-12 relative z-10">
              <h2
                className="text-4xl font-semibold text-white mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Spin for Blessings
              </h2>
              <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Tap to spin or drag horizontally for a longer rotation. Each
                spin sends prayers into the universe.
              </p>

              {/* Spin Counter */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <motion.div
                  className="flex items-center bg-gradient-to-r from-amber-400/30 to-pink-500/30 rounded-full px-8 py-4 border border-white/30 shadow-xl backdrop-blur-lg"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <Heart className="w-6 h-6 text-red-400 mr-3 animate-pulse" />
                  <motion.span
                    key={spinCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-white font-bold text-xl"
                  >
                    Spins: {spinCount}
                  </motion.span>
                </motion.div>

                <motion.button
                  onClick={resetCount}
                  className="flex items-center bg-gradient-to-r from-white/20 to-white/10 rounded-full px-8 py-4 border border-white/30 backdrop-blur-lg text-white font-medium shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset
                </motion.button>
              </div>
            </div>

            {/* Prayer Wheel */}
            <div className="flex justify-center relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <PrayerWheel onSpin={handleSpin} />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                    <span className="text-white/80 text-sm font-medium">
                      ॐ मणि पद्मे हूँ
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Blessings Section */}
          <div className="mt-20 text-center">
            <h3
              className="text-3xl font-semibold text-white mb-12"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              May Your Spins Bring
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "☀️",
                  title: "Inner Peace",
                  desc: "Find tranquility and mindfulness through sacred practice",
                  colors: "from-yellow-400 to-orange-500",
                },
                {
                  icon: "🌱",
                  title: "Compassion",
                  desc: "Cultivate loving-kindness for all beings",
                  colors: "from-green-400 to-emerald-500",
                },
                {
                  icon: "🌟",
                  title: "Wisdom",
                  desc: "Gain insight and understanding through devotion",
                  colors: "from-blue-400 to-purple-500",
                },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${b.colors} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <span className="text-white text-2xl">{b.icon}</span>
                  </div>
                  <h4 className="text-white font-semibold mb-3 text-xl">
                    {b.title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center text-white/60">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-lg italic mb-2">
                "May all beings be happy and free from suffering"
              </p>
              <p className="text-sm">Traditional Buddhist Prayer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerWheelPage;
