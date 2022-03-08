import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { App } from "./App.js";
import { Navbar } from "./components/Navbar.js";
import { ProcessScreen } from "./components/ProcessScreen.js";
import { RamScreen } from "./components/RamScreen.js";
import "./index.css";

render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ramscreen" element={<RamScreen />} />
      <Route path="/processscreen" element={<ProcessScreen />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);