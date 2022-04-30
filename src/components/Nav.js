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
          <Link to="/Search">Search</Link>
        </li>
        <li>
          <Link to="/LogIn">Log In</Link>
        </li>
        <li>
          <Link to="/LogOut">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}
