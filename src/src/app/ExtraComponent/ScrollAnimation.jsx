"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Step 01",
    description:
      "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals.",
    heading: "Ideate the process",
    content: (
      <div className="h-full w-full">
        <Image src="/images/test1.png" className="w-full h-full" width={300} height={352} alt="tests" />
      </div>
    ),
  },
  {
    title: "Step 02",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time.",
    heading: "Ideate the process",
    content: (
      <div className="h-full w-full">
        <Image src="/images/test2.png" className="w-full h-full" width={300} height={352} alt="tests" />
      </div>
    ),
  },
  {
    title: "Step 03",
    description:
      "Experience real-time updates and never stress about version control again.",
    heading: "Ideate the process",
    content: (
      <div className="h-full w-full">
        <Image src="/images/test3.png" className="w-full h-full" width={300} height={352} alt="tests" />
      </div>
    ),
  },
  {
    title: "Step 04",
    description:
      "Experience real-time updates and never stress about version control again.",
    heading: "Ideate the process",
    content: (
      <div className="h-full w-full">
        <Image src="/images/test4.png" className="w-full h-full" width={300} height={352} alt="tests" />
      </div>
    ),
  },
  {
    title: "Step 05",
    description:
      "Experience real-time updates and never stress about version control again.",
    heading: "Ideate the process",
    content: (
      <div className="h-full w-full">
        <Image src="/images/test5.png" className="w-full h-full" width={300} height={352} alt="tests" />
      </div>
    ),
  },
];
export function ScrollAnimation() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
