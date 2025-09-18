import Navbar from "@/app/Layout/Header";
import Button from "@/app/shared/Button";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";

const HeroSection = ({ data }) => {
  const headings = [
    "Accelerating Productivity with AI-Powered Design Solutions",
    "Human-Centered Design Meets the Power of AI",
  ];

  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 3000 milliseconds = 3 seconds
    const interval = setInterval(() => {
      setIsFading(true);
      // 500 milliseconds = 0.5 seconds for the fade effect
      setTimeout(() => {
        setCurrentHeadingIndex(
          (prevIndex) => (prevIndex + 1) % headings.length
        );
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <div className="relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Shaded Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111520] to-[#0B101B] opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pb-16 sm:pb-[60px] container-class">
        <Navbar />

        <div className="flex flex-col justify-center items-center text-center gap-3 mt-10 sm:mt-20 mb-10 sm:mb-[106px] max-[500px]:mt-5 max-w-[928px] m-auto">
          <div>
            <span className="border border-[#FFFFFF1F] py-1.5 px-3 flex items-center justify-center gap-2 text-[#FFFFFF99] rounded-full">
              <Image src="/images/team.svg" width={12} height={12} alt="team" />
              <p className="tracking-[0.64px] uppercase leading-3 clash-medium text-[8px]">
                Dedicated development team
              </p>
            </span>
          </div>
          <h1
            className={`text-[35px] sm:text-[40px] md:text-[64px] lg:text-[68px] pro-medium leading-[45px] sm:leading-[50px] md:leading-[80px] text-white px-2 sm:px-0 transition-opacity duration-500 ease-in-out ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            {headings[currentHeadingIndex]}
          </h1>
          <p className="text-[#FFFFFF99] text-[16px] sm:text-[24px] pro-normal leading-7 md:leading-8 px-5 sm:px-0">
            We are a full-stack software agency transforming ideas into
            impactful digital <br className="hidden md:block" /> solutions. From
            web and mobile app development to intuitive UX UI design.
          </p>
          <div className="flex justify-center items-center gap-2 md:gap-[18px] mt-11 px-0 sm:px-0">
            <Button
              className="text-[12px]"
              href="/contact"
              text="Book Your Free Consultation"
            />

            <Link
              href="/work"
              className="pro-medium text-[12px] sm:text-[16px] leading-5 border border-[#A1F919] bg-transparent px-1 md:px-6 h-10 md:h-12 gap-2 rounded-[6px] flex justify-center items-center whitespace-nowrap text-[#A1F919] transition-colors duration-300 hover:border-[#fff] hover:bg-[rgba(255,255,255,0.20)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M8.5 17.1781V6.82812C8.5 6.54479 8.6 6.30729 8.8 6.11562C9 5.92396 9.23333 5.82812 9.5 5.82812C9.58333 5.82812 9.67083 5.84063 9.7625 5.86563C9.85417 5.89062 9.94167 5.92813 10.025 5.97813L18.175 11.1531C18.325 11.2531 18.4375 11.3781 18.5125 11.5281C18.5875 11.6781 18.625 11.8365 18.625 12.0031C18.625 12.1698 18.5875 12.3281 18.5125 12.4781C18.4375 12.6281 18.325 12.7531 18.175 12.8531L10.025 18.0281C9.94167 18.0781 9.85417 18.1156 9.7625 18.1406C9.67083 18.1656 9.58333 18.1781 9.5 18.1781C9.23333 18.1781 9 18.0823 8.8 17.8906C8.6 17.699 8.5 17.4615 8.5 17.1781Z"
                  fill="currentColor"
                />
              </svg>
              View our work
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {data && data.length > 0
            ? data.map((item) => (
                <div
                  key={item.id}
                  className="w-20 h-20 md:w-28 md:h-28 bg-[#FFFFFF0A] border border-[#FFFFFF14] rounded-2xl flex items-center justify-center p-3 sm:p-4 group [perspective:1000px]"
                >
                  <Image
                    src={item.image_path}
                    width={80}
                    height={80}
                    alt="hero icon"
                    className="max-w-full max-h-full object-contain group-hover:[transform:rotateY(180deg)] transition-transform duration-500 ease-in-out [transform-style:preserve-3d]"
                    unoptimized
                  />
                </div>
              ))
            : Array.from({ length: 5 }).map((_, i) => (
                <Skeleton
                  key={i}
                  width={112}
                  height={112}
                  baseColor="#FFFFFF0A"
                  highlightColor="#FFFFFF14"
                  borderRadius="1rem"
                />
              ))}
        </div>
        {/* chats-btn */}
        <Link href="/contact">
          <button className="chats-btn">
            Hi! Lets Chat
            <Image src="/images/emoji.jpeg" width={20} height={20} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
