import SideNavBar from "../SideNavBar/NavBar";
import TopNavBar from "../TopNavBar/NavBar";
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";
const Layout = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
  });
  if (innerWidth >= 1080) return mdLayout();
  else return smLayout();
};

function mdLayout() {
  return (
    <div className="main-container">
      <div className="main-container-row h-100">
        <div className="side-nav-bar-column">
          <SideNavBar />
        </div>
        <div className="content-column">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function smLayout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
export { Layout };