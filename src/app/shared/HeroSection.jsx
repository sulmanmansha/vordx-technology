import Navbar from "@/app/Layout/Header";
import Image from "next/image";
import React from "react";
import Button from "../shared/Button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  imageSrc,
  imageAlt,
  smalltitle,
  navigationLink,
}) => {
  return (
    <div className="pb-[30px] relative">
      <div className="absolute inset-0 bg-gradient-to-l from-[#3E03B340] via-[#A1F91940] to-[#3E03B340] z-0 max-h-24 h-full w-full filter blur-[24px]" />

      <Navbar />

      <div className="flex flex-col justify-center items-center text-center gap-3 sm:mt-[30px] max-w-[990px] m-auto relative sm:p-5 md:p-0">
        {title && (
          <div>
            <span className="border border-[#FFFFFF1F] py-2 px-3 flex items-center justify-center gap-2 text-[#FFFFFF99] rounded-full">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  width={16}
                  height={16}
                  alt={imageAlt || "icon"}
                />
              )}
              <p className="tracking-[0.96px] uppercase leading-5 pro-medium text-[8px]">
                {title}
              </p>
            </span>
          </div>
        )}

        {subtitle ? (
          <h1 className="text-[32px] md:text-[40px] lg:text-[68px] pro-medium leading-[40px] sm:leading-[72px] md:leading-[80px] text-white w-full max-w-[920px]">
            {subtitle}
          </h1>
        ) : (
          <Skeleton
            height={100}
            width={700}
            baseColor="#333"
            highlightColor="#555"
          />
        )}

        {smalltitle ? (
          <p className="text-[#FFFFFF99] text-[20px] pro-normal leading-7">
            {smalltitle}
          </p>
        ) : (
          <Skeleton
            height={80}
            width={500}
            baseColor="#333"
            highlightColor="#555"
          />
        )}

        {buttonText && (
          <div className=" mt-3 md:mt-11">
            <Button href={navigationLink || "#"} text={buttonText} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
