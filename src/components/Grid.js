import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useNavigate } from "react-router-dom";
import { getCountryData } from "../data/apiCalls";

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
    sortable: false,
    filter: false,
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
    if (props.distance.length === 0) return;
    let distance = props.distance;

    // Remove Kms from distance string for API call
    if (distance.length === 7) {
      distance = distance.slice(0, 3);
    } else if (distance.length === 6) {
      distance = distance.slice(0, 2);
    } else if (distance.length === 5) {
      distance = distance.slice(0, 1);
    }

    getCountryData(props.country, distance).then((data) => setRowData(data));
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
        background-color={"#000000"}
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
