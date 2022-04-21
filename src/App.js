import "./App.css";

import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Badge } from "reactstrap";
import { useNavigate } from "react-router-dom";

const distanceSelect = (dist, setDist, setDistance) => {
  const Add = dist.map((Add) => Add);
  const handleAddrTypeChange = (e) => {
    setDistance(dist[e.target.value]);
  };

  return (
    <div>
      <h4>Select Distance</h4>
      <select
        onChange={(e) => handleAddrTypeChange(e)}
        className="browser-default custom-select"
      >
        {Add.map((address, key) => (
          <option key={key} value={key}>
            {address}
          </option>
        ))}
      </select>
    </div>
  );
};

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
  // {
  //   headerName: "Subregion",
  //   field: "subregion",
  //   sortable: true,
  //   filter: "agTextColumnFilter",
  // },
  {
    headerName: "ID",
    field: "id",
    sortable: true,
    filter: "agNumberColumnFilter",
    width: 60,
  },
];

const Grid = (rowData) => {
  const navigate = useNavigate();
  return (
    <div
      className="ag-theme-balham"
      style={{
        margin: "auto",
        height: "650px",
        // width: "865px",
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

const Counter = (rowData) => {
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
      <div
        className="container"
        style={{ margin: "auto", display: "flex" }}
      ></div>
    </div>
  );
};

const Load = (rowData, setRowData, distance, country) => {
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

const CountrySelect = (country, setCountry) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch(`http://sefdb02.qut.edu.au:3001/countries`)
      .then((res) => res.json())
      .then((works) => setCountryList(works));
  }, []);

  const Add = countryList.map((Add) => Add);
  const handleAddrTypeChange = (e) => {
    setCountry(countryList[e.target.value]);
  };
  return (
    <div>
      <h4>Select Country</h4>
      <select
        onChange={(e) => handleAddrTypeChange(e)}
        className="browser-default custom-select"
      >
        {Add.map((address, key) => (
          <option key={key} value={key}>
            {address}
          </option>
        ))}
      </select>
    </div>
  );
};

function App() {
  const [dist, setDist] = useState([100, 30, 10, 5]);
  const [distance, setDistance] = useState([dist[0]]);

  const [country, setCountry] = useState("japan");
  const [rowData, setRowData] = useState([]);

  return (
    <div className="APP space">
      <div className="main-window">
        <div className="working-window box-border">
          <div className="control-outside">
            <div className="round-box box-border">
              <div className="control-box">
                {distanceSelect(dist, setDist, setDistance, country)}
                {CountrySelect(country, setCountry)}
                {/* {Counter()} */}
              </div>
            </div>
          </div>

          <div
            className=""
            style={{ border: "4px border black", maxWidth: "900px" }}
          >
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
