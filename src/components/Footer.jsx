import React from 'react'
import './Footer.css'
import {} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <div>
        <span>Find me in: </span>
        <a href=""><FaXTwitter/></a>
        <a href=""><SlSocialLinkedin/></a>
      </div>
      <a href="">@Jamieeee1</a>
    </>
  )
}

export default Footer
