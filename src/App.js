import "./App.css";
import React, { useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Front from "./pages/Front";

function App() {
  return (
    <div className="APP space">
      <Front />
    </div>
  );
}

export default App;
