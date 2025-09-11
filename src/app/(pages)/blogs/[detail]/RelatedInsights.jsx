// import { getBlog } from "@/app/api/blog/getBlog";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const RelatedInsights = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         console.log("📡 Fetching blogs...");
//         setLoading(true);
//         const response = await getBlog();
//         console.log("✅ Blog API Response:", response);

//         if (response?.data) {
//           console.log("⛳ Blogs received:", response.data); // ADD THIS

//           setBlogs(response.data);
//         } else {
//           setBlogs([]);
//           setError("No blog data found");
//         }
//       } catch (err) {
//         console.error("🚨 Fetch error:", err);
//         setError(err?.message || "An error occurred while fetching blogs");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div className="container-class px-5 sm:px-10 md:px-20 space-y-[60px]">
//       <div className="flex flex-col items-center text-center">
//         <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
//           Related Insights
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs?.map((card) => (
//           <Link
//             href={`/blogs/${card.slug}`}
//             key={card.id}
//             className="flex flex-col space-y-4"
//           >
//             <div className="w-full aspect-video relative rounded-xl overflow-hidden">
//               <Image
//                 src={
//                   card.image?.startsWith("http")
//                     ? card.image
//                     : "/images/fallback.jpg"
//                 }
//                 fill
//                 alt={card.title}
//                 className="object-cover rounded-xl"
//               />
//             </div>
//             <div className="space-y-2">
//               <span className="business-tag w-fit">
//                 {card.category || "Uncategorized"}
//               </span>
//               <h2 className="text-lg md:text-xl pro-semibold">{card.title}</h2>
//               <div className="flex items-center justify-between flex-wrap gap-y-2">
//                 <div className="flex items-center gap-2.5">
//                   <Image
//                     src={
//                       card.auther_image?.startsWith("http")
//                         ? card.auther_image
//                         : "/images/person1.svg"
//                     }
//                     width={40}
//                     height={40}
//                     alt="Author"
//                     className="rounded-full"
//                   />
//                   <p className="text-base pro-medium">
//                     {card.auther_name || "Unknown"}
//                   </p>
//                 </div>
//                 <p className="text-base opacity-60 pro-medium">
//                   {card.created_at}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedInsights;
