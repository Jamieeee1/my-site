import React from "react";

const Project = ({ work, index }) => {
  return (
    <div className="pry-project-div">
      <p style={{ marginBottom: "1rem" }}>
        <span className="project-num"> Project {index + 1} </span>{" "}
        <span> {`// _${work.name}`} </span>
      </p>
      <div className="project-div">
        <div className="project-div-picture">
          <img
            src={work.imageLink}
            alt={`${work.name}-site-thumbnail`}
            className="project-image"
          />
        </div>
        <div className="project-content">
          <p> {work.description} </p>
          <div className="link-button-holder">
            <a href={work.liveSite} target="_blank" className="link-button">
              view-project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
