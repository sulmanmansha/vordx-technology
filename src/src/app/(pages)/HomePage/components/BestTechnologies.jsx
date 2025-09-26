import Image from "next/image";
import React from "react";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: "/images/tag1.svg", hoverIcon: "/images/tag1-hover.svg" },
      { name: "React", icon: "/images/tag2.svg", hoverIcon: "/images/tag2-hover.svg" },
      { name: "Astro", icon: "/images/tag3.svg", hoverIcon: "/images/tag3-hover.svg" },
      { name: "Angular", icon: "/images/tag4.svg", hoverIcon: "/images/tag4-hover.png" },
      { name: "Typescript", icon: "/images/tag5.svg", hoverIcon: "/images/tag5-hover.svg" },
      { name: "Expo", icon: "/images/tag6.svg", hoverIcon: "/images/tag6-hover.svg" },
      { name: "Svelte", icon: "/images/tag7.svg", hoverIcon: "/images/tag7-hover.svg" },
      { name: "Solid.js", icon: "/images/tag8.svg", hoverIcon: "/images/tag8-hover.svg" },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node.js", icon: "/images/tag9.svg", hoverIcon: "/images/tag9-hover.svg" },
      { name: "Python", icon: "/images/tag10.svg", hoverIcon: "/images/tag10-hover.svg" },
      { name: "Nest.js", icon: "/images/tag11.svg", hoverIcon: "/images/tag11-hover.svg" },
      { name: "Express.js", icon: "/images/tag12.svg", hoverIcon: "/images/tag12-hover.svg" },
      { name: "MySQL", icon: "/images/tag13.svg", hoverIcon: "/images/tag13-hover.svg" },
      { name: "PostgreSQL", icon: "/images/tag14.svg", hoverIcon: "/images/tag14-hover.svg" },
      { name: "Java", icon: "/images/tag15.svg", hoverIcon: "/images/tag15-hover.svg" },
      { name: "MongoDB", icon: "/images/tag16.svg", hoverIcon: "/images/tag16-hover.svg" },
      { name: "Redis", icon: "/images/tag17.svg", hoverIcon: "/images/tag17-hover.svg" },
      { name: "RabbitMQ", icon: "/images/tag18.svg", hoverIcon: "/images/tag18-hover.svg" },
      { name: "Django", icon: "/images/tag19.svg", hoverIcon: "/images/tag19-hover.svg" },
    ],
  },
  {
    category: "Productivity",
    items: [
      { name: "Figma", icon: "/images/tag20.svg", hoverIcon: "/images/tag20-hover.svg" },
      { name: "ClickUp", icon: "/images/tag22.svg", hoverIcon: "/images/tag22-hover.svg" },
      { name: "Slack", icon: "/images/tag23.svg", hoverIcon: "/images/tag23-hover.svg" },
    ],
  },
];

const BestTechnologies = () => {
  return (
    <div className="py-6 md:py-[88px] px-2.5 md:px-[140px] flex justify-start items-start text-start container-class">
      <div className="absolute right-40">
        <Image
          src="/images/shapesBG.svg"
          width={606}
          height={606}
          alt="shapesBG"
          className="w-full h-full"
        />
      </div>
      <div className="max-w-[1052px] w-full">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] leading-10 sm:leading-[50px] md:leading-[60px] pro-medium pb-[10px] md:pb-[60px] max-w-[763px] w-full ">
          Our best technologies for our clients
        </h1>

        <div className="space-y-10">
          {technologies.map((tech) => (
            <div key={tech.category} className="space-y-5">
              <h2 className="text-[24px] leading-6 md:text-[32px] md:leading-10 pro-medium">
                {tech.category}
              </h2>
              <div className="flex flex-wrap items-start gap-[22px]">
                {tech.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#222] rounded-2xl h-12 sm:h-[58px] technology-icon pl-2.5 pr-5 flex items-center justify-center gap-2.5 z-50 relative hover:bg-white"
                  >
                    <div className="image-container">
                      <Image
                        src={item.icon}
                        width={30}
                        height={30}
                        alt={item.name}
                        className="default-image"
                      />
                      {item.hoverIcon && (
                        <Image
                          src={item.hoverIcon}
                          width={30}
                          height={30}
                          alt={`${item.name} hover`}
                          className="hover-image"
                        />
                      )}
                    </div>
                    <div className="text-wrapper">
                      <span className="text-main pro-medium text-[16px] md:text-[20px] leading-6 text-[#FFFFFFF7]">
                        {item.name}
                      </span>
                      <span className="text-hover pro-medium text-[16px] md:text-[20px] leading-6 text-black">
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestTechnologies;