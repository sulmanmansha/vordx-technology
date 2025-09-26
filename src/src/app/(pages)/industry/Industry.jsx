import HeroSection from "@/app/shared/HeroSection";
import React from "react";
import Empower from "./Empower";
import Contact from "../../shared/Contact";
import Faq from "../../shared/Faq";
import Testimonial from "@/app/shared/Testimonial";

const Industry = () => {
  return (
    <div>
      <HeroSection
        title="Industries"
        subtitle="Solutions Tailored for Every Industry"
        buttonText="Explore Industries"
        smalltitle="Explore how innovative digital solutions are transforming diverse industries — solving real-world challenges, boosting efficiency, and unlocking new opportunities."
        imageSrc="/images/industries.png"
        imageAlt="Industries"
      />
      <div className="relative overflow-hidden">
        <div className="absolute -right-72 top-[10%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
        <Empower />
        <div>
          <Testimonial />
        </div>

        <Contact />

        <div className="absolute -left-72 bottom-[35%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
};

export default Industry;
