import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import Personal from "../pages/Aboutpages/Personal";
import Interests from "../pages/Aboutpages/Interests";
import Education from "../pages/Aboutpages/Education";
import DeskaboutCode from "./DeskaboutCode";
import CodeDisplay from "./Codedisplay";

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
            <span className="about-side-icons"></span>
            personal-info
          </span>
          <ul className="personal-li">
            <li
              onClick={() => setPage("personal")}
              style={{ color: page === "personal" && "#f8fafc" }}
            >
              <span className="about-side-icons"></span>
              Bio
            </li>
            <li
              onClick={() => setPage("interests")}
              style={{ color: page === "interests" && "#f8fafc" }}
            >
              <span className="about-side-icons"></span>
              interests
            </li>
            <li
              onClick={() => setPage("education")}
              style={{ color: page === "education" && "#f8fafc" }}
            >
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
        <div className="about-side-container">
          <div className="about-pages-title-div">
            <span className="about-pages-title">
              {" "}
              {page === "personal"
                ? "_personal"
                : page === "interests"
                ? "_interests"
                : page === "education"
                ? "_education"
                : null}{" "}
            </span>
          </div>
          <div className="about-side-inner-container">
            <div className="about-outlet">
              {page === "personal" ? (
                <Personal />
              ) : page === "interests" ? (
                <Interests />
              ) : page === "education" ? (
                <Education />
              ) : null}
            </div>
            <div className="about-code-snippet">
              <div className="about-code-containner">{<DeskaboutCode />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktopabout;
