import React from "react";
import Image from "next/image";

function OurHighlight() {
  return (
    <div className="pt-[78px] pr-[100px] pb-[117px] pl-[100px] max-[700px]:pt-5 max-[700px]:pr-5 max-[700px]:pb-5 max-[700px]:pl-5 ">
      {/* Main container with flex layout */}
      <div className="flex flex-col md:flex-row md:justify-between gap-[30px] md:gap-[59px] max-w-[1440px] m-auto">
        {/* Left content: "Our highlights" and menu items */}
        <div className="w-full md:max-w-[299px]">
          <p className="pro-semibold font-48 leading-[60px]">
            Our highlights
          </p>
          <div className="flex flex-col gap-[15px] mt-20 max-[500px]:mt-5 max-[500px]:gap-0">
            <p className="heightlight-heading rounded-l-[100px] bg-gradient-to-r from-[rgba(161,249,25,0.60)] to-[rgba(62,3,179,0.00)]">
              Client Stories
            </p>
            <p className="heightlight-heading">Events & Meetups</p>
            <p className="heightlight-heading">Inside Vordx</p>
          </div>
        </div>

        {/* Right content: All the cards */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-8 justify-between w-full mt-10 md:mt-0">
          {/* Large Card on the Left */}
          <div className="flex flex-col gap-4 w-full md:max-w-[422px] md:mt-[140px]">
            <Image
              src="/images/heighlight-card1.svg"
              width={422}
              height={248}
              alt="James Fulton"
              className="w-full h-auto object-contain rounded-2xl"
            />
            <p className="font-32 leading-10 pro-normal">
              James Fulton shares his journey scaling with Vordx...
            </p>
          </div>

          {/* Small Cards on the Right */}
          <div className="flex flex-col gap-[57px] w-full md:max-w-[372px]">
            {/* Top right card */}
            <div className="flex flex-col gap-3 w-full">
              <Image
                src="/images/heighlight-card2.svg"
                width={372}
                height={212}
                alt="Vordx Reviews"
                className="w-full h-auto object-contain rounded-2xl"
              />
              <p className="font-32 leading-10 pro-normal">
                Vordx Reviews & Testimonials Insights from...
              </p>
            </div>
            {/* Bottom right card */}
            <div className="flex flex-col gap-3 w-full">
              <Image
                src="/images/heighlight-card3.svg"
                width={372}
                height={212}
                alt="Karen Agresti"
                className="w-full h-auto object-contain rounded-2xl"
              />
              <p className="font-32 leading-10 pro-normal">
                What our partners are saying Karen Agresti on c...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurHighlight;
