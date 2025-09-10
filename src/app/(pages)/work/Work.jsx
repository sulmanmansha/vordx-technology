import HeroSection from "@/app/shared/HeroSection";
import React from "react";
import Contact from "@/app/shared/Contact";
import Faq from "@/app/shared/Faq";
import WorkOverflow from "./WorkOverflow";


const Work = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="absolute -right-72 top-[13%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
        <HeroSection
          title="Work"
          subtitle="Crafting Digital Solutions That Scale."
          buttonText="Contact Now"
          smalltitle="Dive into our curated selection of projects that highlight our skills in design, development, and digital strategy.."
          imageSrc="/images/workicon.svg"
          imageAlt="Industries"
          navigationLink="/contact"
        />

        <WorkOverflow />
      </div>
      <Contact />
      <Faq />
    </div>
  );
};

export default Work;

