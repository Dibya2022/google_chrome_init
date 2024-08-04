import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Carouselscr } from "./components/Carosoulscr";
import Discover from "./components/Discover";
import FaqsCard from "./components/FaqsCard";
import FooterNavs from "./components/FooterNavs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carouselscr />
      <Discover />
      <FaqsCard />
      <FooterNavs />
    </div>
  );
};

export default App;
