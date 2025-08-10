import React, { useContext } from "react";
import { SiteContext } from "../App";
import Mobileabout from "../components/Mobileabout";
import Desktopabout from "../components/Desktopabout";

const Aboutlayout = () => {
  const { useMediaQuery } = useContext(SiteContext);
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <>
        <Mobileabout />
      </>
    );
  } else {
    return (
      <>
        <Desktopabout />
      </>
    );
  }
};

export default Aboutlayout;
