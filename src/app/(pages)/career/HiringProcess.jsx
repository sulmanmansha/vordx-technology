import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";

const cards = [
  {
    id: 1,
    icon: "/images/submit.svg",
    title: "Submit Your Application",
    description:
      "Fill out the online application form with your details and upload your resume. Our team reviews every application carefully.",
  },
  {
    id: 2,
    icon: "/images/interview.svg",
    title: "Interview & Assessment",
    description:
      "Qualified candidates will be invited for a virtual or in-person interview, followed by skills assessment to understand your fit for the role.",
  },
  {
    id: 3,
    icon: "/images/offer.svg",
    title: "Offer & Onboarding",
    description:
      "Successful candidates receive a job offer. Once accepted, we guide you through the onboarding process to get started smoothly.",
  },
];

const HiringProcess = () => {
  return (
    <div className="container-class p-5 sm:p-10 md:p-20 space-y-[60px]">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
          Our Hiring Process
        </h1>
        <p className="text-[20px] pro-normal leading-6 opacity-80 pt-4 max-w-[870px] w-full">
          We follow a simple and transparent hiring process to ensure we find
          the right talent efficiently and fairly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
        {cards.map((card) => {
          const cardContent = (
            <div
              className={`group px-8 pt-8 pb-[76px] rounded-[20px] hover:bg-[#3A3C40] hover:border-[#FFFFFF33] border border-[#FFFFFF1F] bg-[#FFFFFF14] space-y-8 transition-all duration-300 group-hover:bg-[#FFFFFF29] group-hover:border-[#FFFFFF33] h-full ${
                card.id === 1 || card.id === 3 ? "-z-[100]" : ""
              }`}
            >
              <Image
                src={card.icon}
                width={72}
                height={72}
                alt={card.title}
                className="transition-transform duration-300 group-hover:scale-x-[-1]"
              />
              <div className="space-y-4">
                <h1 className="text-[24px] pro-medium leading-7">
                  {card.title}
                </h1>
                <p className="text-[18px] pro-normal leading-6 opacity-[72%]">
                  {card.description}
                </p>
              </div>
            </div>
          );

          if (card.id === 1) {
            return (
              <Slide direction="right" key={card.id}>
                {cardContent}
              </Slide>
            );
          } else if (card.id === 3) {
            return (
              <Slide direction="left" key={card.id}>
                {cardContent}
              </Slide>
            );
          } else {
            return <div key={card.id}>{cardContent}</div>;
          }
        })}
      </div>
    </div>
  );
};

export default HiringProcess;
