import React from "react";
import Image from "next/image";
import Button from "@/app/shared/Button";
function Consultation() {
  const consultationdata = [
    {
      country: "USA",
      icon: "/images/consulation1.svg",
      address: "145 G, Sector G Dha Phase 1, Lahore, 54810",
      address_title: "Address",
      phone_title: "Phone No",
      phone_no: "+92 324 0110040",
      width: "84",
      height: "84",
    },
    {
      country: "UK",
      icon: "/images/consulation2.svg",
      address: "145 G, Sector G Dha Phase 1, Lahore, 54810",
      address_title: "Address",
      phone_title: "Phone No",
      phone_no: "+92 324 0110040",
      width: "84",
      height: "84",
    },
    {
      country: "Pakistan",
      icon: "/images/consulation3.svg",
      address: "145 G, Sector G Dha Phase 1, Lahore, 54810",
      address_title: "Address",
      phone_title: "Phone No",
      phone_no: "+92 324 0110040",
      width: "84",
      height: "84",
    },
  ];
  return (
    <div className="py-5 md:py-20 px-4 md:px-28 flex flex-col lg:flex-row justify-between lg:gap-20">
      {/* left-content */}
      <div className="w-full md:max-w-[583px]">
        <p className="text-[28px] md:text-[48px] leading-[34px] md:leading-[60px] pro-semibold text-[#fff]">
          Got a project in mind? Let’s bring it to life.
        </p>
        <p className="text-[16px] md:text-[18px] leading-7 text-[#FFFFFF99] pro-normal mt-5">
          Get one-on-one guidance from our team of experts.From idea to
          execution, we’re with you all the way.
        </p>
        <Button
          className="mt-8 md:mt-[60px] inline-flex"
          href=""
          text="Book Your Free Consultation"
        />
      </div>
      {/* right-content */}
      <div className="flex flex-col gap-[40px] mt-12 md:mt-0">
        {consultationdata.map((consultation, index) => {
          return (
            <div key={index}>
              <div className="">
                <div className="flex gap-3 items-start max-[500px]:flex-col">
                  <Image
                    src={consultation.icon}
                    width={consultation.width}
                    height={consultation.height}
                    alt=""
                    className=""
                  />
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[20px] leading-6 pro-semibold">
                      {consultation.country}
                    </p>
                    <p>
                      <span className="text-[16px] text-[#fff] leading-5 pro-semibold">
                        {consultation.address_title}
                      </span>
                      <span className="text-[#FFFFFFB8] text-[16px] leading-7 pro-normal pl-1">
                        {consultation.address}
                      </span>
                    </p>
                    <p>
                      <span className="text-[16px] leading-5 pro-semibold">
                        {consultation.phone_title}
                      </span>
                      <span className="text-[#FFFFFFB8] text-[16px] leading-7 pro-normal pl-1">
                        {consultation.phone_no}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Consultation;