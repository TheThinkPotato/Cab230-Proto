import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useNavigate } from "react-router-dom";

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
const Grid = (props) => {
  const [rowData, setRowData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    let distance = props.distance;
  
    // Remove Kms from distance string for API call
    if (distance.length === 7) {
      distance = distance.slice(0, 3);
    } else if (distance.length === 6) {
      distance = distance.slice(0, 2);
    } else if (distance.length === 5) {
      distance = distance.slice(0, 1);
    }      
    
    fetch(
      `http://sefdb02.qut.edu.au:3001/volcanoes?country=${props.country}&populatedWithin=${distance}km`
    )
      .then((res) => res.json())
      .then((works) =>
        works.map((data) => {
          console.log(data);
          return dataObject(data);
        })
      )
      .then((data) => setRowData(data));
  }, [props]);

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
        background-color={'#000000'}
        columnDefs={table}
        rowData={rowData}        
        pagination={true}
        paginationPageSize={20}
        onRowClicked={(row) => navigate(`/volcanoe?id=${row.data.id}`)}
      />
    </div>
  );
};

export default Grid;
