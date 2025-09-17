"use client";

import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import React, { useState, useRef, useEffect } from "react";

const Faq = () => {
  // Set the first FAQ to be open by default
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you specialize in?",
      answer:
        "We specialize in custom software development, web and mobile app design, UI/UX design, e-commerce solutions, and ongoing support & maintenance.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline depends on the complexity of the project, but we typically provide an estimated timeline after evaluating your requirements.",
    },
    {
      question: "Do you offer redesign or upgrade for existing software?",
      answer:
        "Yes, we offer redesign and upgrade services for existing software to meet current industry standards and improve performance.",
    },
    {
      question: "What does your development process look like?",
      answer:
        "Our development process includes research, prototyping, testing, implementation, and ongoing support to ensure quality delivery.",
    },
    {
      question: "How do I share feedback?",
      answer:
        "Yes, we have successfully collaborated with clients from around the world. We provide tailored solutions for international businesses.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we have successfully collaborated with clients from around the world. We provide tailored solutions for international businesses.",
    },
  ];

  return (
    <div className="container-class p-5 md:px-20 md:py-[100px] bg-[#101215] overflow-hidden">
      <div className="flex flex-col justify-between md:flex-row md:items-start gap-5 sm:gap-[60px]">
        {/* Left Side Section (already created) */}

        <div className="max-w-[456px] w-full p-10 bg-[#282E39] rounded-[20px]">
          <Image src="/images/ceo-img.svg" width={64} height={64} alt="mes" />
          <div>
            <h1 className="text-[30px] sm:text-[44px] pt-6 pro-medium leading-8 sm:leading-[48px]">
              Book an intro call
            </h1>
            <p className="text-[20px] pro-medium leading-6 pt-6">
              Time to get introduced and explore how Vordx can help.
            </p>
            <Link href="/contact">
              <button className="py-3 px-4 cursor-pointer hover:bg-slate-100 hover:text-[#222] rounded-md bg-[#3E03B3] text-[20px] leading-6 pro-normal mt-7">
                Book a call
              </button>
            </Link>
          </div>
          <a href="mailto:vordxtechnologies@gmail.com">
            <div className="flex gap-[14px] items-center mt-[52px]">
              <Image
                src="/images/faq-mail.svg"
                width={48}
                height={48}
                alt="email icon"
                className="cursor-pointer"
              />

              <div>
                <p className="text-[#FFFFFF99] text-[14px] leading-5 pro-normal">
                  Do you prefer email communication?
                </p>
                <p className="text-[14px] leading-5 pro-medium ">
                  vordxtechnologies@gmail.com
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Right Side FAQ Section (Accordion) */}
        <div className="w-full max-w-[760px]">
          <p className="text-[36px] leading-[44px] pro-bold w-full max-w-[273px] pb-10">
            Frequently Asked Question
          </p>
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                direction="right"
                delay={index * 100}
                className=""
              >
                <div
                  className="py-3 cursor-pointer border-t border-b border-[rgba(255,255,255,0.12)]"
                  onClick={() => toggleAnswer(index)}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-[#FFFFFFCC] text-[18px] sm:text-[24px] pro-normal leading-6 sm:leading-[32px]">
                        {item.question}
                      </h3>
                      <span>
                        <Image
                          src={
                            isActive
                              ? "/images/minus-sign.png"
                              : "/images/plusfaq.svg"
                          }
                          width={isActive ? 25 : 32}
                          height={isActive ? 32 : 32}
                          alt="faq icon"
                        />
                      </span>
                    </div>

                    {/* Animated Answer Section */}
                    <div
                      className={`
                  overflow-hidden transition-all duration-300 ease-out
                  ${isActive ? "max-h-screen pt-3" : "max-h-0"}
                `}
                    >
                      <div className="opacity-[72%] text-[16px] pro-medium leading-6">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
