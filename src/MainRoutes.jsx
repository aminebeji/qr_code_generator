import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {["/home", "/"].map((path, index) => (
          <Route path={path} element={<Home />} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
