import React from "react";
import Detail from "./Detail";
import { getBlog } from "@/app/api/blog/getBlog";

export async function generateStaticParams() {
  try {
    const response = await getBlog();
    const blogs = response?.data || [];

    // Use slug instead of id
    return blogs.map((blog) => ({
      detail: String(blog.slug), 
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

const Page = ({ params }) => {
  return (
    <div>
      <Detail slug={params.detail} />
    </div>
  );
};

export default Page;
