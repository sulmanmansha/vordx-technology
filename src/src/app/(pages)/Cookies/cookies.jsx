import React from "react";
import Content from "./content";
import HeroSection from "@/app/shared/HeroSection";

export default function Cookies() {
  return (
    <div>
      <HeroSection
        subtitle="Cookies Policy"
        smalltitle="Welcome to Vordx Technologies. This Cookies Policy explains how we use cookies and similar tracking technologies on our website www.vordx.com. By continuing to browse or use our site, you agree to the use of cookies as described in this policy."
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
