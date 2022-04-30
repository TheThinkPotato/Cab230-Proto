import React from "react";
import { Link } from "react-router-dom";

// navigation links
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/Log In">Log In</Link>
        </li>
        <li>
          <Link to="/LogOut">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}
