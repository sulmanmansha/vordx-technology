import Image from "next/image";
import { useState, useEffect } from "react";

const Stack = ({ stack = [] }) => {
  const [loading, setLoading] = useState(true);

  // Data ready hone pe loading false karna
  useEffect(() => {
    if (stack && stack.length > 0) {
      setLoading(false);
    }
  }, [stack]);

  // Find the section-level title/description
  const stackSection = stack.find((section) => section.section === "stack");

  // Extract individual cards
  const cardData =
    stackSection?.content?.map((item) => ({
      title: item.title,
      description: item.description,
      image: item.icon || "/images/default-icon.svg",
    })) || [];

  // ✅ If no section or no content, hide the whole block
  if (!stackSection || cardData.length === 0) {
    return null;
  }

  return (
    <div className="px-5 sm:px-10 lg:px-[147px] py-[70px] space-y-[60px]">
      <div className="flex flex-col items-center text-center">
        {loading ? (
          // Skeleton title + paragraph
          <div className="animate-pulse w-full flex flex-col items-center">
            <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        ) : (
          <>
            <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
              {stackSection?.title}
            </h1>
            <p className="text-[20px] pro-normal leading-6 opacity-80 pt-4 max-w-[806px] w-full">
              {stackSection?.description}
            </p>
          </>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-[88px] max-w-[892px] w-full m-auto">
        {loading
          ? // Skeletons for logos
            Array(6)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="w-[52px] h-[96px] bg-gray-300 animate-pulse rounded"
                ></div>
              ))
          : cardData.map((card, idx) => (
              <Image
                key={idx}
                src={card?.image || "/images/stack12.svg"}
                width={52}
                height={96}
                alt="stackLogo"
              />
            ))}
      </div>
    </div>
  );
};

export default Stack;
