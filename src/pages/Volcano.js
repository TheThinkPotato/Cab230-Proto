import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";
import VolcanoInfo from "../components/VolcanoInfo";
import VolcanoMap from "../components/VolcanoMap";
import Header from "../components/Header";
import { Graph } from "../components/Graph";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function Volcanoes() {
  const [volcanoData, setVolcanoData] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-window" style={{ height: "fit-content" }}>
          <div className="volcano-window box-border">
            <div className="volcano-info box-border">
              <VolcanoInfo
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
            {!!localStorage.getItem("token") && <Graph id={id} />}
            <div className="button-area">
              <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={(props) => (
                  <Tooltip {...props}>Back to search.</Tooltip>
                )}
                placement="bottom"
              >
                <Button
                  color="info"
                  size="sm"
                  className="m-3"
                  onClick={() => navigate("/search")}
                >
                  Back
                </Button>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "2rem" }}></div>
    </div>
  );
}
