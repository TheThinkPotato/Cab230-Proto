import React from "react";
import Header from "../components/Header";
import LogControl from "../components/LogControl";

export default function Login() {
  
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-window">
          <LogControl title={"Login"} text={"Log in as User or Guest."} type={"login"}/>
        </div>
      </div>
    </div>
  );
}
