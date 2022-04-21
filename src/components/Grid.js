import "../App.css";
import React, { useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Badge } from "reactstrap";
import { useNavigate } from "react-router-dom";

function dataObject(data) {
  return {
    name: data.name,
    country: data.country,
    region: data.subregion,
    id: data.id,
  };
}

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
    headerName: "Subregion",
    field: "subregion",
    sortable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "ID",
    field: "id",
    sortable: true,
    filter: "agNumberColumnFilter",
  },
];

export default function Grid(rowData, setRowData, distance, country) {
//   if (
//     distance !== 5 ||
//     distance !== 10 ||
//     distance !== 30 ||
//     distance !== 100
//   ) {
//     distance = 5;
//   }
  const navigate = useNavigate();

  useEffect(() => {
    console.log(distance);
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
  }, [distance, setRowData]);

  useEffect(() => {
    console.log(distance);
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
  }, []);

  return (
    <div className="container" style={{ margin: "auto", display: "flex" }}>
      <div
        style={{
          margin: "auto",
        }}
      >
        <h1>Volcanos</h1>
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
