import React, { useState } from "react";
import Image from "next/image";

// Define the content for each menu item
const cardData = {
  "Client Stories": [
    {
      id: 1,
      imageSrc: "/images/heighlight-card1.svg",
      imageWidth: 422,
      imageHeight: 248,
      text: "James Fulton shares his journey scaling with Vordx...",
      isLarge: true,
    },
    {
      id: 2,
      imageSrc: "/images/heighlight-card2.svg",
      imageWidth: 372,
      imageHeight: 212,
      text: "Vordx Reviews & Testimonials Insights from...",
      isLarge: false,
    },
    {
      id: 3,
      imageSrc: "/images/heighlight-card3.svg",
      imageWidth: 372,
      imageHeight: 212,
      text: "What our partners are saying Karen Agresti on c...",
      isLarge: false,
    },
  ],
  "Events & Meetups": [
    {
      id: 4,
      imageSrc: "/images/designer1.jpeg",
      imageWidth: 422,
      imageHeight: 248,
      text: "Future-Proofing Your Business: Vordx at the Tech Summit...",
      isLarge: true,
    },
    {
      id: 5,
      imageSrc: "/images/designer1.jpeg",
      imageWidth: 372,
      imageHeight: 212,
      text: "Vordx Hosts Exclusive AI-Powered Solutions Workshop...",
      isLarge: false,
    },
    {
      id: 6,
      imageSrc: "/images/designer1.jpeg",
      imageWidth: 372,
      imageHeight: 212,
      text: "Networking with the Best: A Recap of Our Last Meetup...",
      isLarge: false,
    },
  ],
  "Inside Vordx": [
    {
      id: 7,
      imageSrc: "/images/developer3.jpeg",
      imageWidth: 422,
      imageHeight: 248,
      text: "Meet the Team: A Day in the Life of a Vordx Engineer...",
      isLarge: true,
    },
    {
      id: 8,
      imageSrc: "/images/developer3.jpeg",
      imageWidth: 372,
      imageHeight: 212,
      text: "Our Values in Action: The Vordx Culture and Vision...",
      isLarge: false,
    },
    {
      id: 9,
      imageSrc: "/images/developer3.jpeg",
      imageWidth: 372,
      imageHeight: 212,
      text: "Innovation Hub: What's Next for Vordx's R&D Department...",
      isLarge: false,
    },
  ],
};

function OurHighlight() {
  const [activeItem, setActiveItem] = useState("Client Stories");
  const [showCards, setShowCards] = useState(true);

  const handleItemClick = (itemName) => {
    // Fade out the cards
    setShowCards(false);
    setTimeout(() => {
      setActiveItem(itemName);
      setShowCards(true);
    }, 200);
  };

  const currentCards = cardData[activeItem];
  const largeCard = currentCards.find((card) => card.isLarge);
  const smallCards = currentCards.filter((card) => !card.isLarge);

  return (
    <div className="pt-[78px] pr-[100px] pb-[117px] pl-[100px] max-[700px]:pt-5 max-[700px]:pr-5 max-[700px]:pb-5 max-[700px]:pl-5 max-w-[1440px] m-auto ">
      <div className="flex flex-col md:flex-row md:justify-between gap-[30px] md:gap-[59px]">
        {/* Left content: "Our highlights" and menu items */}
        <div className="w-full md:max-w-[299px]">
          <p className="pro-semibold font-48 leading-[60px]">Our highlights</p>
          <div className="flex flex-col gap-[15px] mt-20 max-[500px]:mt-5 max-[500px]:gap-0">
            {["Client Stories", "Events & Meetups", "Inside Vordx"].map(
              (item) => (
                <p
                  key={item}
                  className={`heightlight-heading rounded-l-[100px] cursor-pointer ${
                    activeItem === item
                      ? "bg-gradient-to-r from-[rgba(161,249,25,0.60)] to-[rgba(62,3,179,0.00)]"
                      : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>

        {/* Right content: Dynamically rendered cards with opacity transition */}
        <div
          className={`flex flex-col lg:flex-row gap-8 md:gap-8 justify-center w-full mt-10 md:mt-0 transition-opacity duration-300 ease-in-out ${
            showCards ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Large card */}
          {largeCard && (
            <div className="flex flex-col gap-4 w-full md:max-w-[422px] md:mt-[140px]">
              <Image
                src={largeCard.imageSrc}
                width={largeCard.imageWidth}
                height={largeCard.imageHeight}
                alt={largeCard.text}
                className="w-full h-auto object-contain rounded-2xl"
              />
              <p className="font-32 leading-10 pro-normal">{largeCard.text}</p>
            </div>
          )}

          {/* Small Cards */}
          <div className="flex flex-col gap-[57px] w-full md:max-w-[372px]">
            {smallCards.map((card) => (
              <div key={card.id} className="flex flex-col gap-3 w-full">
                <Image
                  src={card.imageSrc}
                  width={card.imageWidth}
                  height={card.imageHeight}
                  alt={card.text}
                  className="w-full h-auto object-contain rounded-2xl"
                />
                <p className="font-32 leading-10 pro-normal">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurHighlight;
