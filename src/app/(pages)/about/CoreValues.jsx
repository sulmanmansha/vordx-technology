import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const CoreValues = () => {
  const coreValuesData = [
    {
      image: "/images/core1.png",
      title: "Innovation",
      description:
        "Innovation is at the heart of what we do — turning bold ideas into real solutions. We embrace creativity and challenge limits to build smarter, better ways",
    },
    {
      image: "/images/core2.png",
      title: "Integrity",
      description:
        "We act with honesty and accountability in everything we do. Our commitment to ethical practices earns the trust of our clients, partners, and team members.",
    },
    {
      image: "/images/core3.png",
      title: "Quality",
      description:
        "We deliver nothing short of exceptional quality. Every project is an opportunity to exceed expectations and drive impactful results for those we serve.",
    },
    {
      image: "/images/core4.png",
      title: "Agility",
      description:
        "We believe great things happen when diverse minds work together. Through open communication and shared goals, we build stronger, smarter solutions.",
    },
    {
      image: "/images/core5.png",
      title: "Collaboration",
      description:
        "Our clients’ needs shape our solutions. We listen, adapt, and innovate to deliver experiences that create meaningful value and long-term partnerships.",
    },
    {
      image: "/images/core6.png",
      title: "Customer Commitment",
      description:
        "We thrive on continuous learning, improvement, and evolving with the ever-changing digital landscape — always pushing for personal and professional.",
    },
  ];

  return (
    <div className="container-class p-5 sm:p-10 md:p-20 space-y-[45px]">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
          Core Values
        </h1>
        <p className="text-[20px] pro-normal leading-6 opacity-80 pt-4 max-w-[870px] w-full">
          We are guided by principles that shape our vision and define our
          commitment. Integrity, innovation, and excellence drive everything we
          do, ensuring a meaningful impact and lasting success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[45px]">
        {coreValuesData.map((item, index) => (
          <Slide key={index} direction="up" delay={index * 70}>
            <div className="bg-[url('/images/card-bg.svg')] bg-cover bg-center bg-no-repeat px-8 pt-8 pb-[42px] rounded-xl">
              <Image src={item.image} width={56} height={56} alt={item.title} />
              <h1 className="text-[28px] pro-semibold leading-8 pt-10 pb-4">
                {item.title}
              </h1>
              <p className="opacity-[72%] text-[18px] pro-normal leading-7">
                {item.description}
              </p>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
