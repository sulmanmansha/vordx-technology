"use client";

import HeroSection from "@/app/shared/HeroSection";
import React, { useEffect, useState } from "react";
import ServiceOverview from "./ServiceOverview";
import Cards from "./Cards";
import UniqueFeatures from "./UniqueFeatures";
import Stack from "./Stack";
import Workflow from "./Workflow";
import Blogs from "@/app/shared/Blogs";
// import Testimonial from "@/app/shared/Testimonial";
import Contact from "@/app/shared/Contact";
// import Faq from "@/app/shared/Faq";
import { getServiceDetail } from "@/app/api/service/getServiceDetail";

const Detail = ({ slug }) => {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const fetchDetail = async () => {
      const res = await getServiceDetail(slug);
      if (res.data) {
        setDetail(res.data);
      }
      console.log("res", res);
    };

    fetchDetail();
  }, []);
  return (
    <div>
      <HeroSection
        title={detail?.service?.category}
        subtitle={detail?.service?.title}
        buttonText="Let’s work together"
        smalltitle={detail?.service?.short_description}
        imageSrc={detail?.service?.icon}
        imageAlt="Industries"
        navigationLink="/contact"
      />

      <div className="relative overflow-hidden">
        <div className="absolute -right-72 top-[40%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>

        <ServiceOverview detail={detail?.service} />

        <Cards serviceInfo={detail?.service_info} />
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute -left-72 top-[45%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>

        <UniqueFeatures feature={detail?.service_info} />
        {detail?.service_info?.length > 0 && (
          <Stack stack={detail.service_info} />
        )}
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute -right-72 top-[40%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
        <Workflow workflow={detail?.service_info} />
        <Blogs />
      </div>
      {/* <Testimonial /> */}
      <Contact />
      {/* <Faq /> */}
    </div>
  );
};

export default Detail;
