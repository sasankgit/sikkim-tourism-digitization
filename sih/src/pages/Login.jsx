// src/pages/Login.jsx
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // redirect after login
    } catch (err) {
      setError("Invalid email or password ❌");
    }
  };

return (
  <div className="h-screen w-screen flex items-center justify-center bg-[#0a0f2c] relative overflow-hidden">
    {/* Glowing Login Card */}
    <div className="z-10 bg-[#0f1a3d]/90 border border-[#00bfff] rounded-2xl shadow-lg p-8 w-96 text-white animate-pulse-glow">
      <h1 className="text-center text-[#00bfff] text-xl font-semibold mb-6">
        Login 🔑
      </h1>

      {error && (
        <p className="bg-red-500/20 border border-red-400 text-red-200 rounded p-2 text-sm mb-4">
          {error}
        </p>
      )}

      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-[#121a3d] border border-[#00bfff]/70 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-[#121a3d] border border-[#00bfff]/70 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="p-3 rounded bg-[#00bfff] text-[#b7b8be] font-bold hover:bg-[#0099cc] transition"
        >
          Login
        </button>
      </form>

      {/* Signup Redirect */}
      <p className="text-center text-gray-300 mt-6">
        Don’t have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          className="text-[#00bfff] underline hover:text-[#66d9ff]"
        >
          Sign Up
        </button>
      </p>
    </div>

    {/* Glow Animation */}
    <style>
      {`
        @keyframes glow {
          from {
            box-shadow: 0 0 20px #00bfff, 0 0 40px #0066ff;
          }
          to {
            box-shadow: 0 0 35px #00bfff, 0 0 70px #0066ff;
          }
        }
        .animate-pulse-glow {
          animation: glow 2s infinite alternate;
        }
      `}
    </style>
  </div>
);
}