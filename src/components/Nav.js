import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// navigation links
export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logOut() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);
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
          <Link to="/register">Register</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Link to="/LogIn" onClick={() => logOut()}>
              Log Out
            </Link>
          ) : (
            <Link to="/LogIn">Log In</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
