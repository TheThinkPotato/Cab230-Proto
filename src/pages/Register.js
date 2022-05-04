import React from "react";
import Header from "../components/Header";
import UserContol from "../components/UserControl";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-window">
          <UserContol
            title={"Register"}
            text={"Please enter email and password."}
            type={"register"}
          />
        </div>
      </div>
    </div>
  );
}
