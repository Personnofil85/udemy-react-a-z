import React from "react";
import { Link } from "react-router-dom";
import {Outlet} from "react-router";

export default function Analytics() {
  return (
    <div className="text-center bg-slate-300 pb-10">
      <div className="mb-6">
        <p className="text-2xl pt-10 mb-6">Here is the company analytics</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          debitis dignissimos, esse eveniet illum ipsam labore laborum nam
          necessitatibus officia provident qui quo, rem repudiandae sequi
          similique tempora vitae voluptatibus.
        </p>
      </div>
      <nav className="mb-3 border-b border-white pb-2">
        <Link
          to="/analytics/development"
          className="mx-2 text-md text-semibold"
        >
          Development
        </Link>
        <Link
          to="/analytics/cybersecurity"
          className="mx-2 text-md text-semibold"
        >
          CyberSecurity
        </Link>
        <Link to="/analytics/uiux" className="mx-2 text-md text-semibold">
          UI/UX
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
