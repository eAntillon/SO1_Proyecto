import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { App } from "./App.js";
import { Navbar } from "./components/models/Navbar.js";
import { ApiReports } from "./components/Screens/ApiReports.js";
import { ProcessScreen } from "./components/Screens/ProcessScreen.js";
import { RamScreen } from "./components/Screens/RamScreen.js";
import "./index.css";

render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ramscreen" element={<RamScreen />} />
      <Route path="/processscreen" element={<ProcessScreen />} />
      <Route path="/apireports" element={<ApiReports />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);