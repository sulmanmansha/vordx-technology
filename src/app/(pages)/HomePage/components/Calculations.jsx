"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Button from "@/app/shared/Button";

const Calculations = () => {
  const [startCount, setStartCount] = useState(false);
  const [loopKeys, setLoopKeys] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        } else {
          setStartCount(false);
          setLoopKeys([0, 0, 0, 0]);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    {
      startValue: 10,
      endValue: 200,
      suffix: "+",
      duration: 15,
      step: 10,
      title: "Successful Projects",
      desc: "Decade-long journey shaping tech success stories across the globe.",
    },
    {
      startValue: 8,
      endValue: 98,
      suffix: "%",
      duration: 10,
      title: "Client Satisfaction",
      desc: "Trusted by businesses worldwide for quality, clarity, and commitment.",
    },
    {
      startValue: 1,
      endValue: 10,
      suffix: "+",
      duration: 5,
      title: "Years of Experience",
      desc: "Delivering innovative digital solutions with consistency and confidence.",
    },
    {
      startValue: 4,
      endValue: 40,
      suffix: "+",
      duration: 8,
      title: "Revenue Generated",
      desc: "High satisfaction rate from dedicated hard work, especially new visitors help.",
    },
  ];

  const handleOnEnd = (index) => {
    setLoopKeys((prevKeys) => {
      const newKeys = [...prevKeys];
      newKeys[index] = newKeys[index] + 1;
      return newKeys;
    });
  };

  return (
    <div
      ref={sectionRef}
      className="container-class px-[10px] md:px-10 lg:px-[140px] bg-[#101215] py-[10px] sm:py-20 grid lg:grid-cols-2 gap-10 lg:gap-24 text-white"
    >
      {/* Left */}
      <div className="flex flex-col justify-between">
        <div className="space-y-6 max-w-md">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-10 sm:leading-[50px] md:leading-[60px] pro-medium mb-2 lg:text-[48px]">
            Our journey <br /> of building success.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="opacity-80 text-[18px] pro-normal leading-6 max-w-[440px] max-[700px]:">
            We are a full-cycle product development company that combines
            creative thinking with technical.
          </p>

          <div className="flex lg:flex-1">
            <Button href="/contact" text="Let’s work together" />
          </div>
        </div>
      </div>

      {/* Right - Stats */}
      <div className="relative grid grid-cols-2 gap-x-10 gap-y-14">
        {/* Horizontal Divider */}
        <div
          className="absolute top-1/2 left-0 w-full h-px lg:block"
          style={{
            background:
              "linear-gradient(90deg, #14171C 0%, #80C614 54%, #14171C 100%)",
          }}
        />
        {/* Vertical Divider */}
        <div
          className="absolute left-1/2 top-0 h-full w-px lg:block"
          style={{
            background:
              "linear-gradient(180deg, #14171C 0%, #80C614 54%, #14171C 100%)",
          }}
        />

        {stats.map((stat, i) => (
          <div key={i} className="space-y-4 max-w-[260px]">
            <h3 className="text-[32px] md:text-[60px] font-bold leading-normal text-white">
              {startCount ? (
                <CountUp
                  key={loopKeys[i]}
                  start={stat.startValue}
                  end={stat.endValue}
                  suffix={stat.suffix || ""}
                  duration={stat.duration}
                  onEnd={() => handleOnEnd(i)}
                  formattingFn={(value) => {
                    // Check if the current stat has a `step` property
                    if (stat.step) {
                      const roundedValue = Math.floor(value / stat.step) * stat.step;
                      return `${roundedValue}${stat.suffix}`;
                    }
                    return `${Math.round(value)}${stat.suffix}`;
                  }}
                />
              ) : (
                `${stat.startValue}${stat.suffix}`
              )}
            </h3>
            <p className="text-[20px] font-medium leading-6">{stat.title}</p>
            <p className="text-[16px] text-[#D5D5D599] leading-5">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculations;