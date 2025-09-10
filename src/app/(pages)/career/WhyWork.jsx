import Image from "next/image";
import React from "react";

const WhyWork = () => {
  const cardData = [
    {
      icon: "/images/whyCard1.svg",
      title: "Flexible Work Environment",
      description:
        "Work from anywhere or in our creative studio. We focus on results, not routines, giving you the freedom to work your way.",
    },
    {
      icon: "/images/whyCard2.svg",
      title: "Growth & Learning",
      description:
        "Fuel your professional development with access to curated courses, hands-on workshops, and one-on-one mentorship.",
    },
    {
      icon: "/images/whyCard3.svg",
      title: "Collaborative Culture",
      description:
        "Be part of a supportive, feedback-driven environment where great ideas are shared, celebrated, and brought to life — together.",
    },
    {
      icon: "/images/whyCard4.svg",
      title: "Competitive Compensation",
      description:
        "We recognize your value and offer packages that reward your skills, dedication, and growth over time.",
    },
    {
      icon: "/images/whyCard5.svg",
      title: "Cutting-Edge Projects",
      description:
        "Take on exciting challenges and contribute to real-world solutions using the latest tools, trends, and technologies.",
    },
    {
      icon: "/images/whyCard6.svg",
      title: "Health & Wellness Support",
      description:
        "Stay balanced with benefits that prioritize your physical, mental, and emotional well-being — in and out of work.",
    },
  ];

  return (
    <div className="container-class p-5 sm:p-10 md:p-20 space-y-[60px]">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
          Why work with us
        </h1>
        <p className="text-[20px] pro-normal leading-6 opacity-80 pt-4 max-w-[870px] w-full">
          Discover a workplace where innovation thrives, collaboration is
          valued, and your growth is part of our mission.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="p-8 space-y-4 rounded-2xl flex flex-col items-center justify-center text-center border border-transparent group hover:border-[#A1F9193D] transition-all duration-300 relative overflow-hidden" >
            <div className="p-5 rounded-2xl border border-[#FFFFFF14] bg-[#FFFFFF14] mb-4">
              <Image
                src={item.icon}
                width={32}
                height={32}
                alt={`card-icon-${index}`}
              />
            </div>

            {/* Hover Blurs */}
            <div className="absolute z-0 -top-10 -left-40 w-[275px] h-[277px] bg-[#A1F9191F] rounded-full blur-[120px] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"></div>
            <div className="absolute z-0 -bottom-10 -right-40 w-[275px] h-[277px] bg-[#A1F9191F] rounded-full blur-[120px] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"></div>

            <h1 className="text-[24px] pro-medium leading-7 max-w-[348px] w-full">
              {item.title}
            </h1>

            <p className="opacity-[72%] text-[18px] pro-normal leading-6 max-w-[384px] w-full">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWork;
