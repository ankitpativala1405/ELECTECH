import React from "react";
import Header from "../../COMPONENTS/index";
import HeroSlider from "../../COMPONENTS/HeroSlider";
import NavbarHeader from "../../COMPONENTS/navbar";
import Footer from "../../COMPONENTS/Footer";
import ScrollToTopButton from "../../COMPONENTS/ScrollToTopButton";

const HomePage = () => {
  return (
    <>
      <Header />
      <NavbarHeader />
      <HeroSlider />
      <ScrollToTopButton/>
      <Footer/>
    </>
  );
};

export default HomePage;
