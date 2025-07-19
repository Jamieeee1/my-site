import React from "react";
import {} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <>
      <div>
        <span>Find me in: </span>
        <a href="">
          <IconContext.Provider value={{ size: 18 }}>
            <FaXTwitter />
          </IconContext.Provider>
        </a>
        <a href="">
          <IconContext.Provider value={{ size: 18 }}>
            <SlSocialLinkedin />
          </IconContext.Provider>
        </a>
      </div>
      <IconContext.Provider value={{ size: 18 }}>
        <a href="">@Jamieeee1</a>
      </IconContext.Provider>
    </>
  );
};

export default Footer;
