import "./App.css";
import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem , Button, Badge } from "reactstrap";
import { useNavigate } from "react-router-dom";

const table = [
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Country",
      field: "country",
    },
    {
      headerName: "Region",
      field: "region",
    },
    {
      headerName: "Subregion",
      field: "subregion",
    },
    {
      headerName: "Last Eruption",
      field: "last_eruption",
    },
    {
        headerName: "Summit",
        field: "summit",

      },
      {
        headerName: "Elevation",
        field: "elevation",

      },

  ];

export default function GetVolcanoeData(props) {
    const Grid = () => {
        const [rowData, setRowData] = useState([]);
        const navigate = useNavigate();
      
        useEffect(() => {
          fetch(
            `http://sefdb02.qut.edu.au:3001/volcano/${props.id}`
          )
            .then((res) => res.json())
            .then((works) =>
              works.map((data) => {
                console.log(data);
      
                return {
                  name: data.name,
                  country: data.country,
                  region: data.subregion,
                  id: data.id,
                };
              })
            )
            .then((data) => setRowData(data));
        }, []);
      
        return (
          <div className="container" style={{ margin: "auto", display: "flex" }}>
            <div
              style={{
                margin: "auto",
              }}
            >
              <h1>Volcanoes</h1>
              <p>
                <Badge color="success">{rowData.length}</Badge>
                <span> </span>items of data
              </p>
            </div>
            <div className="container" style={{ margin: "auto", display: "flex" }}>
              <div
                className="ag-theme-balham"
                style={{
                  margin: "auto",
                  height: "300px",
                  width: "900px",
                }}
              >
                <AgGridReact
                  columnDefs={table}
                  rowData={rowData}
                  pagination={true}
                  paginationPageSize={7}
                  onRowClicked={(row) => navigate(`/volcanoe?id=${row.data.id}`)}
                />
              </div>
            </div>
          </div>
        );
      };
    }