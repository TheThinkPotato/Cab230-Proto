import React, { useState, useEffect } from "react";
import { BarChart } from "./BarChart.js";
import { getRegisteredVolcanoData } from "../data/apiCalls.js";

export function Graph(props) {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    getRegisteredVolcanoData(props.id).then((data) => setGraphData(data));
  }, []);

  const data = {        
    labels: ["100 Kms", "30 Kms", "10 Kms", "5 Kms"],        
    datasets: [
      {
        label: "Population Density",      
        data: [
          graphData.population_100km,
          graphData.population_30km,
          graphData.population_10km,
          graphData.population_5km,
        ],
        backgroundColor: ["rgba(255, 0, 0, .5)"],
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,1)",
        marginTop: "2rem",
        width: "850px",
      }}
    >
      <BarChart data={data} />
      {/* {graphData.population_100km} : {graphData.population_30km} :
      {graphData.population_10km} : {graphData.population_5km} */}
    </div>
  );
}

export default Graph;
