import React from "react";
import { Link } from "react-router";
import codeSnippet from "../assets/code-snippet.png";

const Homepage = () => {
  return (
    <div className="home-page-div">
      <div className="home-div-1">
        <div className="home-div-1-1">
          <p>Hello Reader, I am</p>
          <h1>BARNABAS JAMES O</h1>
          <h3> {">"} Frontend Developer</h3>
        </div>
        <div className="home-div-1-2">
          <p>// find my profile on Github:</p>
          <p>
            <span className="const"> Const </span>{" "}
            <span className="git"> githubink </span> ={" "}
            <Link className="gitlink" to="https://github.com/Jamieeee1">
              "https://github.com/Jamieeee1"
            </Link>
          </p>
        </div>
      </div>
      <div className="home-div-2">
        <div className="home-div-img">
          <img src={codeSnippet} alt="" />
        </div>
        <div className="home-div-img">
          <img src={codeSnippet} alt="" />
        </div>
        <div className="home-div-img">
          <img src={codeSnippet} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
