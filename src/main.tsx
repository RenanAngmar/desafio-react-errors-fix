import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./global.css";

import React from "react"; // <-- Importar React se for usar StrictMode

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
