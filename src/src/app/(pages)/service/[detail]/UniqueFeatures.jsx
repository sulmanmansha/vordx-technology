import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";

const UniqueFeatures = ({ feature = [] }) => {
  // Find the section-level title/description
  const featureSection = feature.find(
    (section) => section.section === "feature"
  );

  // Extract individual cards (from content array)
  const cardData =
    featureSection?.content?.map((item, idx) => ({
      title: item.title,
      description: item.description,
      image: item.icon || "/images/default-icon.svg",
    })) || [];

  return (
    <div className="mt-[120px] border-t border-[#FFFFFF66]">
      <div className="container-class p-5 sm:p-10 md:p-20 space-y-20">
        <div className="flex items-center justify-between">
          <h1 className="text-[30px] lg:text-[48px] pro-medium leading-10 lg:leading-[60px] max-w-[540px] w-full">
            {featureSection?.title}
          </h1>
          <p className="text-[18px] pro-normal leading-7 opacity-60 pt-4 max-w-[465px] w-full">
            {featureSection?.description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => {
            const content = (
              <div className="space-y-10">
                <Image src={card.image} width={72} height={72} alt="unique" />
                <div className="space-y-4">
                  <h1 className="text-[24px] pro-medium leading-7 w-full max-w-64">
                    {card.title}
                  </h1>
                  <p className="text-[18px] pro-normal leading-[22px] opacity-60">
                    {card.description}
                  </p>
                </div>
              </div>
            );

            return index === 0 ? (
              <div key={index}>{content}</div> 
            ) : (
              <Slide key={index} direction="left" delay={(index + 1) * 100}>
                {content}
              </Slide>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;
