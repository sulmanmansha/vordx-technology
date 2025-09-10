"use client";
import Image from "next/image";
import React from "react";

const UI = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
      {/* Row 1: 2 cards side by side */}
      <div className="md:col-span-2 relative h-[560px] rounded-[20px] overflow-hidden group">
        <Image
          src="/images/ui1.svg"
          fill
          alt="team"
          className="object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-all duration-700"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 text-white translate-y-full group-hover:translate-y-0 transition-all duration-700">
          <h3 className=" md:text-[36px] text-[26px] leading-9 md:leading-[44px] text-start pro-medium">
            A modern, trustworthy, and high performance platform for Copy
            Trading.
          </h3>

          <div className="flex items-center justify-between text-sm flex-wrap">
            <a href="#" className="flex pro-normal items-center gap-2 text-[14px]">
              View Case Study <span className="pt-1 text-[21px]">→</span>
            </a>
            <span className="text-[14px] pro-normal text-[#FFFFFFCC] leading-5">
              Mobile App, UI/UX, Branding
            </span>
          </div>
        </div>
      </div>
      {/* second-card */}
      <div className="relative h-[560px] rounded-[20px] overflow-hidden group">
        <Image
          src="/images/ui2.svg"
          fill
          alt="team"
          className="object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-all duration-700"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between pt-4 pr-[18px] pb-6 pl-4    sm:pt-6 sm:pr-[22px] sm:pb-9 sm:pl-6 text-white translate-y-full group-hover:translate-y-0 transition-all duration-700">
          <h3 className="md:text-[36px] text-[26px] leading-9 md:leading-[44px]  text-start pro-medium">
            A modern, trustworthy, <br /> and high performance platform for Copy
            <br />
            Trading.
          </h3>

          <div className="flex items-center justify-between text-sm flex-wrap">
            <a href="#" className="flex pro-normal items-center gap-2 text-[14px]">
              View Case Study <span className="pt-1 text-[21px]">→</span>
            </a>
            <span className="text-[14px] pro-normal text-[#FFFFFFCC] leading-5">
              Mobile App, UI/UX, Branding
            </span>
          </div>
        </div>
      </div>
      {/* third-card-full-width */}
      <div className="md:col-span-3 relative h-[748px] rounded-[20px] overflow-hidden group">
        <Image
          src="/images/ui3.svg"
          fill
          alt="team"
          className="object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-all duration-700"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 text-white translate-y-full group-hover:translate-y-0 transition-all duration-700">
          <h3 className="md:text-[36px] text-[26px] leading-9 md:leading-[44px]  w-auto lg:w-[620px] text-start pro-medium">
            A modern, trustworthy, and high performance platform for Copy
            Trading.
          </h3>

          <div className="flex items-center justify-between text-sm flex-wrap">
            <a href="#" className="flex pro-normal items-center gap-2 text-[14px]">
              View Case Study <span className="pt-1 text-[21px]">→</span>
            </a>
            <span className="text-[14px] pro-normal text-[#FFFFFFCC] leading-5">
              Mobile App, UI/UX, Branding
            </span>
          </div>
        </div>
      </div>

      {/* cards-fourth */}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-[14px]">
        <div className="relative h-[528px] w-full rounded-[20px] overflow-hidden group">
          <Image
            src="/images/ui4.svg"
            fill
            alt="team"
            className="object-cover w-full h-full"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-all duration-700"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 text-white translate-y-full group-hover:translate-y-0 transition-all duration-700">
            <h3 className="md:text-[36px] text-[26px] leading-9 md:leading-[44px]  w-auto lg:w-[523px] text-start pro-medium">
              A modern, trustworthy, and high performance platform for Copy
              Trading.
            </h3>

            <div className="flex items-center justify-between text-sm flex-wrap">
              <a href="#" className="flex items-center pro-normal gap-2 text-[14px]">
                View Case Study <span className="pt-1 text-[21px]">→</span>
              </a>
              <span className="text-[14px] pro-normal text-[#FFFFFFCC] leading-5">
                Mobile App, UI/UX, Branding
              </span>
            </div>
          </div>
        </div>
        {/* cards-five*/}
        <div className="relative h-[528px] w-full rounded-2xl overflow-hidden group">
          <Image
            src="/images/ui5.svg"
            fill
            alt="team"
            className="object-cover w-full h-full"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-all duration-700"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 text-white translate-y-full group-hover:translate-y-0 transition-all duration-700">
            <h3 className="md:text-[36px] text-[26px] leading-9 md:leading-[44px] w-auto lg:w-[523px] text-start pro-medium">
              A modern, trustworthy, and high performance platform for Copy
              Trading.
            </h3>

            <div className="flex items-center justify-between text-sm flex-wrap">
              <a href="#" className="flex pro-normal items-center gap-2 text-[14px]">
                View Case Study <span className="pt-1 text-[21px]">→</span>
              </a>
              <span className="text-[14px] pro-normal text-[#FFFFFFCC] leading-5">
                Mobile App, UI/UX, Branding
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI;
