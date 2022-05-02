import React, { useEffect } from "react";
import { getVolcanoeData } from "../data/apiCalls";

// Gets API data for selected volcano
const DisplayInfo = (props) => {
  useEffect(() => {
    getVolcanoeData(props.id).then((data) => props.setVolcanoData(data));
  }, []);

  return (
    <div className="container" style={{ margin: "auto", display: "flex" }}>
      <div
        style={{
          margin: "auto",
        }}
      ></div>
      <div className="container" style={{ margin: "auto", display: "flex" }}>
        <div
          className="ag-theme-balham"
          style={{
            margin: "auto",
            height: "300px",
            width: "900px",
          }}
        >
          <h1>{props.volcanoData.name}</h1>
          <p>
            <span style={{ fontWeight: "bolder" }}>Country: </span>
            {props.volcanoData.country}
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Region: </span>
            {props.volcanoData.region}
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Subregion: </span>
            {props.volcanoData.subregion}
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Last Eruption: </span>
            {props.volcanoData.last_eruption}
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Elevation: </span>
            {props.volcanoData.elevation + " feet"}
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Summit: </span>
            {props.volcanoData.summit + " meters"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayInfo;
