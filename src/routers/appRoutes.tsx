import React from "react";
import Layout from "../layout/layout";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
