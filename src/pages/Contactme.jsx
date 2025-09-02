import React, { useContext, useState } from "react";
import { SiteContext } from "../App";
import { Link } from "react-router";
import {
  FaLink,
  FaEnvelope,
  FaPhone,
  FaAngleRight,
  FaAngleDown,
} from "react-icons/fa";

const Contactme = () => {
  const { useMediaQuery } = useContext(SiteContext);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [isOpen, setisOpen] = useState({
    buttonone: false,
    buttontwo: false,
  });
  const toggle = (key) => {
    setisOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className="contacts-main-div">
      <span className="contact-mobile-header">Contacts</span>
      <div>
        <span
          onClick={() => toggle("buttonone")}
          className="contact-drop-buttons"
        >
          {isOpen.buttonone ? <FaAngleDown /> : <FaAngleRight />}
          contacts
        </span>
        {isOpen.buttonone && (
          <div className="contacts-drop-div">
            <span>
              {" "}
              <span>
                {" "}
                <FaEnvelope />{" "}
              </span>{" "}
              barnabasjames27@gmail.com
            </span>
            <span>
              {" "}
              <span>
                {" "}
                <FaPhone />{" "}
              </span>{" "}
              +2349057912592
            </span>
          </div>
        )}
      </div>
      <div>
        <span
          onClick={() => toggle("buttontwo")}
          className="contact-drop-buttons"
        >
          {isOpen.buttontwo ? <FaAngleDown /> : <FaAngleRight />}
          find-me-also-in
        </span>
        {isOpen.buttontwo && (
          <div className="contacts-drop-div">
            <a
              href="https://x.com/Meet_JamesB?t=QnGCQHT2FUi-kQc08LZgKA&s=09"
              target={isMobile ? "_self" : "_blank"}
            >
              <span>
                {" "}
                <FaLink />{" "}
              </span>
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/in/barnabas-james"
              target={isMobile ? "_self" : "_blank"}
            >
              <span>
                {" "}
                <FaLink />{" "}
              </span>
              Linkedin
            </a>

            <a
              href="https://wa.me/2349057912592"
              target={isMobile ? "_self" : "_blank"}
            >
              <span>
                {" "}
                <FaLink />{" "}
              </span>
              Whatsapp
            </a>
          </div>
        )}
      </div>

      <form
        action="https://formspree.io/f/xkgvvppj"
        id="contact-form"
        method="post"
      >
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id=""></textarea>
        <button onClick={() => e.preventDefault()}>Summit</button>
      </form>
    </div>
  );
};

export default Contactme;
