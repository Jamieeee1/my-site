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
import ContactForm from "../components/ContactForm";
import CodeDisplay from "../components/Codedisplay";

//james remember to make the date live.
const Contactme = () => {
  const now = new Date();
  let currentDate = now.toDateString();

  const { useMediaQuery } = useContext(SiteContext);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [buttonone, setButtonone] = useState(false);
  const [buttontwo, setButtontwo] = useState(false);

  const code = `const button = document.querySelector('#sendBtn');

const message = {
  name: "John Doe",
  email: "john-doe@gmail.com",
  message: "I would like to work with you James",
  date: "${currentDate}"
};

button.addEventListener('click', () => {
  form.send(message);
});`;

  return (
    <div className="contacts-main-div">
      <span className="contact-mobile-header">_contacts</span>
      <div className="contacts-inner-div">
        <div className="contacts-side-div">
          <div>
            <span
              onClick={() => setButtonone(!buttonone)}
              className="contact-drop-buttons"
            >
              {buttonone ? <FaAngleDown /> : <FaAngleRight />}
              contacts
            </span>
            {buttonone && (
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
              onClick={() => setButtontwo(!buttontwo)}
              className="contact-drop-buttons"
            >
              {buttontwo ? <FaAngleDown /> : <FaAngleRight />}
              find-me-also-in
            </span>
            {buttontwo && (
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
        </div>
        <div className="contacts-other-side">
          <div className="contact-me-div">
            <ContactForm />
          </div>
          <div className="code-show">
            <CodeDisplay code={code} language="javascript" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
