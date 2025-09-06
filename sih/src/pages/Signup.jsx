// src/pages/Signup.jsx
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // redirect after successful signup
    } catch (err) {
      setError("Signup failed ❌ (Email may already be in use)");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-sky-300 to-blue-900 relative overflow-hidden">
      {/* Background Vector Mountains */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-screen h-72"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#d2a679"
            fillOpacity="1"
            d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,170.7C840,171,960,149,1080,133.3C1200,117,1320,107,1380,101.3L1440,96L1440,320L0,320Z"
          ></path>
          <path
            fill="#b8865b"
            fillOpacity="0.9"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,154.7C672,160,768,192,864,192C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Signup Card */}
      <div className="z-10 bg-[#5a3e2b]/95 border border-[#d2a679] rounded-xl shadow-xl p-8 w-96 text-[#f5deb3]">
        <h1 className="text-3xl font-bold text-center text-[#f5deb3] mb-6">
          Sign Up 📝
        </h1>

        {error && (
          <p className="bg-red-500/20 border border-red-400 text-red-200 rounded p-2 text-sm mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-[#4b2e22] border border-[#d2a679] placeholder-[#f5deb3]/70 text-[#f5deb3] focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-[#4b2e22] border border-[#d2a679] placeholder-[#f5deb3]/70 text-[#f5deb3] focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="p-3 rounded bg-[#d2a679] text-[#2e1b10] font-bold hover:bg-[#c99c6c] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-[#f5deb3] mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#ffe4b5] underline hover:text-[#f5deb3]"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
