import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import PinkHeatmap from "./pinkHeatmap"
import BlueHeatmap from "./blueHeatmap"
// import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PinkHeatmap />
    <BlueHeatmap />
  </StrictMode>
)
