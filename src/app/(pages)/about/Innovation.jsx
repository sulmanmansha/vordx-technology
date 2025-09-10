"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Calculations = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  const stats = [
    {
      value: 200,
      suffix: "+",
      title: "Successful Projects",
      desc: "Decade-long journey shaping tech success stories across the globe.",
    },
    {
      value: 99,
      suffix: "%",
      title: "Client Satisfaction",
      desc: "Trusted by businesses worldwide for quality, clarity, and commitment.",
    },
    {
      value: 10,
      suffix: "+",
      title: "Years of Experience",
      desc: "Delivering innovative digital solutions with consistency and confidence.",
    },
    {
      value: 20,
      prefix: "$",
      suffix: "k+",
      title: "Revenue Generated",
      desc: "High satisfaction rate from dedicated hard work, especially new visitors help.",
    },
  ];

  return (
    <div
      ref={ref}
      className="container-class px-4 md:px-10 lg:px-[80px] py-5 sm:py-16 grid lg:grid-cols-2 gap-10 lg:gap-24 text-white"
    >
      <div className="flex flex-col justify-between">
        <div className="space-y-6 max-w-md">
          <h2 className="text-[30px] md:text-[36px] lg:text-[48px] pro-medium leading-[60px]">
            Our journey  of building success.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-[#ffffffcc] text-[16px] leading-[28px] max-w-[440px]">
            We are a full-cycle product development company that combines
            creative thinking with technical.
          </p>

          <Link
            href="/contact"
            className="mt-10 md:mt-20 w-fit primary-btn z-10"
          >
            Let’s work together
          </Link>
        </div>
      </div>

      <div className="relative grid grid-cols-2 gap-x-10 gap-y-14">
        <div
          className="absolute top-1/2 left-0 w-full h-px hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, #14171C 0%, #80C614 54%, #14171C 100%)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-full w-px hidden lg:block"
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
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={4}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                  prefix={stat.prefix || ""}
                />
              ) : (
                `${stat.prefix || ""}${stat.value}${stat.suffix}`
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
