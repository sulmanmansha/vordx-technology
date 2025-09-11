"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const sections = [
  {
    id: 1,
    title: "Ideate the process",
    description:
      "We start by understanding your goals, design preferences, and audience to lay a solid foundation.",
    image: "/images/process-1.png",
  },
  {
    id: 2,
    title: "User research and planning",
    description:
      "Through research and careful planning, we define the roadmap for a successful product.",
    image: "/images/process-2.png",
  },
  {
    id: 3,
    title: "Design and prototype",
    description:
      "We craft beautiful and functional designs, then bring them to life through interactive prototypes.",
    image: "/images/process-3.png",
  },
  {
    id: 4,
    title: "Development & Testing",
    description:
      "We turn designs into live products with rigorous quality checks at every stage.",
    image: "/images/process-4.png",
  },
  {
    id: 5,
    title: "Launch & Optimization",
    description:
      "We launch your product, monitor results, and refine for optimal performance.",
    image: "/images/process-5.png",
  },
];

const ProductJourney = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollPosition = container.scrollTop;

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const section = sectionRefs.current[i];
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const currentSection = hoveredId || activeSection;

  return (
    <div className="w-full bg-[#0e0e11] text-white pb-12">
      <p className="text-[32px] sm:text-[40px] md:text-[48px] leading-10 sm:leading-[50px] md:leading-[60px] text-center pro-medium pt-10 md:pt-12">
        Our work process
      </p>
      <p className="text-[18px] pro-normal leading-6 text-[#FFFFFF99] pt-4 text-center pb-[32px]">
        Explore our success stories & discover how we’ve helped businesses like
        yours overcome <br /> challenges
      </p>
      <section className="px-[10px] md:px-[121px] pt-8 md:pt-[40px] grid md:grid-cols-2 gap-10 container-class workprocess">
        {/* Left Side - Active Section Display */}
        <div className="flex flex-col gap-6 relative min-h-[330px] md:min-h-[500px]">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`transition-opacity duration-500 absolute ${
                currentSection === section.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2 className="text-[24px] leading-7 md:text-[40px] md:text-leading-10 pro-bold">
                {section.title}
              </h2>
              <p className="text-[#FFFFFFCC] pro-normal text-[16px] leading-5 md:text-[18px] md:leading-6 max-w-md mt-3 md:mt-4">
                {section.description}
              </p>
              {/* icons */}
              <div className="mt-[80px] relative h-[200px] md:h-[320px] md:w-[320px] w-full">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Scrollable Timeline */}
        <div
          ref={containerRef}
          className="relative h-[500px] overflow-y-auto scrollbar-hide hiddenScrollbar"
        >
          <ul className="relative">
            {sections.map((section, index) => (
              <li
                key={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                onMouseEnter={() => setHoveredId(section.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative pl-10 mt-6 md:pl-20"
              >
                {/* Main static vertical line */}
                <div className="absolute left-[8px] top-0 h-full w-[3px] bg-[#D0D0D033] md:left-[36px]"></div>

                {/* Dynamic green line on hover/active */}
                <div
                  className={`absolute left-[8px] top-0 w-[2px] transition-all duration-500 ease-in-out md:left-[36px] ${
                    hoveredId === section.id
                      ? "h-full bg-lime-400"
                      : "h-0 bg-lime-400"
                  }`}
                ></div>

                {/* Dot */}
                <div
                  className={`absolute left-[5px] top-[-24px] w-2 h-2 rounded-full z-10 transition-all duration-300 md:left-[33px] ${
                    currentSection === section.id
                      ? "bg-lime-400"
                      : "bg-lime-400"
                  }`}
                ></div>

                {/* Timeline Content */}
                <div>
                  <span
                    className={`text-[#A1F919] bg-opacity-10 text-[16px] rounded-full leading-5 block mb-4 p-[6px] w-[32px] ${
                      currentSection === section.id
                        ? "bg-[#A1F919]"
                        : "bg-transparent"
                    }`}
                    style={{
                      color: "var(--Accent-Color, #A1F919)",
                      textShadow: "0 0 20px #A1F919",
                    }}
                  >
                    {String(section.id).padStart(2, "0")}
                  </span>
                  <h3 className="text-[#F8F8F8] text-xl md:text-[28px] md:leading-8 mb-3 md:mb-5 pro-semibold">
                    {section.title}
                  </h3>
                  <p className="text-[#F8F8F8] opacity-80 text-[16px] md:text-[18px] leading-6 mb-10">
                    {section.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProductJourney;
