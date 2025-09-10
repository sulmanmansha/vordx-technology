import React from "react";
import Detail from "./Detail";
import { getJobs } from "@/app/api/career/getJobs";

export async function generateStaticParams() {
  try {
    const res = await getJobs();
    const jobs = res?.data || [];

    return jobs.map((job) => ({
      detail: String(job.slug),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

const Page = ({ params }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Right animation */}
      <div className="absolute -right-72 top-[25%] animate-ellipse">
        <div className="ellipse-container blur-[150px] opacity-30">
          <div className="ellipse blue"></div>
          <div className="ellipse green"></div>
        </div>
      </div>

      {/* Detail component */}
      <Detail  />

      {/* Left animation */}
      <div className="absolute -left-72 top-[55%] animate-ellipse">
        <div className="ellipse-container blur-[150px] opacity-30">
          <div className="ellipse blue"></div>
          <div className="ellipse green"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
