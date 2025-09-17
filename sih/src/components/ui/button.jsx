import React from "react";

export function Button({ variant = "ghost", className = "", onClick, children, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative px-4 py-1.5 rounded-lg transition-all duration-300 text-sm font-medium ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;


