// import React from "react";
// import Detail from "./Detail";
// import { getBlog } from "@/app/api/blog/getBlog";

// export async function generateStaticParams() {
//   try {
//     const response = await getBlog();
//     const blogs = response?.data || [];

//     // fallback to prevent build errors
//     if (blogs.length === 0) {
//       return [{ detail: "sample-blog-slug" }];
//     }

//     return blogs.map((blog) => ({
//       detail: String(blog.slug),
//     }));
//   } catch (error) {
//     console.error("Failed to generate static params:", error);
//     return [{ detail: "sample-blog-slug" }]; // fallback
//   }
// }

// const Page = ({ params }) => {
//   return (
//     <div>
//       <Detail slug={params.detail} />
//     </div>
//   );
// };

// export default Page;
