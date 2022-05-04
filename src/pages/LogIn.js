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
            title={"Login"}
            text={"Log in as User or Guest."}
            type={"login"}
          />
        </div>
      </div>
    </div>
  );
}
