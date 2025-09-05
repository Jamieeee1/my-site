import React from "react";

const Project = ({ work, index }) => {
  return (
    <div style={{ maxWidth: "370px" }}>
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
        <div
          style={{
            padding: "0.8em",
            display: "flex",
            flexDirection: "column",
            gap: "0.3em",
          }}
        >
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
