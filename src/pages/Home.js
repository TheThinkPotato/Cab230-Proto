import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "../components/Header";

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
                    <p style={{marginBottom:"0px"}}>Login or Register</p>
                    <p style={{fontSize:"15px",marginBottom:"0px"}}>to see more</p>
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
                          navigate("/Register");
                        }}
                      >
                        Register
                      </Button>
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
