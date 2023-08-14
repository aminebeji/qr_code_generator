import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {["/home", "/"].map((path, index) => (
          <Route path={path} element={<Home />} key={index} />
        ))}
        <Route path="/about-us" element={<AboutUs />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
