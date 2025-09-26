"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "../../../shared/Button";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const ServiceOverview = ({ detail }) => {
  const [startCount, setStartCount] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  const stats = [
    {
      value: 96,
      suffix: "%",
      title: "Client Satisfaction Rate",
    },
    {
      value: 150,
      suffix: "+",
      title: "Projects Delivered",
    },
    {
      value: 90,
      suffix: "%",
      title: "Repeat Clients",
    },
  ];

  return (
    <div className="container-class p-5 sm:p-10 md:p-20 space-y-20">
      <div className="flex flex-col items-center text-center">
        {detail?.overview_main_title ? (
          <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
            {detail.overview_main_title}
          </h1>
        ) : (
          <Skeleton height={50} width={500} baseColor="#333" highlightColor="#555" />
        )}

        {detail?.overview_short_description ? (
          <p className="text-[20px] pro-normal leading-6 opacity-80 pt-4 max-w-[870px] w-full">
            {detail.overview_short_description}
          </p>
        ) : (
          <Skeleton height={20} width={600} baseColor="#333" highlightColor="#555" />
        )}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 h-full">
        {detail?.overview_image ? (
          <Image
            src={detail.overview_image}
            width={472}
            height={480}
            alt="service"
          />
        ) : (
          <Skeleton height={480} width={472} baseColor="#333" highlightColor="#555" />
        )}

        <div className="flex flex-col items-start justify-between h-full">
          <div>
            {detail?.overview_title ? (
              <h1 className="text-[32px] pro-medium leading-10">
                {detail.overview_title}
              </h1>
            ) : (
              <Skeleton height={40} width={300} baseColor="#333" highlightColor="#555" />
            )}

            {detail?.overview_description ? (
              <p className="opacity-80 text-[18px] pro-normal leading-7 pt-4 pb-10">
                {detail.overview_description}
              </p>
            ) : (
              <>
                <Skeleton height={20} width={500} baseColor="#333" highlightColor="#555" />
                <Skeleton height={20} width={450} baseColor="#333" highlightColor="#555" />
              </>
            )}

            <Button className="inline-flex" text="See Our Work" />
          </div>

          <div className="pt-24">
            <div
              className="flex items-center justify-center md:divide-x-2 md:divide-[#FFFFFF52]"
              ref={ref}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-2 text-start ${
                    i === 0
                      ? "md:pr-8"
                      : i === stats.length - 1
                      ? "md:pl-8"
                      : "md:px-8"
                  }`}
                >
                  <h1 className="text-[26px] md:text-[32px] pro-semibold leading-[56px]">
                    {startCount ? (
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={4}
                        decimals={0}
                      />
                    ) : (
                      <Skeleton height={40} width={80} baseColor="#333" highlightColor="#555" />
                    )}
                  </h1>
                  <p className="text-[12px] md:text-[14px] pro-medium leading-[18px]">
                    {stat.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
