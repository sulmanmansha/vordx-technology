// import axios from "axios";
// import toast from "react-hot-toast";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// export const getBlogDetail = async (slug) => {
//   try {
//     const axiosconfig = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//     };

//     const response = await axios.get(
//       `${BASE_URL}/blog/detail/${slug}`,
//       axiosconfig
//     );

//     return response.data;
//   } catch (error) {
//     console.log("error fetching blog detail", error);
//     toast.error(error.message || "failed to fetch blogs detail");
//   }
// };
