import React, { useEffect } from "react";



// Gets API data for selected volcano
const DisplayInfo = (props) => {  
    useEffect(() => {
      fetch(`http://sefdb02.qut.edu.au:3001/volcano/${props.id}`)
        .then((res) => res.json())
        .then((data) => {        
          return {
            
            name: data.name,
            country: data.country,
            region: data.region,
            subregion: data.subregion,
            last_eruption: data.last_eruption,
            summit: data.summit,
            elevation: data.elevation,
            latitude: data.latitude,
            longitude: data.longitude,
          };
        })
  
        .then((data) => props.setVolcanoData(data));
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
              <span style={{ fontWeight: "bolder" }}>Country:</span>{" "}
              {props.country}
            </p>
            <p>Region: {props.volcanoData.region}</p>
            <p>Subregion: {props.volcanoData.subregion}</p>
            <p>Last Eruption: {props.volcanoData.last_eruption}</p>
            <p>Elevation: {props.volcanoData.elevation}</p>
          </div>
        </div>
      </div>
    );
  };

    export default DisplayInfo;