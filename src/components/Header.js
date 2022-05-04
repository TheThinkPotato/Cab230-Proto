import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

// the header
export default function Header() {
  return (
    <header>
      <div style={{ display: "flex" }}>
        <div className="icon">
          <Link to="/">
            <img src="images/logo.png" alt="Logo" />
          </Link>
        </div>

        <Nav />
      </div>
    </header>
  );
}
