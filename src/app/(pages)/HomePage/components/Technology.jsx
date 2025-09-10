"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getServices } from "@/app/api/service/getServices";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Technology = () => {
  return (
    <div className="py-6 md:py-20 px-2.5 sm:px-10 lg:px-[48px] flex flex-col justify-center items-center text-center container-class">
      <div>
        <h1 className="text-[28px] sm:text-[40px] md:text-[48px] pro-medium leading-8 sm:leading-[50px] md:leading-[60px] max-w-[763px] w-full">
          Purpose-built software solutions for your technology needs
        </h1>
        <p className="text-[18px] pro-normal leading-6 opacity-80 pt-4">
          Our software services drive innovation and efficiency, offering
          tailored solutions to improvement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-[64px] pt-10 md:pt-[52px] justify-center">
        {/* Card 1: Back-End Development */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology1.svg')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              Front - end Development
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[#3E03B3]"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] opacity-0 group-hover:opacity-100 transition-all duration-700">
            <h3 className="text-[20px] leading-[24px] text-start pro-normal">
              Engineering powerful and secure back-end systems that deliver
              stability, high performance, and seamless integration with
              front-end layers.
            </h3>
            <button className="py-3 w-full max-w-[195px] px-5 rounded-md bg-[#A1F919] text-[20px] text-[#222222] leading-6">
              Book service
            </button>
          </div>
        </div>

        {/* Card 2: Back-End Development */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology1.svg')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              Back - end Development
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[#3E03B3]"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] opacity-0 group-hover:opacity-100 transition-all duration-700">
            <h3 className="text-[20px] leading-[24px] text-start pro-normal">
              Engineering powerful and secure back-end systems that deliver
              stability, high performance, and seamless integration with
              front-end layers.
            </h3>
            <button className="py-3 w-full max-w-[195px] px-5 rounded-md bg-[#A1F919] text-[20px] text-[#222222] leading-6">
              Book service
            </button>
          </div>
        </div>

        {/* Card 3: Mobile App Development */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology1.svg')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              Mobile App development
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[#3E03B3]"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] opacity-0 group-hover:opacity-100 transition-all duration-700">
            <h3 className="text-[20px] leading-[24px] text-start pro-normal">
              Designing and building engaging mobile applications that combine
              rich functionality with smooth performance across iOS and Android.
            </h3>
            <button className="py-3 w-full max-w-[195px] px-5 rounded-md bg-[#A1F919] text-[20px] text-[#222222] leading-6">
              Book service
            </button>
          </div>
        </div>

        {/* Card 4: Dedicated Development Teams */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology1.svg')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              Dedicated Development Teams
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[#3E03B3]"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] opacity-0 group-hover:opacity-100 transition-all duration-700">
            <h3 className="text-[20px] leading-[24px] text-start pro-normal">
              Offering expert, scalable development teams that integrate
              seamlessly with your workflow to deliver quality digital solutions
              efficiently.
            </h3>
            <button className="py-3 w-full max-w-[195px] px-5 rounded-md bg-[#A1F919] text-[20px] text-[#222222] leading-6">
              Book service
            </button>
          </div>
        </div>

        {/* Card 5: Custom Software Solutions */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology1.svg')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              Custom Software Solutions
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[#3E03B3]"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] opacity-0 group-hover:opacity-100 transition-all duration-700">
            <h3 className="text-[20px] leading-[24px] text-start pro-normal">
              Developing customized, future-ready software tailored to specific
              business goals, streamlining operations and driving long-term
              success.
            </h3>
            <button className="py-3 w-full max-w-[195px] px-5 rounded-md bg-[#A1F919] text-[20px] text-[#222222] leading-6">
              Book service
            </button>
          </div>
        </div>

        {/* Card 6: UI/UX Design Consultation */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology1.svg')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              UI/UX Design Consultation
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[#3E03B3]"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end gap-8  py-5 px-5 sm:py-10 sm:px-[34px] opacity-0 group-hover:opacity-100 transition-all duration-700">
            <h3 className="text-[20px] leading-[24px] text-start pro-normal">
              Strategically designing seamless user experiences with a focus on
              usability, functionality, and visual consistency to elevate
              digital products.
            </h3>
            <button className="py-3 w-full max-w-[195px] px-5 rounded-md bg-[#A1F919] text-[20px] text-[#222222] leading-6">
              Book service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
