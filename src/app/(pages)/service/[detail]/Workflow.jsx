"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Workflow = ({ workflow = [], loading = false }) => {
  const workflowSection = workflow.find(
    (section) => section.section === "workflow"
  );

  const cardData =
    workflowSection?.content?.map((item, idx) => ({
      title: item.title,
      description: item.description,
      image: item.icon || "/images/default-icon.svg",
    })) || [];

  return (
    <section className="px-5 sm:px-10 md:px-20 py-10 md:py-[100px] space-y-20 container-class">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] w-full">
          {loading ? <Skeleton width={300} /> : workflowSection?.title}
        </h1>
        <p className="text-[18px] pro-normal leading-6 opacity-80 pt-4 max-w-[806px] w-full">
          {loading ? <Skeleton count={2} /> : workflowSection?.description}
        </p>
      </div>

      {/* Workflow Steps */}
      <div className="relative">
        {/* Divider Line */}
        {!loading && (
          <div className="hidden lg:block absolute top-[14px] left-0 right-0 h-[2px] bg-[#3A3B3D] z-0" />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 relative z-10">
          {(loading ? Array(4).fill({}) : cardData)?.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-start text-start pt-14"
            >
              {/* Dot */}
              {!loading && (
                <div className="absolute top-1 left-0">
                  <div className="w-6 h-6 bg-[#3F4540] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#A1F919] rounded-full" />
                  </div>
                </div>
              )}

              {/* Text Content */}
              <div>
                <h3 className="text-[18px] md:text-[28px] pro-normal leading-[33px] mb-4">
                  {loading ? <Skeleton width={150} /> : step?.title}
                </h3>
                <p className="text-[14px] md:text-[16px] pro-normal opacity-50 leading-5">
                  {loading ? <Skeleton count={3} /> : step?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
