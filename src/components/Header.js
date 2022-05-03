import React from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

// the header
export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div style={{ display: "flex" }}>
        <div className="icon">          
          <img src="images/logo.png" alt="Logo"  onClick={()=> navigate("/") }/>          
        </div>

        <Nav />
      </div>
    </header>
  );
}
