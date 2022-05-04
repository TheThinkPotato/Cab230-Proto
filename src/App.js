import "./App.css";
import React, { useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Home from "./pages/Front";

function App() {
  return (
    <div className="APP space">
      <Home />
    </div>
  );
}

export default App;
