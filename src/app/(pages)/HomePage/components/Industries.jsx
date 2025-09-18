"use client";

import React from "react";
import Image from "next/image";
import "./Industries.css"; // Ensure this path is correct

const serviceCards = [
  {
    title: "Automotive",
    description:
      "Optimize your vehicle management and elevate customer satisfaction with customized API solutions tailored specifically for your automotive business needs.",
    icon: "/images/industries1.svg",
    style: "large",
  },
  {
    title: "Finance",
    description:
      "Empower your financial operations with scalable, secure, and fully customized solutions that enhance efficiency and ensure seamless service delivery.",
    icon: "/images/industries2.svg",
    style: "large",
  },
  {
    title: "Real Estate",
    description:
      "Transform property management and real estate sales with smart, custom-built solutions designed to streamline operations and deliver exceptional client experiences.",
    icon: "/images/industries3.svg",
    style: "small",
  },
  {
    title: "Education",
    description:
      "Drive innovation in education with smart ed-tech solutions that increase student engagement, personalize learning paths, and simplify administrative processes.",
    icon: "/images/industries4.svg",
    style: "small",
  },
  {
    title: "Healthcare",
    description:
      "Enhance patient care and operational efficiency with healthcare solutions designed to reduce admin workload, streamline workflows, and support responsive medical services.",
    icon: "/images/industries5.svg",
    style: "small",
  },
];

const Services = () => {
  return (
    <section className="py-8 px-8 md:py-20 md:px-[73px] bg-[#14171C] container-class">
      <div className="flex flex-col items-center gap-2 mb-[60px]">
        <p className="text-[48px] max-[500px]:text-[30px] max-[500px]:leading-8 leading-[60px] text-[#fff] pro-medium">
          Industries We Serve
        </p>
        <p className="text-[18px] leading-6 max-[500px]:text-[16px]">
          With deep industry experience, we deliver tailored solutions that
          solve challenges and drive real impact.
        </p>
      </div>
      <div className="">
        {/* First Row: 2 Cards */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {serviceCards
            .filter((card) => card.style === "large")
            .map((card, index) => (
              <div
                key={index}
                className="flex flex-col gap-8 flex-1 items-start bg-[#1D2025] rounded-xl border border-[rgba(255,255,255,0.12)] px-10 max-[500px]:px-5 py-12 max-[500px]:py-5 card-hover-effect"
              >
                <div className="">
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    width={72}
                    height={72}
                  />
                </div>
                <div className="">
                  <h3 className="text-[28px] md:text-[40px] leading-9 pro-normal md:leading-[48px] text-white mb-6">
                    {card.title}
                  </h3>
                  <p className="text-[#FFFFFF99] pro-normal text-[18px] leading-7">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Second Row: 3 Cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          {serviceCards
            .filter((card) => card.style === "small")
            .map((card, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col items-start bg-[#1D2025] rounded-xl border border-[rgba(255,255,255,0.12)] pt-[20px] pr-[20px] pb-[20px] pl-[20px]        md:pt-[52px] md:pr-16 md:pb-[74px] md:pl-10 sub-card-hover-effect h-[442px]"
              >
                <div className="mb-8">
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    width={72}
                    height={72}
                  />
                </div>
                <h3 className="text-[28px] md:text-[40px] leading-9 pro-normal md:leading-[48px] text-white mb-6">
                  {card.title}
                </h3>
                <p className="text-[#FFFFFF99] pro-normal text-[18px] leading-7">
                  {card.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
