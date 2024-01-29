import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/home.tsx";

import "./styles/variables.module.css";
import "./styles/global.module.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
);