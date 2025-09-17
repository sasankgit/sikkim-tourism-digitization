import React from "react";

export function Badge({ className = "", children, variant = "outline" }) {
  return (
    <span className={`px-3 py-1 text-xs rounded-full ${className}`}>{children}</span>
  );
}

export default Badge;


