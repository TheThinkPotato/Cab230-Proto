import React from "react";
import Nav from "./Nav";

// the header
export default function Header() {
  return (
    <header>
      <div style={{ display: "flex" }}>
        <div className="icon">
          <a href="/">
            <img src="images/logo.png" alt="Logo" />
          </a>
        </div>

        <Nav />
      </div>
    </header>
  );
}
