import HeroSection from "@/app/shared/HeroSection";
import React from "react";
import LatestBlogs from "./LatestBlogs";
import Trends from "./Trends";
import Faq from "@/app/shared/Faq";

const Blogs = () => {
  return (
    <div>
      <HeroSection
        title="NEWS"
        subtitle="Insights That Inspire Growth"
        buttonText="Explore Articles"
        smalltitle="Welcome to the Vordx Technologies Blog — your go-to source for the latest trends, expert insights, and innovative ideas shaping the digital world."
        imageSrc="/images/news.svg"
        imageAlt="news"
      />
      <LatestBlogs />
      <Trends />
      <Faq />
    </div>
  );
};

export default Blogs;
