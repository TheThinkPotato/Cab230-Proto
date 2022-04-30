import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";
import DisplayInfo from "../components/DisplayInfo";
import VolcanoMap from "../components/VolcanoMap";
import Header from "../components/Header";

// Pigeon maps component
const Front = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-window">
          <div className="frontLogo" style={{marginTop:"120px"}}>
            <img src="images/frontLogo.png" alt="Front Logo" />
            <h2> The Worlds Collection of Volcanoes.</h2>
          </div>

          <Button
            color="info"
            size="sm"
            className="mt-3"
            onClick={() => navigate("/LogIn")}
          >
            Log In
          </Button>
          <Button
            color="info"
            size="sm"
            className="mt-3"
            onClick={() => navigate("/")}
          >
            Guest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Front;
