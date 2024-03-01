import React from "react";
import './layout.scss'
import NavBar from "../components/navBar/navBar";
import { Outlet } from "react-router-dom";

function layout() {
  return(
  <div className="layoutContainer">
    <div><NavBar/></div>
    <div><Outlet/></div>
  </div>);
}

export default layout;
