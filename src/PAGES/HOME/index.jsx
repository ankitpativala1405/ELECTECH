import React from "react";
import Header from "../../COMPONENTS/index";
import HeroSlider from "../../COMPONENTS/HeroSlider";
import NavbarHeader from "../../COMPONENTS/navbar";
import Footer from "../../COMPONENTS/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <NavbarHeader />
      <HeroSlider />
      <Footer/>
    </>
  );
};

export default HomePage;
