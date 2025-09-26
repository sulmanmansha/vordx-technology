import HeroSection from "@/app/shared/HeroSection";
import React from "react";
// import Innovation from "./Innovation";
import StartJourney from "./StartJourney";
import CoreValues from "./CoreValues";
import Testimonial from "@/app/shared/Testimonial";
import Blogs from "@/app/shared/Blogs";
import Contact from "@/app/shared/Contact";
import Faq from "@/app/shared/Faq";
import Mission from "./Mission";
import Team from "./Team";
import Business from "./Business"
const About = () => {
  return (
    <div>
      <HeroSection
        title="About Us"
        subtitle="Empowering Ideas with Innovation"
        buttonText="Contact Now"
        smalltitle="At Vordx Technologies, we create digital experiences that transform businesses and drive success."
        imageSrc="/images/aboutIcon.png"
        imageAlt="Industries"
        navigationLink="/contact"
      />
      <Business/>
      {/* <Innovation /> */}
      <StartJourney />
      <CoreValues />
      <Mission />
      <Team />
      <Blogs />
      <Testimonial />
      <Contact />
      <Faq />
    </div>
  );
};

export default About;
