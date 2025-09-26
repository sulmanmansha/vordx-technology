import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slide } from "react-awesome-reveal";
import Button from "..//../shared/Button";

const Mission = () => {
  return (
    <div className="p-5 sm:p-10 md:p-20 space-y-20 lg:space-y-[150px] container-class">
      {/* Mission Block */}
      <div className="flex items-center gap-10 lg:gap-20 max-[768px]:flex-col overflow-hidden">
        <Slide direction="left">
          <div className="w-full order-1 overflow-hidden group rounded-lg">
            <Image
              src="/images/mission.svg"
              width={550}
              height={400}
              alt="mission"
              className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </Slide>
        <Slide direction="right">
          <div className="space-y-6 w-full max-w-[527px] text-left order-2 max-[768px]:max-w-full">
            <h1 className="text-[30px] md:text-[40px] pro-semibold leading-[40px] md:leading-[56px]">
              Our Mission
            </h1>
            <p className="text-[14px] pro-normal leading-6 opacity-80">
              We craft meaningful digital experiences that help businesses
              transform and grow. Our team of experts works collaboratively to
              deliver solutions tailored to each client's unique goals. The
              interface we build is clean, responsive, and perfectly aligned
              with modern design principles to enhance user engagement.
              <br />
              <br />
              We recently redesigned our platform using a modern and responsive
              layout, and the improvement has been incredible. The user
              interface feels fresh, intuitive, and perfectly aligned with our
              brand’s purpose.
            </p>
            <Button className="inline-flex" href="#" text="See How We Work" />
          </div>
        </Slide>
      </div>

      {/* Vision Block */}
      <div className="flex items-center gap-10 lg:gap-20 max-[768px]:flex-col overflow-hidden">
        <Slide direction="left">
          <div className="space-y-6 w-full max-w-[527px] text-left order-2 max-[768px]:max-w-full">
            <h1 className="text-[30px] md:text-[40px] pro-semibold leading-[40px] md:leading-[56px]">
              Our Vision
            </h1>
            <p className="text-[14px] pro-normal leading-6 opacity-80">
              We envision a digital future where technology and creativity come
              together to empower businesses across industries. Our goal is to
              lead with innovation and deliver experiences that not only meet
              today’s needs but also anticipate tomorrow’s challenges. Every
              solution we create is built with purpose, scalability, and
              long-term impact in mind.
              <br />
              <br />
              We continuously refine our processes and design systems to stay
              ahead in a fast-changing digital landscape. Our vision is
              reflected in every project we deliver — modern, user-focused, and
              aligned with the evolving demands of the market.
            </p>
            <Button className="inline-flex" href="#" text="See How We Work" />
          </div>
        </Slide>
        <Slide direction="right">
          <div className="w-full order-1 overflow-hidden group rounded-lg">
            <Image
              src="/images/vision.svg"
              width={550}
              height={400}
              alt="vision"
              className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Mission;
