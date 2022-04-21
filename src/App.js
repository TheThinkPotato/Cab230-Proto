import "./App.css";
import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useNavigate } from "react-router-dom";
import DistanceSelect from "./components/DistanceSelect";
import CountrySelect from "./components/CountrySelect";


//Working object for return api data
function dataObject(data) {
  return {
    name: data.name,
    country: data.country,
    region: data.subregion,
    id: data.id,
  };
}

//Table template
const table = [
  {
    headerName: "Name",
    field: "name",
    sortable: true,
    filter: true,
  },
  {
    headerName: "Country",
    field: "country",
    sortable: true,
    filter: true,
  },
  {
    headerName: "Region",
    field: "region",
    sortable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "ID",
    field: "id",
    sortable: true,
    filter: "agNumberColumnFilter",
    width: 60,
  },
];

//Main grid of countries and volcanoes
const Grid = (rowData) => {
  const navigate = useNavigate();
  return (
    <div
      className="ag-theme-balham"
      style={{
        margin: "auto",
        height: "650px",
        width: "665px",
      }}
    >
      <AgGridReact
        columnDefs={table}
        rowData={rowData}
        pagination={true}
        paginationPageSize={20}
        onRowClicked={(row) => navigate(`/volcanoe?id=${row.data.id}`)}
      />
    </div>
  );
};

// Load data from API
const Load = (rowData, setRowData, distance, country) => {
  // Remove Kms from distance string for API call
  if (distance.length === 6) {
  distance = distance.slice(0, 2);
  }
  else if (distance.length === 5) {
    distance = distance.slice(0, 1);
  }
  else
  {distance = distance.slice(0, 3);}
  
  console.log(distance)
  useEffect(() => {
    fetch(
      `http://sefdb02.qut.edu.au:3001/volcanoes?country=${country}&populatedWithin=${distance}km`
    )
      .then((res) => res.json())
      .then((works) =>
        works.map((data) => {
          return dataObject(data);
        })
      )
      .then((data) => setRowData(data));
  }, [distance, setRowData, country, null]);
};


function App() { 
  const [distance, setDistance] = useState([]);
  const [country, setCountry] = useState("japan");
  const [rowData, setRowData] = useState([]);

  return (
    <div className="APP space">
      <div className="main-window">
        <div className="working-window box-border">
          <div className="control-outside">
            <div className="round-box box-border">
              <div className="control-box">
                <DistanceSelect setDistance={setDistance}/>
                
                {/* {DistanceSelect(dist, setDist, setDistance, country)} */}
                <div style={{height:"1rem"}}/>
                <CountrySelect country={country} setCountry={setCountry}/>
              </div>
            </div>
          </div>

          <div>
            {Load(rowData, setRowData, distance, country)}
            {Grid(rowData)}
          </div>
        </div>
        <div style={{ margin: "auto", display: "flex" }}>
          <div style={{ margin: "auto" }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
