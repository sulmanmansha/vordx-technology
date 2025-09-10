import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getJobs = async () => {
  try {
    const axiosconfig = {
        headers: {
          "Content-Type": "application/json",
        },
    };

    
    const response = await axios.get(`${BASE_URL}/job/career`, axiosconfig);

    return response.data;
  } catch (error) {
    console.log("error fetching jobs", error);
  }
};
