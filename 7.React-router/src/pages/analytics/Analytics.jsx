import React from "react";
import { Link } from "react-router-dom";

export default function Analytics() {
  return (
    <div>
      <p>Analytics</p>
      <nav className="text-center">
        <Link to={}>Development</Link>
        <Link to={}>CyberSecurity</Link>
        <Link to={}>UI/UX</Link> 
      </nav>
    </div>
  );
}
