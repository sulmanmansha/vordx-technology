import React from "react";
import Button from "./Button";
import Image from "next/image";

const articles = [
  {
    image: "/images/article1.svg",
    category: "Culture",
    date: "1 Aug, 2025",
    title: "Running design sprints to align your team and meet deadlines",
    width: 483,
    height: 316,
  },
  {
    image: "/images/article2.svg",
    category: "Software Development",
    date: "31 Jul, 2025",
    title: "Inside our rebranding process and what we learned from it",
    width: 329,
    height: 220,
  },
  {
    image: "/images/article3.svg",
    category: "Software Development",
    date: "31 Jul, 2025",
    title: "Choosing the right SaaS platform for your business",
    width: 329,
    height: 220,
  },
];

function Blogs() {
  return (
    <div className="py-5 md:py-20 px-4 md:px-[119px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <p className="text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] pro-medium">
            Our articles & blogs
          </p>
          <p className="text-[#FFFFFF99] text-[16px] md:text-[17px] leading-6 mt-4">
            Discover expert tips, industry insights, and stories to inspire your
            next big idea.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <Button href="" text="Explore Articles" />
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
            <p className={`article-title mt-4 ${index > 0 ? 'flex justify-between' : ''}`}>
              <span>{article.category}</span>
              <span className="article-date ml-3">{article.date}</span>
            </p>
            <p className="article-description mt-4">{article.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;