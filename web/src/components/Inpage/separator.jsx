import React from "react";

export default function Separator({ className = "", color = "gray-300", opacity = "50", marginY = "8" }) {
  return (
    <div
      className={`my-${marginY} border-t border-${color} opacity-${opacity} ${className}`}
    ></div>
  );
}
