import React from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <IconContext.Provider value={{ size: 18 }}>
      <div className="footer-div">
        <div className="footer-div-1">
          <span>Find me in: </span>
          <Link target="_blank" to="https://x.com/Meet_JamesB">
            <span>
              <FaXTwitter />
            </span>
          </Link>
          <Link target="_blank" to="https://www.linkedin.com/in/barnabas-james">
            <span>
              <SlSocialLinkedin />
            </span>
          </Link>
        </div>
        <div className="footer-div-2">
          <Link target="_blank" to="https://github.com/Jamieeee1">
            <span className="footer-div-2-main">
              @Jamieeee1 <FaGithub />
            </span>
          </Link>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
