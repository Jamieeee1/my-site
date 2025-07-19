import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Aboutme = () => {
  return (
    <div className="about-container">
      <div className="about-nav">
        <div className="structure-about"></div>
        <div className="about-links">
          <p>Personal Info</p>

          <div className="info-links">
            <NavLink href="">Bio</NavLink>
            <NavLink href="">interests</NavLink>
            <NavLink href="">Education</NavLink>
          </div>

          <p>Contacts</p>
          <div className="contacts">
            <NavLink href="">BarnabasJames@gmail.com</NavLink>
            <NavLink href="">+2349057912592</NavLink>
          </div>
        </div>
      </div>

      <div className="others">
        <div className="view-nav"></div>
        <div className="code-snippets"></div>
      </div>
    </div>
  );
};

export default Aboutme;
