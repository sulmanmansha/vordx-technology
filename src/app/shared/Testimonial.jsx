"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
const testimonials = [
  {
    id: 1,
    companyLogo: "/images/copycrusher-icon.svg",
    text: "They brought our app redesign to life beyond expectations! We’re thrilled with the results and truly loved collaborating with their incredibly talented team.",
    name: "Eric Williams",
    role: "Founder and CEO, Copy Crushers",
    location: "New York, USA",
    image: "/images/trusted-img.svg",
  },
  {
    id: 2,
    companyLogo: "/images/metricwise.svg",
    text: "They brought our app redesign to life beyond expectations! We’re thrilled with the results and truly loved collaborating with their incredibly talented team.",
    name: "Varun Sharma",
    role: "Owner, Metricwise",
    location: "New York, USA",
    image: "/images/trusted-img.svg",
  },
  {
    id: 3,
    companyLogo: "/images/copycrusher-icon.svg",
    text: "Amazing work! The redesign exceeded our expectations and boosted customer engagement instantly.",
    name: "Sophia Lee",
    role: "CTO, XYZ Corp",
    location: "San Francisco, USA",
    image: "/images/trusted-img.svg",
  },
];
export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  // Start auto slide
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  const handleNext = () => {
    nextSlide();
    startAutoSlide();
  };
  const handlePrev = () => {
    prevSlide();
    startAutoSlide();
  };
  return (
    <section className=" text-white bg-[#14171C] p-4 md:p-20">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center mb-10">
          <span className="pro-medium ml-0 sm:ml-4 w-full max-w-[651px] text-[18px] leading-[25px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[60px]">
            Trusted by leaders from various industries
          </span>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="bg-[#FFFFFF1F] p-2 rounded-full "
            >
              <ArrowLeft size={26} color="#A1F919" />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#FFFFFF1F] p-2 rounded-full "
            >
              <ArrowRight size={26} color="#A1F919" />
            </button>
          </div>
        </div>
        {/* Carousel Wrapper */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current === testimonials.length - 1
                ? (current - 0.4) * 90
                : current * 80
                }%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[80%] pt-[15px] pb-4 pl-[12px] sm:pl-[39px] mr-8 bg-[#1D2025] rounded-xl shadow-lg overflow-hidden h-auto md:h-[563px]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Left Column */}
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <Image
                        src={item.companyLogo}
                        alt="logo"
                        width={167}
                        height={32}
                        className="mr-3 mt-5"
                      />
                    </div>
                    <p className="text-[16px] sm:text-[28px] leading-[18px] sm:leading-[32px] pro-normal mt-3 sm:mt-12">
                      “{item.text}”
                    </p>
                    <div className="flex flex-col relative h-full">
                      <div className="absolute left-0 top-[114px] flex flex-col gap-[6px]">
                        <h4 className="pro-medium text-[24px] leading-[28px]">
                          {item.name}
                        </h4>
                        <p className="text-[16px] text-[#FFFFFFA3] leading-[20px] pro-normal">
                          {item.role}
                        </p>
                        <p className="text-[16px] text-[#FFFFFFA3] leading-[20px] pro-normal">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Right Column */}
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={346}
                      height={532}
                      className="object-cover relative right-[19px] md:absolute"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}






