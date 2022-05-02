import React, { useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import DistanceSelect from "../components/DistanceSelect";
import CountrySelect from "../components/CountrySelect";
import Grid from "../components/Grid";
import Header from "../components/Header";

function Search() {
  const [distance, setDistance] = useState([]);
  const [country, setCountry] = useState(["Algeria"]);
  return (
    <div>
      
      <Header />
      <div className="main-window">
        <div className="working-window box-border">
          <div className="control-outside">
            <div className="round-box box-border">
              <div className="control-box">
                <div style={{ marginBottom: ".8rem" }}>
                  <CountrySelect
                    country={country}
                    setCountry={setCountry}
                    style={{ paddingBottom: "200px" }}
                  />
                </div>
                <DistanceSelect setDistance={setDistance} />
              </div>
            </div>
          </div>

          <div>
            <Grid distance={distance} country={country} />
          </div>
        </div>
        <div style={{ margin: "auto", display: "flex" }}>
          <div style={{ margin: "auto" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Search;
