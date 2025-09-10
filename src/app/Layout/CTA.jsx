"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../shared/Button";

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container-class relative px-[10px] md:px-20 py-12">
      <div
        className="relative rounded-[20px] overflow-hidden cards group border-line-effect"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="parent-container-for-hover relative z-10 bg-[url('/images/bggrid.svg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-r from-[#A1F91930] to-[#3E03B330] from-20% to-80% z-0 " />

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-[20px] md:px-[56px] py-[60px]">
            <div className="space-y-5 text-center md:text-left">
              <span className="text-[12px] pro-medium uppercase">
                / Contact us
              </span>
              <h1 className="text-[32px] md:text-[48px] pro-medium leading-[40px] md:leading-[60px] max-w-[466px]">
                Let's build something incredible together!
              </h1>
              <div>
                <Button
                  className="inline-flex"
                  href="/contact"
                  text=" Let's work together"
                />
              </div>
            </div>
            <div className="relative w-[300px] h-[300px]">
              <motion.div
                initial={{ y: -120, opacity: 0 }}
                animate={
                  isHovered
                    ? {
                        y: [-120, 0, 10, 0],
                        opacity: [0, 1, 1, 1],
                      }
                    : { y: 0, opacity: 1, scale: 1 }
                }
                className="absolute left-0 top-0" >
                <Image
                  src="/images/rectangle.png"
                  width={220}
                  height={220}
                  alt="Rectangle"
                />
              </motion.div>
              <motion.div
                initial={{ x: -120, y: -120, rotate: -135, opacity: 0 }}
                animate={
                  isHovered
                    ? {
                        x: [-120, -55, -50, -55, 0],
                        y: [-120, 25, 70, 25, 0],
                        rotate: [-135, -45, -45, -45, 0],
                        opacity: [0, 1, 1, 1, 1],
                        transition: {
                          duration: 0.7,
                          ease: "linear",
                          delay: 0.6,
                          times: [0, 0.2, 0.3, 0.7, 1],
                        },
                      }
                    : {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }
                }
                className="absolute right-0 top-0 origin-top-left"
              >
                <Image
                  src="/images/triangle.png"
                  alt="Triangle"
                  width={143}
                  height={89}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
