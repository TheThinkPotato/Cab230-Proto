import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Volcano from "./pages/Volcano";
import Front from "./pages/Front";
import Search from "./pages/Search";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/volcanoe" element={<Volcano />} />
        <Route path="/" element={<Front />} />
        <Route path="/front" element={<Front />} />
        <Route path="/search" element={<Search />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
