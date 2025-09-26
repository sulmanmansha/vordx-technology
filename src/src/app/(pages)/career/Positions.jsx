"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getJobs } from "@/app/api/career/getJobs";

const Positions = () => {
  const [jobs, setJobs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await getJobs();
      if (res?.data) {
        setJobs(res.data);
      }
    };
    fetchJobs();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleJobs = jobs.slice(0, visibleCount);

  return (
    <div className="container-class p-5 sm:p-10 md:px-[120px] py-[40px] space-y-[60px]">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
          Open Positions / Job Listings
        </h1>
        <p className="text-[20px] pro-normal leading-6 opacity-80 pt-4 max-w-[870px] w-full">
          Explore exciting opportunities to grow your career with us. We’re
          always looking for passionate, talented individuals to join our team.
        </p>
      </div>

      <div className="space-y-8">
        {visibleJobs.length === 0 ? (
          <div className="flex flex-col items-center text-center px-4">
            <Image
              src="/images/no-job.png"
              alt="No jobs available"
              width={200}
              height={200}
              className="object-contain mb-4"
            />
            <h1 className="text-[28px] md:text-[32px] pro-normal mb-2">
              No jobs available at the moment.
            </h1>
            <p className="max-w-[340px] text-600">
              We don’t have any open roles at the moment, but please check back soon.
            </p>
          </div>

        ) : (
          visibleJobs.map((job) => (
            <div
              key={job.id}
              className="p-5 space-y-8 rounded-xl border border-[#FFFFFF33] bg-[#40434733] transition-all duration-500 ease-in-out hover:rounded-[12px] hover:border hover:border-[#A1F91952] hover:bg-[#A1F91908]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-[32px] leading-10 pro-bold">
                    {job.title}
                  </h1>
                  <p className="text-[16px] leading-5 pro-normal">
                    {job.created_at || "N/A"}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 sm:gap-11">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/fullTime.svg"
                      width={24}
                      height={24}
                      alt="type"
                    />
                    <h1 className="text-[16px] pro-normal leading-5">
                      {job.type || "Not specified"}
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/locationIcon.svg"
                      width={24}
                      height={24}
                      alt="location"
                    />
                    <h1 className="text-[16px] pro-normal leading-5">
                      {job.location || "N/A"}
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/salaryIcon.svg"
                      width={24}
                      height={24}
                      alt="salary"
                    />
                    <h1 className="text-[16px] pro-normal leading-5">
                      {job.salaray_range || "Not mentioned"}
                    </h1>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[#FFFFFF70] text-[20px] pro-normal leading-7">
                  We’re hiring for this role. Click below to learn more...
                  <span className="text-[#A1F919] opacity-100">
                    <Link href={`/career/${job.slug}`}> Read more</Link>
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
                <Link href={`/career/apply/${job.id}`} className="primary-btn">
                  Apply Now
                </Link>
                <div className="text-[16px] pro-medium leading-5">
                  <span className="opacity-40 mr-1">Last day to apply:</span>
                  <span className="opacity-80">
                    {job.apply_end_date || "Not set"}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}

        {visibleCount < jobs.length && (
          <div className="flex items-center justify-center">
            <button onClick={handleLoadMore} className="primary-btn">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Positions;
