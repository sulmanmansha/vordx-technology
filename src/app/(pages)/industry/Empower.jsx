"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GetIndustry } from "@/app/api/industry/getIndustry";

// const [IscardData, setIsCardData] = useState()

const Empower = () => {
  const [industryData, setIndustryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetIndustry();

        if (res && Array.isArray(res)) {
          setIndustryData(res);
        } else if (res?.data && Array.isArray(res.data)) {
          setIndustryData(res.data);
        } else {
          toast.error("No industries found");
        }
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" md:mt-10">
      <div className="py-1 md:py-12 px-2.5 sm:px-10 lg:px-[80px] flex flex-col justify-center items-center text-center container-class">
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
            Industries We Empower
          </h1>
          <p className="text-[18px] pro-normal leading-6 opacity-80 pt-4 max-w-[714px] w-full">
            We partner with forward-thinking businesses across diverse sectors —
            crafting tailored digital experiences that drive growth, innovation,
            and real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-[30px] pt-10 md:pt-[52px]">
          {industryData.map((card) => (
            <div
              key={card.id}
              className="group bg-[#21212133] border border-[#FFFFFF1F] rounded-[20px] py-8 px-5 sm:px-[31px] hover:bg-[#3A3C40] hover:border-[#FFFFFF33] transition-all duration-300 relative overflow-hidden"
            >
              <Image
                src={card.icon}
                width={60}
                height={60}
                alt={card.title}
                className="transition-transform duration-300 group-hover:scale-x-[-1]"
              />

              <div className="pt-8 relative z-10">
                <h1 className="text-[24px] pro-medium capitalize leading-8 sm:leading-10 text-start pb-3">
                  {card.title}
                </h1>
                <p className="opacity-60 text-[14px] sm:text-[18px] pro-normal leading-6 sm:leading-7 text-start">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Empower;
