import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Roulette from "./pages/Roulette/Roulette";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Roulette />
    </BrowserRouter>
  </StrictMode>,
);
