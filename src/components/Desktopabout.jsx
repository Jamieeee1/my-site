import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Desktopabout = () => {
  const navigate = useNavigate();

  const [isdrop, setdrop] = useState(false);
  const [isdrop2, setdrop2] = useState(false);

  const dropDown = () => setdrop((prev) => (prev === true ? false : true));
  const dropDown2 = () => setdrop2((prev) => (prev === true ? false : true));
  return (
    <div className="about-main-div">
      <div className="about-nav">
        <button onClick={() => dropDown()}>Personal Info</button>
        <ul
          className="personal-li"
          style={{ display: isdrop ? "flex" : "none" }}
        >
          <li>
            <button onClick={() => navigate("personal")}>Bio</button>
          </li>
          <li>
            <button onClick={() => navigate("interests")}>interests</button>
          </li>
          <li>
            <button onClick={() => navigate("education")}>Education</button>
          </li>
        </ul>

        <button onClick={() => dropDown2()}>Contacts</button>
        <div
          className="about-contact"
          style={{ display: isdrop2 ? "flex" : "none" }}
        >
          <span>BarnabasJames@gmail.com</span>
          <span>+2349057912592</span>
        </div>
      </div>

      <div className="">
        <div className="view-nav">
          <Outlet />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Desktopabout;
