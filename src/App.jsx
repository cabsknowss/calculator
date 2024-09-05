import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar";
import Home from "./content/Home";
import NumCalcu from "./content/NumCalcu";
import BmiCalcu from "./content/BmiCalcu";
import TdeeCalcu from "./content/TdeeCalcu";
import PesoCalcu from "./content/PesoCalcu";

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/numcalcu" element={<NumCalcu />}>
              {/* <NumCalcu /> */}
            </Route>
            <Route path="/bmicalcu" element={<BmiCalcu />}>
              {/* <BmiCalcu /> */}
            </Route>
            <Route path="/tdeecalcu" element={<TdeeCalcu />}>
              {/* <TdeeCalcu /> */}
            </Route>
            <Route path="/pesocalcu" element={<PesoCalcu />}>
              {/* <PesoCalcu /> */}
            </Route>
            <Route path="/" element={<Home />}>
              {/* <Home /> */}
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
