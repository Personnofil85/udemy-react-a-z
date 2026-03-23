import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const getClassNameLink = (active) =>
    `${active && "text-blue-500 underline"} mx-2 text-md text-semibold`;

  return (
    <nav className="p-2 text-center bg-slate-200 shadow-md shadow-slate-500 relative z-40">
      <NavLink
        to="/"
        className={({isActive}) => getClassNameLink(isActive)}
      >
        Home
      </NavLink>
        <NavLink
            to="/analytics"
            className={({isActive}) => getClassNameLink(isActive)}
        >
            Analytics
        </NavLink>
      <NavLink
        state={{ txt: "Hello from state" }}
        to="/contact"
        className={({isActive}) => getClassNameLink(isActive)}
      >
        Contact
      </NavLink>
    </nav>
  );
}
