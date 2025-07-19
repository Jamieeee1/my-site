import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "menu-item-active" : "menu-item";

  return (
    <>
      <div className="owner-name">
        <span>Barnabas James</span>
      </div>

      <div className="menu-container">
        <NavLink to="/" className={linkClass}>
          _hello
        </NavLink>
        <NavLink to="/aboutme" className={linkClass}>
          _about-me
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          _projects
        </NavLink>
      </div>
      <NavLink to="/contactme" className={linkClass}>
        _contact me
      </NavLink>
    </>
  );
};

export default Navbar;
