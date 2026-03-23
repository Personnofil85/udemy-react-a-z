import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      <p className="text-4xl font-semibold text-center pt-10">
        Error404 🤖{" "}
      </p>{" "}
        <div className="text-center">
            <Link to="/">Go Home</Link>
        </div>
    </div>
  );
}
