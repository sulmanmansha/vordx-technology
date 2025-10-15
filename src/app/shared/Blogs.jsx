import React from "react";
import Button from "./Button";
import Image from "next/image";

const articles = [
  {
    image: "/images/article1.png",
    category: "Software Development",
    date: "1 Aug, 2025",
    title:
      "How Design Sprints Streamline Software Development and Boost Team Focus",
    width: 483,
    height: 316,
  },
  {
    image: "/images/article2.png",
    category: "UI/UX Design",
    date: "31 Jul, 2025",
    title: "How thoughtful UI/UX design shapes digital success",
    width: 329,
    height: 220,
  },
  {
    image: "/images/article3.png",
    category: "Culture",
    date: "31 Jul, 2025",
    title: "Building a culture that inspires creativity and collaboration",
    width: 329,
    height: 220,
  },
];

function Blogs() {
  return (
    <div className="py-5 md:py-20 px-4 md:px-[119px] max-w-[1440px] m-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] pro-medium">
            Our articles & blogs
          </h1>
          <h3 className="text-[#FFFFFF99] text-[16px] md:text-[18px] leading-6 mt-4">
            Discover expert tips, industry insights, and storis to inspire yours
            next big idea.
          </h3>
        </div>

        <div className="mt-8 md:mt-0">
          <Button href="/blogs" text="Explore Articles" />
        </div>
      </div>

      {/* cards-container layout */}
      <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`flex flex-col group pb-8 ${
              index === 1 ? "md:pt-[96px]" : ""
            }`}
          >
            <div className="overflow-hidden rounded-[20px]">
              <Image
                src={article.image}
                width={article.width}
                height={article.height}
                alt={article.title}
                className="w-full h-auto object-contain rounded-[20px] transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <p
              className={`article-title mt-4 ${index > 0 ? "flex start" : ""}`}
            >
              <span className=" text-[12px] pro-medium leading-4 text-[#A1F919] py-[5px] px-3 rounded-full border border-[#A1F919]">
                {article.category}
              </span>
            </p>
            <p className="article-description mt-4">{article.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
