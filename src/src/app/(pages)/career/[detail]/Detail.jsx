"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/Layout/Header";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import Link from "next/link";
import { useParams } from "next/navigation";
import Button from "@/app/shared/Button";
import { getJobDetail } from "@/app/api/career/getJobDetail";

const Detail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fullUrl = typeof window !== "undefined" ? window.location.href : "";
  const params = useParams(); // Get job ID from URL
  const jobId = params?.detail;

  useEffect(() => {
    const fetchData = async () => {
      if (!jobId) return;
      setLoading(true);
      const response = await getJobDetail(jobId);
      if (response?.data) {
        setJobData(response.data);
      }
      setLoading(false);
    };
    fetchData();
  }, [jobId]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[50vh] text-white">
        Loading job details...
      </div>
    );
  }

  if (!jobData) {
    return (
      <div className="flex items-center justify-center h-[50vh] text-white">
        No job details available.
      </div>
    );
  }

  return (
    <>
      <div className="pb-[30px] relative">
        <div className="absolute inset-0 bg-gradient-to-l from-[#3E03B340] via-[#A1F91940] to-[#3E03B340] z-0 max-h-24 h-full w-full filter blur-[24px]" />
        <Navbar />

        <div className="flex flex-col justify-center items-center text-center gap-3 mt-[30px] max-w-[990px] m-auto relative p-5 md:p-0">
          <div className="flex items-center gap-2 border border-[#FFFFFF1F] py-2 px-3 text-[#FFFFFF99] rounded-full uppercase text-[12px]">
            <img
              src="/images/job-detail.svg"
              alt="Job Icon"
              className="w-4 h-4"
            />
            <span>Job Detail</span>
          </div>

          <h1 className="text-[32px] md:text-[40px] lg:text-[68px] pro-medium leading-tight text-white">
            {jobData.title || "N/A"}
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-11">
            <InfoItem icon="/images/type.svg" label={jobData.type || "N/A"} />
            <InfoItem
              icon="/images/site.svg"
              label={jobData.location || "N/A"}
            />
            <InfoItem
              icon="/images/salary.svg"
              label={jobData.salaray_range || "N/A"}
            />
          </div>

          <Button
            href={`/career/apply/${jobData.id}`}
            text="Apply Now"
            className="mt-[32px]"
          />
        </div>
      </div>

      <div className="space-y-8 py-20 px-5 sm:px-10 max-w-[1000px] mx-auto w-full">
        {/* Share Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
            <div className="bg-[#1E1E1E] p-6 rounded-lg max-w-md w-full space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">
                  Share this job
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white text-lg font-bold hover:text-red-500"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <input
                  type="text"
                  value={fullUrl}
                  readOnly
                  className="flex-1 px-3 py-2 rounded bg-[#2C2C2C] text-white text-sm w-full"
                />
                <button
                  onClick={handleCopy}
                  className="text-sm text-white border border-[#A1F919] rounded px-3 py-1 hover:bg-[#A1F91920] transition"
                >
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>
              <div className="flex gap-3 items-center flex-wrap pt-2">
                <FacebookShareButton url={fullUrl}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <LinkedinShareButton url={fullUrl}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <TwitterShareButton url={fullUrl}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton url={fullUrl}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-end justify-end">
          <button
            className="flex items-center gap-2 text-[16px] leading-5 text-[#A1F919]"
            onClick={() => setIsModalOpen(true)}
          >
            Share this job
            <Image
              src="/images/sharejob.svg"
              width={24}
              height={24}
              alt="sharejob"
            />
          </button>
        </div>
        {/* Dynamic Content Sections */}
        {Array.isArray(jobData.content) && jobData.content.length > 0 ? (
          jobData.content.map((section, idx) => (
            <div key={idx} className="space-y-3">
              {section.heading && (
                <h1 className="blog-subheading">{section.heading}</h1>
              )}

              {/* Items: can be descriptions or features */}
              {Array.isArray(section.items) && section.items.length > 0 && (
                <div className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1">
                      {/* Render descriptions as paragraphs */}
                      {item.description?.map((desc, dIdx) => (
                        <p key={`desc-${dIdx}`} className="blog-para">
                          {desc}
                        </p>
                      ))}

                      {/* Render features as list items */}
                      {item.feature?.length > 0 && (
                        <ul className="blog-para list-disc list-inside space-y-1">
                          {item.feature.map((feature, fIdx) => (
                            <li key={`feature-${fIdx}`}>{feature}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic">No job description available.</p>
        )}

        {/* Additional Info */}
        <div className="space-y-4">
          <InfoRow
            label="Work Schedule"
            value={jobData.work_schedule || "N/A"}
          />
          <InfoRow label="Work Location" value={jobData.location || "N/A"} />
          <InfoRow
            label="Apply Date"
            value={`${jobData.apply_date || "N/A"} - ${
              jobData.apply_end_date || "N/A"
            }`}
          />
        </div>
        <div className="flex justify-center">
          <Button
            href={`/career/apply/${jobData.id}`}
            text="Apply Now"
            className="mt-[52px]"
          />
        </div>
      </div>
    </>
  );
};

// Subcomponents
const InfoItem = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    <Image src={icon} width={24} height={24} alt="icon" />
    <h1 className="text-[16px] pro-normal leading-5">{label}</h1>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div>
    <span className="blog-miniheading">{label}: </span>
    <span className="blog-para">{value}</span>
  </div>
);

export default Detail;
