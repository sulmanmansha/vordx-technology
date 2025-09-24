import React from "react";
import "./Sponser.css";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonSponsor = () => (
  <div className="flex items-center justify-center px-5">
    <Skeleton
      width={160}
      height={60}
      baseColor="#1a1a1a"
      highlightColor="#333"
      borderRadius={8}
    />
  </div>
);

const Sponser = ({ data }) => {
  const shouldScroll = data?.length >= 8;
  const isLoading = !data || data.length === 0;

  return (
    <div className="overflow-hidden w-full my-2 container-class">
      <div
        className={`relative whitespace-nowrap py-5 ${
          shouldScroll ? "sponser-scroll" : "sponser-static"
        }`}
      >
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonSponsor key={i} />)
          : (shouldScroll ? [...data, ...data] : data).map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center justify-center px-5"
              >
                <Image
                  src={item.image_path}
                  width={160}
                  height={60}
                  alt="sponsor icon"
                  unoptimized
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Sponser;
