import React from "react";

const Project = ({ work, index }) => {
  return (
    <div>
      <span> Project {index + 1} </span>
      <div className="project-div">
        <div className="project-div-picture">
          <img
            src={work.imageLink}
            alt={`${work.name}-site-thumbnail`}
            className="project-image"
          />
        </div>
        <div></div>
        <p> {work.name} </p>
      </div>
    </div>
  );
};

export default Project;
