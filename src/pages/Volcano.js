import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";
import { Map, Marker, ZoomControl } from "pigeon-maps";

const DisplayInfo = (id, volcanoData, setVolcanoData) => {
  useEffect(() => {
    // console.log(`http://sefdb02.qut.edu.au:3001/volcano/${id}`);
    fetch(`http://sefdb02.qut.edu.au:3001/volcano/${id}`)
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

      .then((data) => setVolcanoData(data));
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
          <h1>{volcanoData.name}</h1>
          <p><span style={{fontWeight:"bolder"}} >Country:</span> {volcanoData.country}</p>
          <p>Region: {volcanoData.region}</p>
          <p>Subregion: {volcanoData.subregion}</p>
          <p>Last Eruption: {volcanoData.last_eruption}</p>
          <p>Elevation: {volcanoData.elevation}</p>
        </div>
      </div>
    </div>
  );
};

const volvanoMap = (lat, long) => {
  long = parseFloat(long); // Marker will not take direct value from longitude

  return (
    <Map
      height={500}
      width={850}
      defaultCenter={[0, 0]}
      defaultZoom={8}
      center={[lat, long]}
    >
      {console.log(long)}
      <Marker width={40} anchor={[lat, long]} />
      <ZoomControl />
    </Map>
  );
};

export default function Volcanoes() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [volcanoData, setVolcanoData] = useState([]);

  return (
    <div className="container">
      <div className="main-window">
        <div className="volcano-window box-border">
          <div className="volcano-info box-border">
            {DisplayInfo(id, volcanoData, setVolcanoData)}
          </div>
          <div>{volvanoMap(volcanoData.latitude, volcanoData.longitude)}</div>
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
  );
}
