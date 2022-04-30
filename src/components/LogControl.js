import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import MessageBox from "./MessageBox";
import userEvent from "@testing-library/user-event";

const API_URL = "http://sefdb02.qut.edu.au:3001";

const LogControl = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  // let errorMessage = "";
  let error = false;

  function login(email, password) {
    const url = `${API_URL}/user/login`;
    localStorage.setItem("token", ""); //Clear token

    return fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          //console.log(res.message);
          setMessage(res.message)  ;          
          // errorMessage = res.message;
          error = true;
        } else {
          localStorage.setItem("token", res.token);
          error = false;
          navigate("/search");
        }
      });
  }

useEffect(() => {
  //rerender
}, [message]);

  return (
    <div className="log-box" style={{ marginTop: "180px" }}>
      <div style={{ marginTop: "2rem" }}>
        <div className="front-page-box box-border">
          <div className="button-area">
            <div className="button-area-text">
              <h3>Login</h3>
              <p>Log in as User or regester as new user.</p>
              <div className="log-text-box">
                <p>Email:</p>
                <input
                  type={"text"}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="log-text-box">
                <p>Password:</p>
                <input
                  type={"password"}
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)     
                    setMessage()}}
                />
              </div>
              <div className="Button">
                <Button
                  color="info"
                  size="sm"
                  className="mt-3"
                  onClick={() => {
                    login(email, password)
                  }}
                >
                  Log In
                </Button>
                {!!message && (<div> {message}  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogControl;
