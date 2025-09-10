"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    src: "/images/fullstack1.jpg",
    title: "ADDRESSED",
    para: "Twinciti is an AI-powered platform designed to simplify your tasks, inspire creativity, and provide intelligent solutions.",
    tag: "DASHBOARD",
    date: "Technology & SaaS",
  },
  {
    id: 2,
    src: "/images/ui2.png",
    title: "Copy Crusher",
    para: "Copy Crusher is a smart app for automated trading — copy trades, manage risks, and connect with tools to save time and trade smarter.",
    tag: "DASHBOARD",
    date: "E-commerce & Retail",
  },
  {
    id: 3,
    src: "/images/ui3.png",
    title: "Enfin Libra",
    para: "Islamly is a spiritual and educational platform designed to connect students with qualified tutors for Quran learning,",
    tag: "DASHBOARD",
    date: "Technology & SaaS",
  },
  {
    id: 4,
    src: "/images/ui4.png",
    title: "Islamly App",
    para: "Islamly is a spiritual and educational platform designed to connect students with qualified tutors for Quran learning,",
    tag: "DASHBOARD",
    date: "Education",
  },
];

const FullStack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          className="w-full h-full relative group"
          initial={{ opacity: 0, y: 30 }} // Start hidden & slightly down
          animate={{ opacity: 1, y: 0 }} // Animate to visible
          transition={{ duration: 0.6, delay: index * 0.3 }} // Sequential delay
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            {/* Image */}
            <Image
              src={item.src}
              alt={item.title}
              width={603}
              height={450}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Black Gradient Overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-b from-[#0C0C0C05] to-[#000000DB]" />
            </div>

            {/* Hover Content Sliding from Bottom */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20">
              {/* Tags */}
              <div className="flex justify-between mb-4">
                <span className="bg-[#0000007A] px-4 py-2 rounded-full pro-normal text-[12px] sm:text-[16px] leading-5 text-white">
                  {item.tag}
                </span>
                <span className="bg-[#0000007A] px-4 py-2 rounded-full pro-normal text-[12px] sm:text-[16px] leading-5 text-white">
                  {item.date}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-[20px] md:text-[40px] font-bold leading-12 text-white">
                  {item.title}
                </h3>
                <p className="mt-[10px] text-[16px] md:text-[18px] pro-normal leading-6 text-white">
                  {item.para}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FullStack;