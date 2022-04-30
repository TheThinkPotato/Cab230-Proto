import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Volcano from "./pages/Volcano";
import Front from "./pages/Front";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/volcanoe" element={<Volcano />} />
        <Route path="/" element={<App />} />
        <Route path="/front" element={<Front />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
