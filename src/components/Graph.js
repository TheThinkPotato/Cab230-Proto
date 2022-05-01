import React, { useState, useEffect } from "react";
import RC2 from 'react-chartjs2';


const API_URL = "http://sefdb02.qut.edu.au:3001/volcano/";



export function Graph(props) {
  const [graphData, setGraphData] = useState([]);
  const token = localStorage.getItem("token");
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
//   this.myChart = this.refs['canvas'].getChart();
//   this.myChart.data.datasets[0].points[2] = 50;
//   this.myChart.update();

  
  useEffect(() => {
    fetch(API_URL + props.id, { headers })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // return { population_100km: data.population_100km };
        return {
          population_5km: data.population_5km,
          population_10km: data.population_10km,
          population_30km: data.population_30km,
          population_100km: data.population_100km,
        };
      })
      .then((data) => setGraphData(data));
  }, []);



  
  return (
    <div>
        {/* return <RC2 ref='canvas' data={chartData} options={chartOptions} type='bar' />; */}
      :{graphData.population_100km}:{graphData.population_30km}:
      {graphData.population_10km}:{graphData.population_5km}
    </div>
  );
}
