// "use client";

// import Image from "next/image";
// import React from "react";

// const LeftDetail = ({ blogs }) => {
//   return (
//     <div className="container-class space-y-8">
//       <div className="space-y-4">
//         <h3 className="text-sm sm:text-base leading-5 uppercase break-words">
//           <span className="opacity-60">By</span> {blogs?.auther_name} |
//           <span className="opacity-60"> {blogs?.created_at}</span> |{" "}
//           {blogs?.category}
//         </h3>

//         <h1 className="text-[32px] sm:text-[40px] md:text-[48px] pro-semibold leading-[42px] sm:leading-[50px] md:leading-[60px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] max-w-full break-words">
//           {blogs?.title}
//         </h1>
//       </div>

//       <div className="w-full">
//         <Image
//           src={blogs?.image || "/images/blogImg1.svg"}
//           width={840}
//           height={400}
//           alt={blogs?.title}
//           className="w-full h-auto rounded-lg object-cover"
//         />
//       </div>

//       <div className="blog-para text-base sm:text-lg leading-relaxed text-[#A9A9A9]">
//         {blogs?.short_description}
//       </div>

//       {/* ✅ Dynamically render blog content */}
//       {blogs?.content?.map((section, index) => (
//         <div key={index} className="space-y-4">
//           {section.items?.map((item, idx) => {
//             return (
//               <div key={idx}>
//                 {/* Heading1 */}
//                 {"heading1" in item && item.heading1?.value && (
//                   <h2 className="blog-subheading text-lg sm:text-xl font-semibold text-white">
//                     {item.heading1.value}
//                   </h2>
//                 )}

//                 {/* Heading3 */}
//                 {"heading3" in item && item.heading3?.value && (
//                   <h3 className="blog-miniheading text-base sm:text-lg font-medium text-white">
//                     {item.heading3.value}
//                   </h3>
//                 )}

//                 {/* Description */}
//                 {"description" in item && item.description?.value && (
//                   <p className="blog-para text-base sm:text-lg leading-relaxed text-[#A9A9A9]">
//                     {item.description.value}
//                   </p>
//                 )}

//                 {/* Quotation */}
//                 {"quotation" in item &&
//                   item.quotation?.feature_icon_description && (
//                     <blockquote className="  pl-4 border-gray-400 text-[#A9A9A9]">
//                       {item.quotation.feature_icon_description}
//                     </blockquote>
//                   )}

//                 {/* Single Feature Point */}
//                 {"feature" in item && item.feature?.value && (
//                   <ul className="list-disc list-inside pl-4 text-[#A9A9A9]">
//                     <li className="blog-para text-base sm:text-lg leading-relaxed">
//                       {item.feature.value}
//                     </li>
//                   </ul>
//                 )}

//                 {/* Ordered List */}
//                 {"ordered_list" in item &&
//                   item.ordered_list?.items?.length > 0 && (
//                     <ol className="list-decimal list-inside space-y-2 blog-para text-base sm:text-lg leading-relaxed text-[#A9A9A9] pl-4">
//                       {item.ordered_list.items.map((liItem, liIndex) => (
//                         <li key={liIndex}>{liItem.value}</li>
//                       ))}
//                     </ol>
//                   )}
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LeftDetail;
