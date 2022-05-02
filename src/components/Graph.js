import React, { useState, useEffect } from "react";
import {BarChart}  from "./BarChart.js";

const API_URL = "http://sefdb02.qut.edu.au:3001/volcano/";

export function Graph(props) {
  const [graphData, setGraphData] = useState([]);
  const token = localStorage.getItem("token");
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    fetch(API_URL + props.id, { headers })
      .then((res) => res.json())
      .then((data) => {                
        return {
          population_5km: data.population_5km,
          population_10km: data.population_10km,
          population_30km: data.population_30km,
          population_100km: data.population_100km,
        };
      })
      .then((data) => setGraphData(data));
  }, []);
  

  const data = {
    labels: ["100 Kms","30 Kms","10 Kms","5 Kms"],
    datasets: [
      {
        label: "Population",        
        data: [graphData.population_100km,graphData.population_30km,graphData.population_10km,graphData.population_5km],
        backgroundColor: [
          'rgba(255, 0, 0, .5)'],
          
      }
    ]
  };
  

  return (
    <div style={{backgroundColor:"rgba(255,255,255,1)", marginTop:"2rem", width:"850px"}}>
      <BarChart data={data} />
      {/* {graphData.population_100km} : {graphData.population_30km} :
      {graphData.population_10km} : {graphData.population_5km} */}
    </div>
  );
}

export default Graph;
