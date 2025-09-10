import React from "react";
import Apply from "./Apply";

import { getJobs } from "@/app/api/career/getJobs";

export async function generateStaticParams() {
  try {
    const response = await getJobs(); 
    const jobs = response?.data || [];

    return jobs.map((job) => ({
      apply: job.id.toString(),
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

const page = () => {
  return (
    <div>
      <Apply />
    </div>
  );
};

export default page;
