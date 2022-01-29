import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const globalMemory = useSelector(state => state);
  const logout = () => {}
  function tabClick(id) {
    let tabs = document.getElementsByClassName('side-nav-tab');
    for (let index = 0; index < tabs.length; index++) {
      tabs[index].classList.remove('side-nav-tab-active');
    }
    let active_tab = document.getElementById(id)
    active_tab.classList.add('side-nav-tab-active')
  }
  return showNavbar();
  function showNavbar() {
    return (
      <div className="container-fluid">
        <div className="row flex-nowrap">

          <div className="
            col-auto 
            col-md-3 
            col-xl-2 
            px-sm-2 
            px-0 
            bg-dark">
            <div className="
              flex-column 
              align-items-center 
              align-items-sm-start 
              px-3 
              pt-2 
              text-white 
              min-vh-100">

              <a href="/" className="
                d-flex 
                flex-column 
                align-items-center 
                align-items-sm-start 
                pb-3 
                mb-md-0 
                me-md-auto 
                text-white 
                text-decoration-none">
                <div className="fs-5 d-inline d-sm-none">JBS</div>
                <span className="fs-5 d-none d-sm-inline">John Bot Dash</span>
              </a>

              <hr />

              <div className="
                d-flex flex-column 
                align-items-center 
                align-items-sm-start">
                <div id="Home" className="
                  w-100 
                  d-flex 
                  side-nav-tab 
                  align-items-center 
                  justify-content-center 
                  justify-content-sm-start">
                  <i className="fs-4 bi-house"></i><Link to="/home" className="text-decoration-none text-white" onClick={() => tabClick('Home')}><span className="ms-2 d-none d-sm-inline">Home</span></Link>
                </div>
                <div id="DashBoard" className="
                  w-100 
                  d-flex 
                  side-nav-tab 
                  align-items-center 
                  justify-content-center 
                  justify-content-sm-start" data-bs-toggle="collapse" data-bs-target="#dashBoardSubMenu">
                  <i className="fs-4 bi-speedometer2"></i> <span className="ms-2 d-none d-sm-inline pointer">DashBoard</span>
                </div>
                <div id="dashBoardSubMenu" className="collapse">
                  <div id="Servers" className="row-12 d-none d-sm-flex side-nav-tab pointer" onClick={() => tabClick('Servers')}><Link to="/servers" className="text-decoration-none text-white" >Server List</Link></div>
                  <div id="Options" className="row-12 d-none d-sm-flex side-nav-tab pointer" onClick={() => tabClick('Options')}>Options</div>
                </div>
              </div>
              <hr />
              <div className="
                  w-100 
                  d-flex 
                  side-nav-tab 
                  align-items-center 
                  justify-content-center 
                  pointer
                  justify-content-sm-start" href="#accountSubMneu" data-bs-toggle="collapse">
                <i className="fs-4 bi-person"></i> <span className="ms-2 d-none d-sm-inline">Admin</span>
              </div>
              <div className="collapse" id="accountSubMneu">
                <div className="row-12 d-none d-sm-flex side-nav-tab pointer">Account</div>
                <div className="row-12 d-none d-sm-flex side-nav-tab pointer" onClick={() => logout()}>Log Out</div>
              </div>
            </div>
          </div>
          <div className="col py-3">
            {props.children}
          </div>
        </div>
      </div>)
  }
};
export default NavBar;
