import React from "react";
import Header from "../components/Header";
import LogControl from "../components/LogControl";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-window">
          <LogControl
            title={"Register"}
            text={"Please enter email and password."}
            type={"register"}
          />
        </div>
      </div>
    </div>
  );
}
