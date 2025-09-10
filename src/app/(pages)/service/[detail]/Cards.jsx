"use client";
import Image from "next/image";
import React from "react";

const Cards = ({ serviceInfo = [] }) => {
  // Find the section-level title/description
  const serviceSection = serviceInfo.find((section) => section.section === "service");

  const cardData = serviceSection?.content?.map((item, idx) => ({
    title: item.title,
    description: item.description,
    image: item.icon || "/images/default-icon.svg",
  })) || [];

  return (
    <div className="mt-10">
      <div className="py-6 md:py-12 px-2.5 sm:px-10 lg:px-[80px] flex flex-col justify-center items-center text-center container-class">
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
            {serviceSection?.title}
          </h1>
          <p className="text-[18px] pro-normal leading-6 opacity-80 pt-4 max-w-[714px] w-full">
            {serviceSection?.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-8 pt-10 md:pt-[52px]">
          {cardData?.map((card) => (
            <div
              key={card.title}
              className="bg-transparent border border-transparent rounded-[16px] py-8 px-5 sm:px-[31px] group hover:border-[#A1F9193D] transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center"
            >
              <Image
                src={card.image}
                width={80}
                height={80}
                className="w-14 h-14 md:w-20 md:h-20"
                alt="tech-image"
              />

              {/* Hover background glow */}
              <div className="absolute z-0 -top-10 -left-60 w-[275px] h-[277px] bg-[#A1F9191F] rounded-full blur-[120px] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"></div>
              <div className="absolute z-0 -bottom-10 -right-60 w-[275px] h-[277px] bg-[#A1F9191F] rounded-full blur-[120px] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"></div>

              {/* Card content */}
              <div className="pt-8 flex flex-col items-center justify-center text-center">
                <h1 className="text-[20px] sm:text-[24px] pro-medium capitalize leading-8 sm:leading-10 pb-3">
                  {card.title}
                </h1>
                <p className="opacity-60 text-[14px] sm:text-[18px] pro-normal leading-4 sm:leading-6">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
