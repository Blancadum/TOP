// src/client/components/PageLayout.jsx
import React from "react";

export default function PageLayout({ children, className = "" }) {
  return <div className={`page-layout ${className}`}>{children}</div>;
}
