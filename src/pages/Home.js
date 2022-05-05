import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "../components/Header";

import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

// Pigeon maps component
const Home = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-window">
          <div>
            <div className="frontLogo" style={{ marginTop: "60px" }}>
              <img src="images/frontLogo.png" alt="Front Logo" />
              <h2> The Worlds Collection of Volcanoes.</h2>
            </div>
            {!isLoggedIn && (
              <div style={{ marginTop: "2rem" }}>
                <div className="front-page-box box-border">
                  <div className="button-area">
                    <div
                      className="button-area-text"
                      style={{ margin: "2rem", textAlign: "center" }}
                    >
                      <p style={{ marginBottom: "0px" }}>Login or Register</p>
                      <p style={{ fontSize: "15px", marginBottom: "0px" }}>
                        to see more
                      </p>
                      <div className="Button">
                        <OverlayTrigger
                          delay={{ hide: 450, show: 300 }}
                          overlay={(props) => (
                            <Tooltip {...props}>Login as user.</Tooltip>
                          )}
                          placement="bottom"
                        >
                          <Button
                            color="info"
                            size="sm"
                            className="mt-3"
                            onClick={() => navigate("/LogIn")}
                          >
                            Log In
                          </Button>
                        </OverlayTrigger>
                      </div>
                      <div className="Button">
                        <OverlayTrigger
                          delay={{ hide: 450, show: 300 }}
                          overlay={(props) => (
                            <Tooltip {...props}>Register a new account.</Tooltip>
                          )}
                          placement="bottom"
                        >
                          <Button
                            color="info"
                            size="sm"
                            className="mt-3"
                            onClick={() => {
                              localStorage.setItem("token", ""); //Clear token
                              navigate("/Register");
                            }}
                          >
                            Register
                          </Button>
                        </OverlayTrigger>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
