import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const ApplyNow = async (userData) => {
  try {
    const axiosconfig = {
      headers: {
        // "Content-Type": "application/json", 
      },
    };

    const response = await axios.post(
      `${BASE_URL}/candidate/apply`,
      userData,
      axiosconfig
    );

    return response.data;
  } catch (error) {
    console.log("error fetching job detail", error);
  }
};
