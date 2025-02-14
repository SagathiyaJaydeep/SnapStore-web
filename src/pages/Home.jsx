import React from "react";
import Navbar from "../componets/Navbar";
import SideDrawer from "../componets/SideDrawer";
import HomePageData from "../componets/HomePageData";

const Home = () => {
  return (
    <>
      <Navbar />
      <SideDrawer />
      <HomePageData />
    </>
  );
};

export default Home;
