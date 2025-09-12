import React from "react";

const education = `Federal Government College Minna 
Federal Polytechnic Bida, Niger State (OND) - Mechanical Enginnering
University of Ilorin - Mechanical Engineering`;

const Education = () => {
  return (
    <div>
      <ul
        style={{
          marginLeft: "0.5em",
          padding: "0.5em",
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <li>
          <p>Federal Government College, Minna Niger State.</p>
          <span style={{ color: "#00d5be" }}>
            Secondary school / High School
          </span>
        </li>
        <li>
          <p>Federal Polytechnic Bida, Niger State.</p>
          <span style={{ color: "#00d5be" }}>
            Ordinary National Diploma (Mechanical Engineering)
          </span>
        </li>
        <li>
          <p>University of Ilorin</p>
          <span style={{ color: "#00d5be" }}>Mechanical Engineering (Bsc)</span>
        </li>
      </ul>
    </div>
  );
};

export default Education;
