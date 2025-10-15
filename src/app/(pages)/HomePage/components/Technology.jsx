"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getServices } from "@/app/api/service/getServices";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Technology = () => {
  return (
    <div className="pb-6 md:pb-[108px] pt-6 px-2.5 sm:px-10 lg:px-[48px] flex flex-col justify-center items-center text-center container-class">
      <div>
        <h1 className="text-[28px] sm:text-[40px] md:text-[48px] pro-medium leading-8 sm:leading-[50px] md:leading-[60px] max-w-[763px] w-full">
          Purpose-built software solutions for your technology needs
        </h1>
        <p className="text-[18px] pro-normal leading-6 opacity-80 pt-4">
          Our software services drive innovation and efficiency, offering
          tailored solutions to improvement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 pt-10 md:pt-[52px] justify-center">
        {/* Card 1: Back-End*/}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology1.png')" }}
          ></div>

          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              Front - End Development
            </p>
          </div>

          {/* 1. Overlay (Color) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-[#3E03B3]"></div>

          {/* 2. Transitioning Content*/}
          <div
            className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] transition-all duration-1000 
               opacity-0 translate-y-full 
               group-hover:opacity-100 group-hover:translate-y-0"
          >
            <h3 className="text-[20px] leading-[24px] text-start pro-normal text-white">
              Designing pixel-perfect and responsive interfaces that ensure
              seamless interactions, intuitive navigation, and an engaging
              experience across every device and platform.
            </h3>
            <Link href="./contact">
              {" "}
              <button className="technology-service-btn">Book service</button>
            </Link>
          </div>
        </div>
        {/* Card 2: Back-End Development */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology2.png')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              Back - End Development
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-[#3E03B3]"></div>

          {/* Content */}
          <div
            className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] transition-all duration-1000 
               opacity-0 translate-y-full 
               group-hover:opacity-100 group-hover:translate-y-0"
          >
            <h3 className="text-[20px] leading-[24px] text-start pro-normal text-white">
              Engineering powerful and secure server-side systems that ensure
              stability, scalability, and smooth data flow between applications,
              delivering unmatched performance and reliability.
            </h3>
            <Link href="./contact">
              {" "}
              <button className="technology-service-btn">Book service</button>
            </Link>
          </div>
        </div>

        {/* Card 3: Mobile App Development */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology3.png')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              Mobile App Development
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-[#3E03B3]"></div>

          {/* Content */}
          <div
            className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] transition-all duration-1000 
               opacity-0 translate-y-full 
               group-hover:opacity-100 group-hover:translate-y-0"
          >
            <h3 className="text-[20px] leading-[24px] text-start pro-normal text-white">
              Building high-performing, user-focused mobile applications that
              combine sleek design with powerful functionality, ensuring
              seamless experiences across iOS and Android platforms.
            </h3>
            <Link href="./contact">
              {" "}
              <button className="technology-service-btn">Book service</button>
            </Link>{" "}
          </div>
        </div>

        {/* Card 4: Dedicated Development Teams */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology4.png')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              Custom Software Solutions
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-[#3E03B3]"></div>

          {/* Content */}
          <div
            className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] transition-all duration-1000 
               opacity-0 translate-y-full 
               group-hover:opacity-100 group-hover:translate-y-0"
          >
            <h3 className="text-[20px] leading-[24px] text-start pro-normal text-white">
              Developing tailored software that aligns perfectly with your
              business goals, enhancing efficiency, scalability, and performance
              through innovative technology and strategic design.
            </h3>
            <Link href="./contact">
              {" "}
              <button className="technology-service-btn">Book service</button>
            </Link>{" "}
          </div>
        </div>

        {/* Card 5: Custom Software Solutions */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology5.png')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              Dedicated Development Teams
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-[#3E03B3]"></div>
          {/* Content */}
          <div
            className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] transition-all duration-1000 
               opacity-0 translate-y-full 
               group-hover:opacity-100 group-hover:translate-y-0"
          >
            <h3 className="text-[20px] leading-[24px] text-start pro-normal text-white">
              Providing skilled, cross-functional teams fully aligned with your
              project goals, ensuring seamless collaboration, faster delivery,
              and high-quality results from start to finish.
            </h3>
            <Link href="./contact">
              {" "}
              <button className="technology-service-btn">Book service</button>
            </Link>{" "}
          </div>
        </div>

        {/* Card 6: UI/UX Design Consultation */}
        <div className="relative h-[596px] w-full py-10 px-[34px] rounded-xl text-left overflow-hidden group">
          {/* Background image container */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: "url('./images/technology6.png')" }}
          ></div>

          {/* Content */}
          <div className="relative z-20">
            <p className="sm:text-[36px] text-[28px] leading-8 sm:leading-10 pro-bold">
              UI/UX Design Consultation
            </p>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-[#3E03B3]"></div>

          {/* Content */}
          <div
            className="absolute inset-0 flex flex-col justify-end gap-8 py-5 px-5 sm:py-10 sm:px-[34px] transition-all duration-1000
               opacity-0 translate-y-full 
               group-hover:opacity-100 group-hover:translate-y-0"
          >
            <h3 className="text-[20px] leading-[24px] text-start pro-normal text-white">
              Creating user-centered designs that blend aesthetics with
              functionality, improving usability, engagement, and overall
              satisfaction through data-driven insights and expert guidance.
            </h3>
            <Link href="./contact">
              {" "}
              <button className="technology-service-btn">Book service</button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
