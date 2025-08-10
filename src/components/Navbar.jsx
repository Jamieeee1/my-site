import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { SiteContext } from "../App";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "active-menu" : "inactive-menu";

  const { navOpen, setNavOpen } = useContext(SiteContext);

  return (
    <div className="nav-div">
      <div className="owner-name">
        <span>Barnabas James</span>
      </div>

      <div className="mobile-nav">
        <button onClick={() => setNavOpen((prev) => !prev)}>
          {" "}
          {navOpen ? <FaWindowClose /> : <FaBars />}{" "}
        </button>
      </div>

      <div className="menu-container">
        <NavLink to="/" className={linkClass}>
          <span>_hello</span>
        </NavLink>
        <NavLink to="/aboutme" className={linkClass}>
          <span>_about-me</span>
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          <span>_projects</span>
        </NavLink>
      </div>
      <div className="contact-div">
        <NavLink to="/contactme" className={linkClass}>
          <span>_contact me</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
