import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";
import DisplayInfo from "../components/DisplayInfo";
import VolcanoMap from "../components/VolcanoMap";
import Header from "../components/Header";

export default function Volcanoes() {
  const [volcanoData, setVolcanoData] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-window">
          <div className="volcano-window box-border">
            <div className="volcano-info box-border">
              <DisplayInfo
                id={id}
                volcanoData={volcanoData}
                setVolcanoData={setVolcanoData}
              />
            </div>
            <div>
              <VolcanoMap
                lat={volcanoData.latitude}
                long={volcanoData.longitude}
              />
            </div>
            <div className="button-area">
              <Button
                color="info"
                size="sm"
                className="mt-3"
                onClick={() => navigate("/")}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
