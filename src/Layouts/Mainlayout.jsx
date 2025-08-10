import React, { useContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SiteContext } from "../App";
import MobileNav from "../components/MobileNav";

const Mainlayout = () => {
  const { navOpen } = useContext(SiteContext);
  return (
    <>
      <Navbar />
      <div className="outlet-div">
        {navOpen && <MobileNav />}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Mainlayout;
