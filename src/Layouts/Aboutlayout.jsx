import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Aboutlayout = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-nav">
        <div className="structure-about"></div>
        <div className="about-links">
          <p>Personal Info</p>

          <div className="info-links">
            <button onClick={() => navigate("personal")}>Bio</button>
            <button onClick={() => navigate("interests")}>interests</button>
            <button onClick={() => navigate("education")}>Education</button>
          </div>

          <p>Contacts</p>
          <div className="contacts">
            <button>BarnabasJames@gmail.com</button>
            <button>+2349057912592</button>
          </div>
        </div>
      </div>

      <div className="others">
        <div className="view-nav">
          <Outlet />
        </div>
        <div className="code-snippets"></div>
      </div>
    </div>
  );
};

export default Aboutlayout;
