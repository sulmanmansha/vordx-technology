import HeroSection from "@/app/shared/HeroSection";
import React, { lazy, Suspense } from "react";
import WhyWork from "./WhyWork";
import OurCulture from "./OurCulture";
import HiringProcess from "./HiringProcess";
import Faq from "@/app/shared/Faq";
import Contact from "@/app/shared/Contact";
import Testimonial from "@/app/shared/Testimonial";

const Positions = lazy(() => import("./Positions")); // update path if needed

const Career = () => {
  const LoadingFallback = () => (
    <div className="flex justify-center items-center py-20">
      <div className="text-lg animate-pulse text-white opacity-70">
        Loading job listings...
      </div>
    </div>
  );

  return (
    <div>
      <HeroSection
        title="Careers"
        subtitle="Shape the Future With Us"
        buttonText="Start Your Career"
        smalltitle="Join a team that values innovation, collaboration, and personal growth. Explore career opportunities where your skills can make a real impact.."
        imageSrc="/images/career.svg"
        imageAlt="career"
      />
      <div className="relative overflow-hidden">
        <div className="absolute -right-72 top-[15%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
        <Suspense fallback={<LoadingFallback />}>
          <Positions />
        </Suspense>
        <WhyWork />
        <OurCulture />

        <div className="absolute -left-72 top-[30%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>

        <div className="absolute -right-72 top-[55%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>

        <div className="absolute -left-72 top-[75%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
        <HiringProcess />

        <Testimonial />
        <Contact />
        <Faq />

        <div className="absolute -right-72 bottom-[4%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
