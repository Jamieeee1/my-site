import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

// const spans = ["personal", "professional", "hobbies", "contacts"];

const Mobileabout = () => {
  const [isOpen, setisOpen] = useState({
    personal: false,
    professional: false,
    hobbies: false,
    contacts: false,
  });

  const toggle = (key) => {
    setisOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className="mobile-about-div">
      <span className="mobile-about-header">_about-me</span>

      <div className="mobile-about-minidivs">
        <span
          className="mobile-about-bottons"
          onClick={() => toggle("personal")}
        >
          {" "}
          {isOpen.personal ? <FaAngleDown /> : <FaAngleRight />} Personal-info
        </span>

        {isOpen.personal && (
          <div className="mobile-about-inner">
            <p>
              I am a Mechanical Engineering graduate from the University of
              Ilorin, Nigeria, with foundational training from Federal
              Polytechnic Bida, Niger State, where I earned my OND in Mechanical
              Engineering.
            </p>
            <p>
              My passion extends beyond traditional engineering into the digital
              realm, with keen interests in coding, web development, software
              development, and embedded systems. I'm fascinated by the
              intersection of mechanical and digital technologies, particularly
              in automotive applications.
            </p>
            <p>
              As an automotive enthusiast and devoted Formula 1 fan, I enjoy
              following the latest developments in racing technology and vehicle
              innovation. My faith as a follower of Jesus Christ is central to
              who I am, guiding my personal and professional endeavors.
            </p>
            <p>
              I'm driven by curiosity and a desire to create solutions that
              bridge mechanical engineering principles with modern software
              development, always seeking to learn and grow in both fields.
            </p>
          </div>
        )}
      </div>
      <div className="mobile-about-minidivs">
        <span
          className="mobile-about-bottons"
          onClick={() => toggle("professional")}
        >
          {" "}
          {isOpen.professional ? <FaAngleDown /> : <FaAngleRight />}{" "}
          Professional-info
        </span>

        {isOpen.professional && (
          <div className="mobile-about-inner">
            <p>
              As a recent graduate in Mechanical Engineering, I am actively
              building my professional foundation through hands on practice and
              continuous learning. Since July 2024, I have been dedicating
              myself to developing practical skills in both traditional
              engineering and modern technology applications.
            </p>
          </div>
        )}
      </div>
      <div className="mobile-about-minidivs">
        <span
          className="mobile-about-bottons"
          onClick={() => toggle("hobbies")}
        >
          {" "}
          {isOpen.hobbies ? <FaAngleDown /> : <FaAngleRight />} Hobbies
        </span>

        {isOpen.hobbies && (
          <div className="mobile-about-inner">
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8em",
                marginLeft: "1.3em",
              }}
            >
              <li> Coding </li>
              <li>Reading</li>
              <li>Gaming</li>
              <li>Watching sports</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobileabout;
