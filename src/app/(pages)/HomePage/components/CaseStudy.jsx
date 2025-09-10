import Image from "next/image";
import React from "react";

const CaseStudy = () => {
  return (
    <div className="container-class md:mt-5 py-10 px-2.5 md:px-14 xl:px-[120px]">
      <div className="text-center px-2 md:px-0">
        <h1 className="font-48 pro-medium leading-10 md:leading-[60px] text-[#222222]">
          Building digital experiences that <br /> inspire and deliver results
        </h1>
        <p className="font-18 pro-normal leading-6 text-[#22222299] pt-4">
          Explore our success stories & discover how we’ve helped businesses
          like yours overcome challenges
        </p>
        <div className="pt-6 flex justify-center items-center flex-wrap gap-3 text-[#00000099] opacity-60 font-16 pro-normal leading-5">
          <span className="border border-[#00000099] rounded-full py-2 px-4">
            UI & UX
          </span>
          <span className="border border-[#00000099] rounded-full py-2 px-4">
            Front-end
          </span>
          <span className="border border-[#00000099] rounded-full py-2 px-4">
            Back-end
          </span>
          <span className="border border-[#00000099] rounded-full py-2 px-4">
            Full stack
          </span>
          <span className="border border-[#00000099] rounded-full py-2 px-4">
            Mobile app
          </span>
        </div>
      </div>

      <div className="mt-11 space-y-[48px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-[60px] rounded-lg bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] py-8 md:py-0 px-3 md:px-8 lg:pl-[60px] lg:pr-0">
          <div className="md:py-10">
            <Image
              src="/images/metutor-logo.svg"
              width={252}
              height={44}
              alt="metutor-logo"
            />
            <h1 className="font-40 pro-medium leading-10 md:leading-[48px] opacity-80 pt-7">
              Personalized E-learning with expert tutors
            </h1>
            <div className="pt-10 flex items-center flex-wrap gap-3 text-[#12112C] font-12 pro-normal leading-4">
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                Online Education
              </span>
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                E-learning
              </span>
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                One to one tutoring
              </span>
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                Homework help
              </span>
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                Uni prep
              </span>
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                Advance courses
              </span>
            </div>
            <div className="pt-10">
              <button className="font-16 pro-medium leading-5 px-4 py-3 bg-[#05194A] rounded-lg gap-1 flex justify-center items-center text-white">
                View case study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5.28607 5.28595L5.28607 6.94766L11.8681 6.95355L4.69681 14.1248L5.87532 15.3033L13.0466 8.13206L13.0525 14.714L14.7142 14.714V5.28595H5.28607Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full h-full">
            <Image
              src="/images/metutor-img.svg"
              width={580}
              height={500}
              alt="metutor-img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-[60px] rounded-lg bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] py-8 md:py-0 px-3 md:px-8 lg:pr-[70px] lg:pl-0">
          <div className="order-1 lg:order-2 md:py-10">
            <Image
              src="/images/copycrusher-logo.svg"
              width={252}
              height={44}
              alt="metutor-logo"
            />
            <h1 className="font-40 pro-medium leading-10 md:leading-[48px] opacity-80 pt-7">
              Connect, optimize, and  dominate with top trading 
              rooms
            </h1>
            <div className="pt-6 flex items-center flex-wrap gap-3 text-[#12112C] font-12 pro-normal leading-4">
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                Online Education
              </span>
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                E-learning
              </span>
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                One to one tutoring
              </span>
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                Homework help
              </span>
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                Uni prep
              </span>
              <span className="border border-[rgba(18,17,44,0.12)] rounded-full py-2 px-4">
                Advance courses
              </span>
            </div>

            <div className="pt-10">
              <button className="font-16 pro-medium leading-5 px-4 py-3 bg-[#05194A] rounded-lg gap-1 flex justify-center items-center text-white">
                View case study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5.28607 5.28595L5.28607 6.94766L11.8681 6.95355L4.69681 14.1248L5.87532 15.3033L13.0466 8.13206L13.0525 14.714L14.7142 14.714V5.28595H5.28607Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="order-2 lg:order-1 w-full h-full">
            <video
              src="/images/copycrusher-video.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;