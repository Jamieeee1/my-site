import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import Personal from "../pages/Aboutpages/Personal";
import Interests from "../pages/Aboutpages/Interests";
import Education from "../pages/Aboutpages/Education";

const Desktopabout = () => {
  const [page, setPage] = useState("personal");

  return (
    <>
      <div className="about-main-div">
        <div className="about-side-panel">
          <span
            className="about-side-title"
            style={{ cursor: "pointer", color: "#f8fafc" }}
          >
            <span className="about-side-icons">
              <FaArrowDown />
            </span>
            personal-info
          </span>
          <ul className="personal-li">
            <li onClick={() => setPage("personal")}>
              <span className="about-side-icons"></span>
              Bio
            </li>
            <li onClick={() => setPage("interests")}>
              <span className="about-side-icons"></span>
              interests
            </li>
            <li onClick={() => setPage("education")}>
              <span className="about-side-icons"></span>
              Education
            </li>
          </ul>

          <span
            style={{
              color: "#f8fafc",
              cursor: "pointer",
            }}
            className="about-side-title side-contacts"
          >
            contacts
          </span>
          <div className="about-contact">
            <span>BarnabasJames@gmail.com</span>
            <span>+2349057912592</span>
          </div>
        </div>
        <div>
          <div></div>
          <div>
            <div className="about-outlet">
              {page === "personal" ? (
                <Personal />
              ) : page === "interests" ? (
                <Interests />
              ) : page === "education" ? (
                <Education />
              ) : null}
            </div>
            <div className="about-code-snippet"> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktopabout;
