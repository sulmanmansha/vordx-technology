import React from "react";
import HeroSection from "@/app/shared/HeroSection";
import ContactForm from "./ContactForm";
import Faq from "@/app/shared/Faq";
import Location from "./Location";

const Contact = () => {
  return (
    <div>
      <HeroSection
        title="Contact us"
        subtitle="Get in Touch with Our Team"
        smalltitle="Whether you have a question, a project in mind, or just want to say hello  we’re here to help and ready to listen."
        buttonText="Explore Industries"
        imageSrc="/images/contactIocn.svg"
        imageAlt="contactIocn"
        navigationLink="/industry"
      />
      <ContactForm />
      <div className="relative overflow-hidden">
        <div className="absolute -left-72 top-[25%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-20">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
        <Location />
        <Faq />
      </div>
    </div>
  );
};

export default Contact;
