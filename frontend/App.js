import "regenerator-runtime/runtime";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import MenuNav from "./components/MenuNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewVote from "./pages/NewVote";
import PollingStation from "./pages/PollingStation";

export default function App() {
  return (
    <>
      <MenuNav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-vote" element={<NewVote />} />
          <Route path="/polling-station" element={<PollingStation />} />
        </Routes>
      </Router>
    </>
  );
}
