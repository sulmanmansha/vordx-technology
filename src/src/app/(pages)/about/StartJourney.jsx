"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "../../shared/Button";
import { useInView } from "react-intersection-observer";

const StartJourney = () => {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [clientRevenue, setClientRevenue] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const animateCount = (setter, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 10);

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setter(target);
            clearInterval(timer);
          } else {
            setter(Math.ceil(start));
          }
        }, 10);
        return () => clearInterval(timer);
      };

      animateCount(setProjectsCompleted, 150);
      animateCount(setClientSatisfaction, 100);

      const targetRevenue = 10;
      let startRevenue = 0;
      const incrementRevenue = targetRevenue / (2000 / 10);

      const revenueTimer = setInterval(() => {
        startRevenue += incrementRevenue;
        if (startRevenue >= targetRevenue) {
          setClientRevenue(targetRevenue);
          clearInterval(revenueTimer);
        } else {
          setClientRevenue(Math.ceil(startRevenue));
        }
      }, 10);
      return () => {
        clearInterval(revenueTimer);
      };
    }
  }, [inView]);

  return (
    <div className="container-class p-5 sm:p-10 md:p-20">
      <div className="flex flex-col md:flex-row md:items-end gap-3 justify-between">
        <h1 className="sm:max-w-[557px] w-full text-[30px] md:text-[48px] pro-medium leading-[40px] md:leading-[56px]">
          Empowering your business through expert advice
        </h1>
        <Button href="#" text="Start Your Journey" />
      </div>

      <div className="w-full h-full pt-[50px] overflow-hidden group rounded-2xl">
        <Image
          src="/images/journey.svg"
          width={1200}
          height={600}
          alt="journey"
          className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      <div ref={ref} className="pt-20">
        <div className="flex items-center justify-center md:divide-x-2 md:divide-[#FFFFFF33]">
          <div className="flex flex-col gap-3 text-start md:pr-[100px]">
            <h1 className="text-[36px] md:text-[48px] pro-semibold leading-[56px]">
              {projectsCompleted}+
            </h1>
            <p className="text-[16px] md:text-[20px] pro-normal leading-[26px]">
              Project Completed
            </p>
          </div>
          <div className="flex flex-col gap-3 text-start px-5 md:px-[100px]">
            <h1 className="text-[36px] md:text-[48px] pro-semibold leading-[56px]">
              {clientSatisfaction}%
            </h1>
            <p className="text-[16px] md:text-[20px] pro-normal leading-[26px]">
              Client Satisfaction
            </p>
          </div>
          <div className="flex flex-col gap-3 text-start md:pl-[100px]">
            <h1 className="text-[36px] md:text-[48px] pro-semibold leading-[56px]">
              {clientRevenue}M+
            </h1>
            <p className="text-[16px] md:text-[20px] pro-normal leading-[26px]">
              Client Revenue Raised
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
