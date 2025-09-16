"use client";

import React, { Suspense, useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Sponser from "./components/Sponser";
import Technology from "./components/Technology";
import Calculations from "./components/Calculations";
// import ProductJourney from "./components/ProductJourney";
import OurHighlight from "./components/OurHighlight";
import Consultation from "./components/Consultation";
import Blogs from "../../shared/Blogs";
import Industries from "./components/Industries";
// import FieldTabs from "./components/FieldTabs";
import Testimonial from "../../shared/Testimonial";
import Faq from "../../shared/Faq";
// import BestTechnologies from "./components/BestTechnologies";
import { Rewards } from "@/app/api/Rewards";
//*lasyloading*//
const FieldTabs = React.lazy(() => import("./components/FieldTabs"));

const ProductJourney = React.lazy(() => import("./components/ProductJourney"));

const HomePage = () => {
  const [sliderData, setSliderData] = useState([]);
  const [sponserData, setSponserData] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const [sliderResponse, sponserResponse] = await Promise.all([
          Rewards("slider"),
          Rewards("sponser"),
        ]);

        setSliderData(sliderResponse?.data || []);
        setSponserData(sponserResponse?.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRewards();
  }, []);

  return (
    <div>
      <HeroSection data={sliderData} />
      <Sponser data={sponserData} />
      <Suspense fallback="please wait until page is load">
        <FieldTabs />
      </Suspense>
      <Technology />
      <Suspense fallback="please wait until pages is load">
        <ProductJourney />
      </Suspense>
      <Testimonial />
      <Industries />
      <div className="relative overflow-hidden">
        <div className="absolute -right-72 top-[15%] animate-ellipse">
          {/* <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div> */}
        </div>
        {/* <BestTechnologies /> */}
        <Calculations />
        <div className="absolute -left-72 top-[40%] animate-ellipse">
          {/* <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div> */}
        </div>
        <OurHighlight />
        <Faq />
        <Blogs />
        <Consultation />
      </div>
    </div>
  );
};

export default HomePage;
