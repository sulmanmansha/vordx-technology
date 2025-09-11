"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { getBlog } from "@/app/api/blog/getBlog";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlog();
        if (response && response.data) {
          const latestThree = response.data.slice(0, 3);
          setBlogs(latestThree);
        } else {
          setError("Failed to fetch blogs");
        }
      } catch (err) {
        setError("An error occurred while fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="py-16 px-4 md:px-10 lg:px-[120px] space-y-8 container-class">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-[32px] md:text-[48px] pro-medium">
          Our latest Blogs
        </h2>

        {/* Custom Navigation Buttons */}
        <div className="flex gap-2">
          <button className="swiper-button-prev-custom w-11 h-11 rounded-md bg-[#3E03B3] flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.666 14.1666L7.49935 9.99992L11.666 5.83325"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="swiper-button-next-custom w-11 h-11 rounded-md bg-[#3E03B3] flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.33331 14.1666L12.5 9.99992L8.33331 5.83325"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full"
      >
        {blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center col-span-full py-10">
            <Image
              src="/images/no-blogs-state.png"
              alt="No blogs found"
              width={170}
              height={200}
              className="mb-4"
            />
            <h2 className="text-white text-center pro-normal text-[24px]">
              No Posts Available Yet
            </h2>
            <p className="text-white text-center pro-normal max-w-[300px]">

              Looks like we don’t have any posts here right now. Please visit again.

            </p>
          </div>
        ) : (
          blogs.map((blog) => (
            <SwiperSlide key={blog.slug}>
              <Link href={`/blogs/${blog.slug || blog.slug}`}>
                <div className="relative overflow-hidden rounded-xl cursor-pointer">
                  <Image
                    src={blog.image || "/images/default-blog.jpg"}
                    alt="blog"
                    width={1200}
                    height={600}
                    className="w-full h-[300px] md:h-[600px] object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  {/* Text */}
                  <div className="absolute bottom-6 left-6 right-6 text-white text-[32px] md:text-[48px] pro-medium leading-[56px]">
                    {blog.title}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default LatestBlogs;
