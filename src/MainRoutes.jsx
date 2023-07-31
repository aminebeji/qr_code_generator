import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        {["/home", "/"].map((path, index) => (
          <Route path={path} element={<Home />} key={index} />
        ))}
      </Routes>
    </Router>
  );
}

export default MainRoutes;
