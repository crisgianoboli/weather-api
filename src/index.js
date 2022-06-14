import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
// mejorar el alert
alert("Recuerde habilitar la ubicacion de su dispositivo");
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
