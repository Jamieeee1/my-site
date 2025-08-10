import React, { useContext } from "react";
import { SiteContext } from "../App";
import { useNavigate } from "react-router";

const MobileNav = () => {
  const { navOpen, setNavOpen } = useContext(SiteContext);
  const navigate = useNavigate();
  const mobileNavigation = (place) => {
    navigate(place);
    setNavOpen((prev) => !prev);
  };
  return (
    <div className="inset-div" onClick={() => setNavOpen(false)}>
      <div className="mobile-nav-dropdown">
        <span onClick={() => mobileNavigation("/")}>_hello</span>
        <span onClick={() => mobileNavigation("/aboutme")}>_about-me</span>
        <span onClick={() => mobileNavigation("/projects")}>_projects</span>
        <span onClick={() => mobileNavigation("/contactme")}>_contact me</span>
      </div>
    </div>
  );
};

export default MobileNav;
