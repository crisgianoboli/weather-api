import React from "react";
import Swal from "sweetalert2";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
Swal.fire({
  icon: "info",
  title: "Preste atención",
  text: "Recuerde habilitar la ubicacion de su dispositivo",
});
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
