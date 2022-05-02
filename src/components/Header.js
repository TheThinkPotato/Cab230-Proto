import React from "react";
import Nav from "./Nav";

// the header
export default function Header() {
  return (
    <header>
      <div style={{ display: "flex" }}>
        <div className="icon">
          <img src="images/logo.png" alt="Logo" />
        </div>

        <Nav />
      </div>
    </header>
  );
}
