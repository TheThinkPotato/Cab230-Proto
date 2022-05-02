import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "../components/Header";

// Pigeon maps component
const Front = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("dan@d.co");
  const [password, setPassword] = useState("dan");
  const auth_token = localStorage.getItem("token");
  const token = localStorage.getItem("token");

  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-window">
          <div>
            <div className="frontLogo" style={{ marginTop: "120px" }}>
              <img src="images/frontLogo.png" alt="Front Logo" />
              <h2> The Worlds Collection of Volcanoes.</h2>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <div className="front-page-box box-border">
                <div className="button-area">
                  <div className="button-area-text" style={{margin:"2rem", textAlign:"center"}}>
                    <p>Login as User or Guest</p>
                    <div className="Button">
                      <Button
                        color="info"
                        size="sm"
                        className="mt-3"
                        onClick={() => navigate("/LogIn")}
                      >
                        Log In
                      </Button>
                    </div>
                    <div className="Button">
                      <Button
                        color="info"
                        size="sm"
                        className="mt-3"
                        onClick={() => {
                          localStorage.setItem("token", ""); //Clear token
                          navigate("/Search")}}
                      >
                        Guest
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
