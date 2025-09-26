"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const OurCulture = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const img = document.getElementById("culture-img");
      if (img) {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // ← Taake baar baar ho jab scroll mein aaye
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container-class px-5 sm:px-10 md:px-[130px] py-[40px] space-y-[60px]">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
          Our Culture
        </h1>
        <p className="text-[16px] sm:text-[20px] pro-normal leading-6 opacity-80 pt-4 max-w-[870px] w-full">
          We foster a people-first culture where collaboration, innovation, and
          mutual respect create an environment for everyone to thrive.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Image Section */}
        <div
          id="culture-img"
          className={`w-full lg:w-5/12 transition-transform duration-[2500ms] overflow-hidden ease-in-out group rounded-lg
            ${isVisible ? "rotate-0 translate-x-0" : "-rotate-12 -translate-x-10"}
          `} >
          <Image
            src="/images/culture.svg"
            width={530}
            height={559}
            alt="culture"
            className="w-full h-auto transition-transform duration-[1000ms] ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Text Content Section */}

        <div className="w-full lg:w-7/12 flex flex-col gap-10 -z-50">
          <Slide direction="left">
            <h2 className="text-[28px] md:text-[40px] leading-[38px] md:leading-[48px] pro-semibold max-w-[510px] w-full">
              The Core Beliefs That Drive How We Work, Grow, and Succeed
              Together
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Innovation at Core",
                  description:
                    "We foster a creative space where new ideas are always welcome and innovation drives everything we do.",
                },
                {
                  title: "Teamwork & Collaboration",
                  description:
                    "Our strength lies in unity — we work together, support each other, and celebrate shared success.",
                },
                {
                  title: "Growth & Learning",
                  description:
                    "From mentorship to skill-building, we provide every opportunity for personal and professional growth.",
                },
                {
                  title: "Work-Life Balance",
                  description:
                    "We value your well-being and offer flexibility to maintain a healthy balance between work and life.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-[#FFFFFF1F] bg-[#FFFFFF14] rounded-xl shadow-[-_0_12px_0_rgba(0,0,0,0.12)] space-y-2"
                >
                  <h3 className="text-[18px] md:text-[20px] pro-medium leading-6">
                    {item.title}
                  </h3>
                  <p className="opacity-[72%] text-[16px] md:text-[18px] pro-normal leading-[22px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default OurCulture;
