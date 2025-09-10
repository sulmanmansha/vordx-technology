import React from "react";
import HeroSection from "@/app/shared/HeroSection";
import Form from "./Form";

const Apply = () => {
  return (
    <div>
      <HeroSection
        title="Apply Now"
        subtitle="Make an Impact With Us"
        smalltitle="Be part of a team that's growing fast and dreaming big. Apply now and let's move forward together."
        imageSrc="/images/applynow.svg"
        imageAlt="applynow"
      />
      <Form />
    </div>
  );  
};

export default Apply;