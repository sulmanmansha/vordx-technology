import React from "react";
import HeroSection from "@/app/shared/HeroSection";
import Content from "./content";
export default function Privacy() {
  return (
    <div>
      <HeroSection
        subtitle="Privacy Policy"
        smalltitle="Welcome to Vordx Technologies,We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.vordx.com. use our services, or interact with us in any way."
      />
       <div className="relative overflow-hidden">
        <Content />
        <div className="absolute -right-72 top-[10%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
