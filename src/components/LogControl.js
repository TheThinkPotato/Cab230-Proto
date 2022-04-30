import React, { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const API_URL = "http://sefdb02.qut.edu.au:3001";


function login(email,password) {
    const url = `${API_URL}/user/login`;

    return fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email , password}),
    })
      .then((res) => res.json())      
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);        
        //get_data();
        //console.log(localStorage.getItem("token"));
      });
  }



const LogControl = () => {  
    

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
//   const auth_token = localStorage.getItem("token");
//   const token = localStorage.getItem("token");

//   const navigate = useNavigate();
  return (
    <div className="log-box" style={{ marginTop: "180px" }}>
      <div style={{ marginTop: "2rem" }}>
        <div className="front-page-box box-border">
          <div className="button-area">
            <div className="button-area-text">
              <h3>Login</h3>
              <p>Log as User or regester as new user.</p>
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
                  onChange={(e) => setPassword(e.target.value)}
                />                
              </div>
              <div className="Button">
                <Button
                  color="info"
                  size="sm"
                  className="mt-3"                
                onClick={() => login(email,password)}
                >
                  Log In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogControl;
