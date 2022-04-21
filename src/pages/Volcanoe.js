import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";

const testData = {
  name: "Newer Volcanics Province",
  country: "Australia",
  region: "Melanesia and Australia",
  subregion: "Australia",
  last_eruption: "2900 BCE",
  summit: 1011,
  elevation: 3317,
  latitude: "-37.7700",
  longitude: "142.5000",
};

const Grid = (id) => {
  const [volcanoData, setVolcanoData] = useState([]);
  const navigate = useNavigate();

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
          <h1>{testData.name}</h1>
          <p>Country: {volcanoData.country}</p>
          <p>Region: {volcanoData.region}</p>
          <p>Subregion: {volcanoData.subregion}</p>
          <p>Last Eruption: {volcanoData.last_eruption}</p>
          <p>Elevation: {volcanoData.elevation}</p>
        </div>
      </div>
    </div>
  );
};

export default function Volcanoes() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="container">
      {Grid(id)}
      <Button
        color="info"
        size="sm"
        className="mt-3"
        onClick={() => navigate("/")}
      >
        Back
      </Button>
    </div>
  );
}
