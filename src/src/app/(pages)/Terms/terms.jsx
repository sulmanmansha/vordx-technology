import React from "react";
import HeroSection from "@/app/shared/HeroSection";
import Content from "./content";

export default function Terms() {
  return (
    <div>
      <HeroSection
        subtitle="Terms of Service"
        smalltitle={
          <>
            Welcome to Vordx. These Terms of Service govern your use of our
            website {""}
            <a
              className="text-[#009DFF] border-b border-b-[#009DFF]"
              href="https://www.vordx.com"
            >
              www.vordx.com {""}
            </a>
            and all services provided by Vordx. By accessing our site or using
            our services, you agree to comply with these Terms. Please read them
            carefully before proceeding.
          </>
        }
      />
      <div className="relative overflow-hidden">
        <Content />
        <div className="absolute -right-72 top-[16%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
