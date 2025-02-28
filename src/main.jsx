import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import RandomizePink from "./randomizePink"
import RandomizeBlue from "./randomizeBlue"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RandomizePink />
    <RandomizeBlue />
  </StrictMode>
)
